import FlipText from './FlipText';
import { Anchor } from './Buttons';

// Agina Home 03 button styles.
export function BoxButton({ href, children, type, onClick }) {
  const inner = (
    <>
      <span className="tj_btn_icon"><i className="tji-arrow-right" /></span>
      <span className="tj_btn_text">{children}</span>
      <span className="tj_btn_icon"><i className="tji-arrow-right" /></span>
    </>
  );
  if (type) return <button type={type} className="tj_btn_2" onClick={onClick}>{inner}</button>;
  return <Anchor className="tj_btn_2" href={href}>{inner}</Anchor>;
}

export function RoundIconButton({ href, children }) {
  return (
    <Anchor className="tj_icon_btn rounded_icon flip-text-wrap no-border" href={href}>
      <div className="icon_btn hover-bg"><i className="tji-arrow-right" /></div>
      <span className="flip-text"><FlipText>{children}</FlipText></span>
    </Anchor>
  );
}
