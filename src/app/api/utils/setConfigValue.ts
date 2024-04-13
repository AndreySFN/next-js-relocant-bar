import { DATA_PATH, getData } from '@/utils/getData';
import { promises as fs } from 'fs';

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

export const createSetConfigValue = (fieldName: string) => async (request: Request) => {
  if (!request.body) {
    return new Response('Цена не была передана на сервер', { status: 400 });
  }
  const newValue = await streamToString(request.body);
  try {
    const data = await getData();
    data[fieldName] = newValue;
    await fs.writeFile(DATA_PATH, JSON.stringify(data, null, 2), 'utf8');
    console.log(`${fieldName} updated successfully!`);
    return new Response(`Цена изменена на ${newValue}`);
  } catch (error) {
    console.error(`Failed to update ${fieldName}:`, error);
    return new Response(`Ошибка при обновлении цены ${error}`, { status: 500 });
  }
}
