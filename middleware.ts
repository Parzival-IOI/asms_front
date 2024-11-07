import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
 
export async function middleware(request: NextRequest) {
    const cookie = request.cookies.has("asms-session");
    if ((!cookie && !request.nextUrl.pathname.startsWith('/login')) || request.nextUrl.pathname.length === 1) {
        return request.nextUrl.pathname.length !== 1 ? NextResponse.redirect(new URL('/login', request.url)): null
    }
    // return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}