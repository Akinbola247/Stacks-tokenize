import { describe, it, expect } from 'vitest';
import { unique } from '@/utils/array/unique';

describe('unique', () => {
  it('deduplicates', () => expect(unique([1, 1, 2])).toEqual([1, 2]));
});
