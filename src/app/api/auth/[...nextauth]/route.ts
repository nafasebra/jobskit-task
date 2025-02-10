import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        console.log(credentials)
        if (
          credentials?.username === 'user' &&
          credentials?.password === '123456789'
        ) {
          return { id: '1', name: 'User', email: 'user@example.com' };
        }
        else {
          throw new Error('errrrrrrrrrrrrrrr')
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      console.log(token, user)
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }: any) {
      console.log(session, token)
      session.user.id = token.id;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // Required
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
