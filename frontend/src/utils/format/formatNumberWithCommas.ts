export function formatNumberWithCommas(n: number | string): string {
  const num = typeof n === 'string' ? parseFloat(n) : n;
  if (Number.isNaN(num)) return String(n);
  return num.toLocaleString();
}
