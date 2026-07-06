export function toBaseUnits(amount: string, decimals: number): bigint {
  const trimmed = amount.trim();
  if (!trimmed || trimmed === '.') return 0n;
  const [whole = '0', frac = ''] = trimmed.split('.');
  const padded = frac.padEnd(decimals, '0').slice(0, decimals);
  return BigInt(whole + padded);
}
