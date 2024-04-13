export const dynamic = "force-dynamic";
import { getData } from '@/utils/getData'
// TODO: Refactoring
export const GET = async () => {
    const data = await getData()
    console.log(data)
    return new Response(JSON.stringify(data))
}