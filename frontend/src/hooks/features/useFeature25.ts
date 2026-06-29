"use client";
import { useState } from 'react';

export function useFeature25() {
  const [enabled, setEnabled] = useState(false);
  return { enabled, enable: () => setEnabled(true), disable: () => setEnabled(false) };
}
