import { describe, it, expect } from 'vitest';
import { isValidPrincipal } from '@/utils/validate/isValidPrincipal';

describe('isValidPrincipal', () => {
  it('rejects empty', () => expect(isValidPrincipal('')).toBe(false));
});
