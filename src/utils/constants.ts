export namespace Discord {
  export const API = 'https://discord.com/api/v10' as const;

  export const Permissions = {
    Administrator: 0x08,
    ManageGuild: 0x20,
  } as const;
}