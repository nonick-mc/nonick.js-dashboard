export function hasPermission(target: string, permission: number) {
  return (parseInt(target) & permission) === permission;
}