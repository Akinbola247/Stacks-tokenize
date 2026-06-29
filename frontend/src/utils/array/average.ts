import { sum } from './sum';
export function average(nums: number[]): number {
  if (!nums.length) return 0;
  return sum(nums) / nums.length;
}
