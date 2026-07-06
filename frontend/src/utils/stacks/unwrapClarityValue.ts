/** Unwrap nested cvToValue results, e.g. `{ type: 'uint', value: '1500000' }` → `'1500000'`. */
export function unwrapClarityValue(raw: unknown): unknown {
  if (raw == null || typeof raw !== 'object') return raw;

  const obj = raw as Record<string, unknown>;
  if ('value' in obj && typeof obj.type === 'string') {
    return unwrapClarityValue(obj.value);
  }

  return raw;
}

export function clarityToString(raw: unknown, fallback = ''): string {
  const v = unwrapClarityValue(raw);
  if (v == null) return fallback;
  if (typeof v === 'string') return v;
  if (typeof v === 'bigint' || typeof v === 'number') return String(v);
  if (typeof v === 'boolean') return String(v);
  return fallback;
}

export function clarityToBigInt(raw: unknown): bigint {
  const v = unwrapClarityValue(raw);
  if (typeof v === 'bigint') return v;
  if (typeof v === 'number' && Number.isFinite(v)) return BigInt(Math.trunc(v));
  if (typeof v === 'string' && v !== '') return BigInt(v);
  throw new Error(`Cannot convert clarity value to BigInt: ${JSON.stringify(raw)}`);
}

export function clarityToNumber(raw: unknown, fallback: number): number {
  const v = unwrapClarityValue(raw);
  if (typeof v === 'number' && Number.isFinite(v)) return v;
  if (typeof v === 'bigint') return Number(v);
  if (typeof v === 'string' && v !== '') {
    const n = Number(v);
    return Number.isFinite(n) ? n : fallback;
  }
  return fallback;
}
