"use client";
import deployments from '@/generated/deployments.json';
import { truncateAddress } from '@/utils/format/truncateAddress';
import { CopyButton } from '@/components/ui/CopyButton';
import { Card } from '@/components/ui/Card';

export function ContractAddress() {
  const id = (deployments as { contracts?: Record<string, { contract_id?: string }> }).contracts?.['tokenize-v7']?.contract_id ?? '';
  if (!id) return null;
  return (
    <Card className="mb-6 flex items-center justify-between gap-2 text-sm font-mono">
      <span className="text-[#8F8D8E]">Contract</span>
      <span className="text-white">{truncateAddress(id, 8, 8)}</span>
      <CopyButton text={id} label="Copy" />
    </Card>
  );
}
