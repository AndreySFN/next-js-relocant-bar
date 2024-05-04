import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    const authHeader = request.headers.get('Authorization');
    
    const apiToken = process.env.API_TOKEN;

    if (authHeader && authHeader === apiToken) {
        return NextResponse.next();
    } else {
        return new Response('Unauthorized', { status: 401 });
    }
}

export const config = {
    matcher: '/api/:path*', 
};
