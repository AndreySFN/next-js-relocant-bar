import { promises as fs } from 'fs'
import path from 'path'

export const DATA_PATH = path.join(process.cwd(), 'data.json');

export const getData = async () => {
    try {
    const data = await fs.readFile(DATA_PATH, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') { // Проверка на отсутствие файла
      console.log(`Файл ${DATA_PATH} не найден. Создаем новый файл.`);
      await fs.writeFile(DATA_PATH, '{}'); // Создаем новый файл
      return {};
    } else {
      throw new Error(error, {status: 500}); // Если произошла другая ошибка, выбрасываем ее
    }
  }
}