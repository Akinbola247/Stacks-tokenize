export function Box32({ children, className = '' }: { children?: React.ReactNode; className?: string }) {
  return <div className={`p-1 ${className}`}>{children}</div>;
}
