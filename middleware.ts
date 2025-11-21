// middleware.ts
import NextAuth from 'next-auth';
import { authConfig } from '@/auth.config'; // 👈 Ajusta la ruta si tu auth.ts está en otra ubicación

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};