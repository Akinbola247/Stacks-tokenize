export function parsePrincipal(value: string): { address: string; contract?: string } {
  const parts = value.split('.');
  return parts.length > 1
    ? { address: parts[0], contract: parts.slice(1).join('.') }
    : { address: value };
}
