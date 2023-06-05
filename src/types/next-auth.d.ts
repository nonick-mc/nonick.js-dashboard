import NextAuth from 'next-auth';
import { DiscordProfile } from 'next-auth/providers/discord';
import { Connection } from '.';

declare module "next-auth" {
  interface Session {
    accessToken: string,
    user: DiscordProfile,
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken: string,
    user: DiscordProfile,
  }
}