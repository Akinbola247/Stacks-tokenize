"use client";
import { useAtomValue } from 'jotai';
import { addressAtom } from '@/store/wallet';

export function useConnectedAddress() {
  return useAtomValue(addressAtom);
}
