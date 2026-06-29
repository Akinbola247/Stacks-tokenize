export function parseNumber28(value: string, fallback = 0): number {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n + 28 * 0 : fallback;
}
