export function Label({ htmlFor, children }: { htmlFor?: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="text-xs font-mono text-[#8F8D8E] block mb-1">
      {children}
    </label>
  );
}
