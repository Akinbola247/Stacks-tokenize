import { scaffoldConfig } from '@/scaffold.config';

export function explorerAddressUrl(address: string): string {
  const chain = scaffoldConfig.isMainnet ? 'mainnet' : 'testnet';
  return `https://explorer.hiro.so/address/${address}?chain=${chain}`;
}
