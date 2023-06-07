import { DiscordNewUserNameProfile } from '@/types/next-auth';
import NextAuth, { AuthOptions } from 'next-auth';
import DiscordProvider, { DiscordProfile } from 'next-auth/providers/discord';

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    // signIn: '/auth/signin'
  },
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      authorization: { params: { scope: process.env.DISCORD_CLIENT_SCOPE } },
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (profile)
        token.user = profile as DiscordNewUserNameProfile;
      if (account?.access_token)
        token.accessToken = account.access_token;
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      session.accessToken = token.accessToken;
      return session;
    }
  }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }