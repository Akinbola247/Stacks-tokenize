export function microToTokens(micro: number | bigint, decimals = 6): number {
  return Number(micro) / 10 ** decimals;
}
