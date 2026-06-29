export function isStacksAddress(addr: string): boolean {
  return /^S[0-9A-Z]{38,39}$/.test(addr);
}
