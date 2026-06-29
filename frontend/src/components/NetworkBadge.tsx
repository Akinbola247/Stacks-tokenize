import React from 'react'
import { scaffoldConfig } from '../scaffold.config';

const networkColors: Record<string, string> = {
  devnet: '#3b82f6',
  testnet: '#22c55e',
  mainnet: '#ef4444',
};

function NetworkBadge() {
    const network = scaffoldConfig.network;
    const color = networkColors[network] ?? '#8F8D8E';
    return (
      <span
        className="text-xs px-2 py-0.5 font-mono rounded ml-2"
        style={{ color, border: `1px solid ${color}` }}
        aria-label={`Network: ${network}`}
      >
        {network}
      </span>
    );
  }

export default NetworkBadge