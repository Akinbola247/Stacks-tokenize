"use client";
import { useState, useCallback } from 'react';
import { copyToClipboard } from '@/utils/browser/copyToClipboard';

export function useCopyFeedback() {
  const [copied, setCopied] = useState(false);
  const copy = useCallback(async (text: string) => {
    const ok = await copyToClipboard(text);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
    return ok;
  }, []);
  return { copied, copy };
}
