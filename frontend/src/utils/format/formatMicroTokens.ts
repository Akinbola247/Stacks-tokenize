export function formatMicroTokens(micro: number | bigint, decimals = 6): string {
  const value = Number(micro) / 10 ** decimals;
  return value.toLocaleString(undefined, { maximumFractionDigits: decimals });
}
