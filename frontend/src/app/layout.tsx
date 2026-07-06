import type { ReactNode } from 'react';
import './globals.css';
import { WalletProvider } from '../components/WalletConnect';
import Header from '../components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Stack Tokenized — Level Up Your Stack',
  description: 'Every tap in the game can become real on-chain currency. The loot layer for Stacks.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-game-bg">
      <head>
        <meta
          name="talentapp:project_verification"
          content="8982e2cc9b6ff40bea4745719d2b1e9e4886cb2ef08d9e37ae6ce705a48562e67d175fd2342ead5bd3b98e2992fc8f4c126636eb805e76ebb2055dafd1fe62d2"
        />
      </head>
      <body className="bg-game-bg text-white">
        <WalletProvider>
          <Header />
          {children}
          <Footer />
        </WalletProvider>
      </body>
    </html>
  );
}