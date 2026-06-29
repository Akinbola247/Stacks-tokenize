export function Box28({ children, className = '' }: { children?: React.ReactNode; className?: string }) {
  return <div className={`p-1 ${className}`}>{children}</div>;
}
