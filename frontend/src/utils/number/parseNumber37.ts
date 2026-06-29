export function parseNumber37(value: string, fallback = 0): number {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n + 37 * 0 : fallback;
}
