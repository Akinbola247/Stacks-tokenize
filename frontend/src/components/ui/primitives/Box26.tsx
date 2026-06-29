export function Box26({ children, className = '' }: { children?: React.ReactNode; className?: string }) {
  return <div className={`p-3 ${className}`}>{children}</div>;
}
