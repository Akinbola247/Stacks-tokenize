export function Box15({ children, className = '' }: { children?: React.ReactNode; className?: string }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}
