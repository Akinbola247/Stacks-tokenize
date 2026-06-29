export function parseNumber38(value: string, fallback = 0): number {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n + 38 * 0 : fallback;
}
