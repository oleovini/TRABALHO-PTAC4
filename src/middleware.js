'use server'
import { NextResponse } from "next/server";
import { validateToken } from "./app/functions/validateToken";

export const middleware = (request) => {

    const token = request.cookies.get('token')?.value;
    const urlLogin = new URL('/', request.url);
    const urlBlock = new URL('/pages/dashboard', request.url)
    const urlBlockRegister = new URL('/pages/registrar', request.url)
    const urlBlockAlter = new URL('/pages/alterar', request.url)
    const urlBlockAlterU = new URL('/pages/alteraruser', request.url)
    const isTokenValidated = validateToken(token);

    if (!isTokenValidated || !token) {
        if (request.nextUrl.pathname === '/pages/dashboard') {
            return NextResponse.redirect(urlLogin);
        }
    }

    if (!isTokenValidated || !token) {
        if (request.nextUrl.pathname === '/pages/alteraruser') {
            return NextResponse.redirect(urlLogin);
        }
    }

    if (!isTokenValidated || !token) {
        if (request.nextUrl.pathname === '/pages/alterar') {
            return NextResponse.redirect(urlLogin);
        }
    }

    if (!isTokenValidated || !token) {
        if (request.nextUrl.pathname === '/pages/registrar') {
            return NextResponse.redirect(urlLogin);
        }
    }

    if (isTokenValidated || token) {
        if (request.nextUrl.pathname === '/') {
            return NextResponse.redirect(urlBlock);
        }
    }
    if (isTokenValidated || token) {
        if (request.nextUrl.pathname === '/') {
            return NextResponse.redirect(urlBlockRegister);
        }
    }
    if (isTokenValidated || token) {
        if (request.nextUrl.pathname === '/') {
            return NextResponse.redirect(urlBlockAlter);
        }
    }

    if (isTokenValidated || token) {
        if (request.nextUrl.pathname === '/') {
            return NextResponse.redirect(urlBlockAlterU);
        }
    }



    NextResponse.next();
};
export const config = {
    matcher: ['/', '/pages/dashboard', '/pages/registrar', '/pages/alterar', '/pages/alteraruser']
};

