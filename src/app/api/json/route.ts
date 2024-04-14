import { DATA_PATH, getData } from '@/utils/getData';
import { promises as fs } from 'fs';

export const POST = async (request: Request) => {
    try {
        const data = await getData();
        const json = await request.json()
        const { path, value } = json
        const arrPath = path.split('.')
        const finalField = arrPath.pop()
        try {
            const finalObj = arrPath.reduce((acc: Record<string, unknown>, field: string) => acc[field], data);
            finalObj[finalField] = value
        } catch (error) {
            return new Response(`Path is not found: ${error}`, { status: 500 })
        }
        try {
            await fs.writeFile(DATA_PATH, JSON.stringify(data, null, 2), 'utf8')
        } catch (error) {
            return new Response(`Can't write data.json: ${error}`, { status: 500 })
        }
    } catch (error) {
        return new Response(`Can't open data.json: ${error}`, {status: 500})
    }
    return new Response('Completed successfuly')
}

export const DELETE = async (request: Request) => {
    try {
        const data = await getData();
        const json = await request.json()
        const { path, value } = json
        const arrPath = path.split('.')
        const finalField = arrPath.pop()
        try {
            const finalObj = arrPath.reduce((acc: Record<string, unknown>, field: string) => acc[field], data);
            delete finalObj[finalField]
        } catch (error) {
            return new Response(`Path is not found: ${error}`, { status: 500 })
        }
        try {
            await fs.writeFile(DATA_PATH, JSON.stringify(data, null, 2), 'utf8')
        } catch (error) {
            return new Response(`Can't write data.json: ${error}`, { status: 500 })
        }
    } catch (error) {
        return new Response(`Can't open data.json: ${error}`, {status: 500})
    }
    return new Response('Completed successfuly')
}

const GET = async () => {
    try {
        const data = await getData()
        return new Response(JSON.stringify(data))
    } catch (error) {
        return new Response(`Can't open data.json: ${error}`, {status: 500})
    }
}
