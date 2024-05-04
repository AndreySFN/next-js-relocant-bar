export async function createApiResponse<T>(action: Promise<T>): Promise<Response> {
    try {
        const result = await action;
        return new Response(JSON.stringify(result)); // Успешный ответ
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 }); // Ответ с ошибкой
    }
}
