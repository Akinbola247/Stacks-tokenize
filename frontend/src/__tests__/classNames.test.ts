import { describe, it, expect } from 'vitest';
import { classNames } from '@/utils/string/classNames';

describe('classNames', () => {
  it('joins truthy parts', () => expect(classNames('a', false, 'b')).toBe('a b'));
});
