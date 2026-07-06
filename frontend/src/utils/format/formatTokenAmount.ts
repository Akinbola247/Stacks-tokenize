import { clarityToBigInt } from '@/utils/stacks/unwrapClarityValue';

export function formatTokenAmount(raw: bigint | number | string | unknown, decimals = 6): string {
  const n =
    typeof raw === 'bigint'
      ? raw
      : typeof raw === 'number' || typeof raw === 'string'
        ? BigInt(raw)
        : clarityToBigInt(raw);
  const divisor = BigInt(10 ** decimals);
  const whole = n / divisor;
  const frac = (n % divisor).toString().padStart(decimals, '0').replace(/0+$/, '');
  return frac ? `${whole}.${frac}` : String(whole);
}
