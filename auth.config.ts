// app/lib/auth.config.ts (o donde lo tengas)
import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');

      if (isOnDashboard) {
        return isLoggedIn; // true si está logueado, false si no → redirige a /login
      } else if (isLoggedIn) {
        // Si está logueado y va a /login o /, lo redirige al dashboard
        const isLoginPage = nextUrl.pathname === '/login';
        if (isLoginPage || nextUrl.pathname === '/') {
          return Response.redirect(new URL('/dashboard', nextUrl));
        }
      }
      return true;
    },
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user; // opcional, si guardas rol
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  providers: []
} satisfies NextAuthConfig;