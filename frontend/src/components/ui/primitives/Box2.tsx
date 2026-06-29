export function Box2({ children, className = '' }: { children?: React.ReactNode; className?: string }) {
  return <div className={`p-3 ${className}`}>{children}</div>;
}
