declare module 'process' {
  global {
    namespace NodeJS {
      interface ProcessEnv {
        DISCORD_CLIENT_ID: string;
        DISCORD_CLIENT_SECRET: string;
        DISCORD_CLIENT_SCOPE: string;
        DISCORD_CLIENT_TOKEN: string;
      }
    }
  }
}