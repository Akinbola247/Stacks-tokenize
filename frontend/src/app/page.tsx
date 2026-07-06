import { GameShell } from '@/components/game/GameShell';
// import DebugContracts from '../components/debug/DebugContracts';

export default function Home() {
  return (
    <main className="game-bg min-h-screen text-white">
      <div className="mx-auto max-w-5xl px-4 pb-16 pt-2">
        <GameShell />
        {/* <DebugContracts /> */}
      </div>
    </main>
  );
}
