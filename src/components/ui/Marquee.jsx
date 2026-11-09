import { Anchor } from './Buttons';

export function MarqueeButton({ href, children, light = false, className = '' }) {
  return (
    <Anchor className={`tj_marquee_btn${light ? ' light-btn' : ''} ${className}`.trim()} href={href}>
      <span className="text_btn"><span>{children}</span><span>{children}</span><span>{children}</span></span>
      <span className="icon_btn"><i className="tji-arrow-right" /></span>
    </Anchor>
  );
}

export function UnderlineButton({ href, children, light = false }) {
  return (
    <Anchor className={`tj_icon_btn text-underline-btn${light ? ' light-btn' : ''}`} href={href}>
      <div className="icon_btn"><span><i className="tji-arrow-right" /><i className="tji-arrow-right" /></span></div>
      <span className="underline-text">{children}</span>
    </Anchor>
  );
}

// Agina's per-letter flip effect used on large project titles.
export function SplitFlip({ text }) {
  const words = text.split(' ');
  return (
    <span>
      {words.map((w, wi) => (
        <span key={wi}>
          <span className="inline-block whitespace-nowrap">
            {[...w].map((c, ci) => (
              <span key={ci} className="relative inline-block char-wrap" aria-hidden="true">
                <span className="absolute inline-block">{c}</span>
                <span className="absolute inline-block">{c}</span>
                <span className="invisible">{c}</span>
              </span>
            ))}
          </span>
          {wi < words.length - 1 ? ' ' : ''}
        </span>
      ))}
      <span className="visually-hidden">{text}</span>
    </span>
  );
}
