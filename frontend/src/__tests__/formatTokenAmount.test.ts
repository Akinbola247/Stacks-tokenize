import { describe, it, expect } from 'vitest';
import { formatTokenAmount } from '@/utils/format/formatTokenAmount';

describe('formatTokenAmount', () => {
  it('formats whole tokens', () => {
    expect(formatTokenAmount(1_000_000n, 6)).toBe('1');
  });
  it('formats fractional tokens', () => {
    expect(formatTokenAmount(1_500_000n, 6)).toBe('1.5');
  });
});
