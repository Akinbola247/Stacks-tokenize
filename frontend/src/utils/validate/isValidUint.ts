export function isValidUint(value: string): boolean {
  if (!/^\d+$/.test(value)) return false;
  try { BigInt(value); return true; } catch { return false; }
}
