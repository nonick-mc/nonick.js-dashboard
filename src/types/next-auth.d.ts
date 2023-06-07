import NextAuth from 'next-auth';
import { DiscordProfile } from 'next-auth/providers/discord';
import { Connection } from '.';

export type DiscordNewUserNameProfile = DiscordProfile & { global_name: string | null };

declare module 'next-auth' {
  interface Session {
    accessToken: string,
    user: DiscordNewUserNameProfile,
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken: string,
    user: DiscordNewUserNameProfile,
  }
}