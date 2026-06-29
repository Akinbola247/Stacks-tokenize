"use client";
import { useAtomValue } from 'jotai';
import { addressAtom } from '@/store/wallet';

export function useIsWalletConnected(): boolean {
  return Boolean(useAtomValue(addressAtom));
}
