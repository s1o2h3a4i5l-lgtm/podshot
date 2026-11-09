export default function FlipText({ children }) {
  return (
    <>
      <span className="front">{children}</span>
      <span className="back">{children}</span>
    </>
  );
}

export function Bracket({ children, className = '' }) {
  return (
    <span className={className}>
      [ <span>{children}</span> ]
    </span>
  );
}
