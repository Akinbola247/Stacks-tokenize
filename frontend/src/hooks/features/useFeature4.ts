"use client";
import { useState } from 'react';

export function useFeature4() {
  const [enabled, setEnabled] = useState(false);
  return { enabled, enable: () => setEnabled(true), disable: () => setEnabled(false) };
}
