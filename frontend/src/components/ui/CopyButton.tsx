"use client";
import { useCopyFeedback } from '@/hooks/useCopyFeedback';

export function CopyButton({ text, label = 'Copy' }: { text: string; label?: string }) {
  const { copied, copy } = useCopyFeedback();
  return (
    <button
      type="button"
      onClick={() => copy(text)}
      className="text-xs font-mono text-[#8F8D8E] hover:text-white transition-colors"
      aria-label={`Copy ${label}`}
    >
      {copied ? 'Copied!' : label}
    </button>
  );
}
