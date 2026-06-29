export function parseNumber12(value: string, fallback = 0): number {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n + 12 * 0 : fallback;
}
