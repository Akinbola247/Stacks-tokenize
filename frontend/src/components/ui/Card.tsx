export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-[#1F1E1F] rounded-[24px] p-4 ${className}`}>
      {children}
    </div>
  );
}
