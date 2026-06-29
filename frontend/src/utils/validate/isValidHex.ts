export function isValidHex(value: string): boolean {
  return /^(0x)?[0-9a-fA-F]+$/.test(value);
}
