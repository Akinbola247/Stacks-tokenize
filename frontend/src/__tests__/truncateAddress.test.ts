import { describe, it, expect } from 'vitest';
import { truncateAddress } from '@/utils/format/truncateAddress';

describe('truncateAddress', () => {
  it('truncates long addresses', () => {
    const addr = 'SP1234567890123456789012345678901234567890';
    expect(truncateAddress(addr)).toContain('…');
  });
});
