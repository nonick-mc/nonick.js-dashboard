import NextAuth, { AuthOptions } from 'next-auth';
import DiscordProvider, { DiscordProfile } from 'next-auth/providers/discord';

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      token: "https://discord.com/api/oauth2/token",
      userinfo: "https://discord.com/api/users/@me",
      authorization: { params: { scope: process.env.DISCORD_CLIENT_SCOPE } },
    }),
  ],
  callbacks: {
    jwt: async({ token, account, profile }) => {
      if (profile)
        token.user = profile as DiscordProfile;
      if (account?.access_token)
        token.accessToken = account.access_token;

      return token;
    },
    session: async({ session, token }) => {
      session.user = token.user;
      session.accessToken = token.accessToken;

      return session;
    }
  }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }