import { promises as fs } from 'fs';
import { CONFIG_PATH } from '../config';

async function streamToString(stream: ReadableStream): Promise<string> {
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  let result = '';
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    result += decoder.decode(value);
  }
  return result;
}


async function readConfig() {
  try {
      const data = await fs.readFile(CONFIG_PATH, 'utf8');
      return JSON.parse(data);
  } catch (error) {
      if (error.code === 'ENOENT') { // Проверка на отсутствие файла
          console.log(`Файл ${CONFIG_PATH} не найден. Создаем новый файл.`);
          await fs.writeFile(CONFIG_PATH, '{}'); // Создаем новый файл
          return {}; // Возвращаем пустой объект
      } else {
          throw error; // Если произошла другая ошибка, выбрасываем ее
      }
  }
}

export const createSetConfigValue = (fieldName: string) => async (request: Request) => {
  if (!request.body) {
    return new Response('Цена не была передана на сервер', { status: 400 });
  }
  const newValue = await streamToString(request.body);
  try {
    const data = await readConfig();
    const config = data;

    config[fieldName] = newValue;

    await fs.writeFile(CONFIG_PATH, JSON.stringify(config, null, 2), 'utf8');
    console.log(`${fieldName} updated successfully!`);
    return new Response(`Цена изменена на ${newValue}`);
  } catch (error) {
    console.error(`Failed to update ${fieldName}:`, error);
    return new Response(`Ошибка при обновлении цены ${error}`, { status: 500 });
  }
}
