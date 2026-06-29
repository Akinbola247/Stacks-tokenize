import { scaffoldConfig } from '@/scaffold.config';

export function explorerTxUrl(txid: string): string {
  return `${scaffoldConfig.explorerBaseUrl}${txid}${scaffoldConfig.explorerChainQuery}`;
}
