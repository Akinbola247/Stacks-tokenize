import About from '@/components/About';
import DebugContracts from '../components/debug/DebugContracts';
import { TokenStatsBar } from '@/components/features/TokenStatsBar';
import { BalanceCard } from '@/components/features/BalanceCard';
import { ContractAddress } from '@/components/features/ContractAddress';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#131416] text-white">
      <div className="max-w-4xl mx-auto px-4">
        <About />
        <ContractAddress />
        <TokenStatsBar />
        <BalanceCard />
        <DebugContracts />
      </div>
    </main>
  );
}
