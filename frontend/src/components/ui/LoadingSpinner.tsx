"use client";
export function LoadingSpinner({ size = 16 }: { size?: number }) {
  return (
    <span
      className="inline-block animate-spin rounded-full border-2 border-[#8F8D8E] border-t-[#FF550E]"
      style={{ width: size, height: size }}
      role="status"
      aria-label="Loading"
    />
  );
}
