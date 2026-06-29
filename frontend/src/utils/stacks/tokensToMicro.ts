export function tokensToMicro(tokens: number, decimals = 6): bigint {
  return BigInt(Math.round(tokens * 10 ** decimals));
}
