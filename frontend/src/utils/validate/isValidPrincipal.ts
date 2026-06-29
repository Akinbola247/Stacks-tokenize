export function isValidPrincipal(value: string): boolean {
  return /^S[0-9A-Z]{38,39}$/.test(value.trim());
}
