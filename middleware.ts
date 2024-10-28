import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
 
export async function middleware(request: NextRequest) {
    const cookie = request.cookies.has("asms-session");
    if (!cookie && !request.nextUrl.pathname.startsWith('/login')) {
        return NextResponse.redirect(new URL('/login', request.url))
    } 
}

export const config = {
    matcher: ['/((?!api|register|about|script|_next/static|_next/image|.*\\.png$).*)'],
}