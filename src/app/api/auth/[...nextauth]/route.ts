import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { pages } from 'next/dist/build/templates/app-page';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        console.log(credentials);
        if (
          credentials?.username === 'user' &&
          credentials?.password === '123456789'
        ) {
          return { id: '1', name: 'User', email: 'user@example.com' };
        } else {
          throw new Error('Failed to login');
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id;
        token.exp = Math.floor(Date.now() / 1000) + 30 * 60;
      }
      if (Date.now() >= token.exp * 1000) {
        throw new Error('Token expired');
      }
      return token;
    },
    async session({ session, token }: any) {
      session.user.id = token.id;
      session.expires = new Date(token.exp * 1000).toISOString();
      return session;
    },
  },
  session: {
    maxAge: 30 * 60, // 30 minutes in seconds
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
