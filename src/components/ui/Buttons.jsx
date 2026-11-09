import Link from 'next/link';
import FlipText from './FlipText';

const isExternal = (href) => /^(https?:|mailto:|tel:)/.test(href);

function Anchor({ href, className, children, ...rest }) {
  if (isExternal(href)) {
    return <a href={href} className={className} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" {...rest}>{children}</a>;
  }
  return <Link href={href} className={className} {...rest}>{children}</Link>;
}

export function ArrowIcon({ icon = 'tji-arrow-right' }) {
  return <span><i className={icon} /><i className={icon} /></span>;
}

export function IconButton({ href, children, className = '' }) {
  return (
    <Anchor className={`tj_icon_btn flip-text-wrap ${className}`.trim()} href={href}>
      <div className="icon_btn scale"><ArrowIcon /></div>
      <span className="flip-text"><FlipText>{children}</FlipText></span>
    </Anchor>
  );
}

export function BorderedButton({ href, children, className = '' }) {
  return (
    <Anchor className={`tj_bordered_btn flip-text-wrap ${className}`.trim()} href={href}>
      <span className="flip-text"><FlipText>{children}</FlipText></span>
    </Anchor>
  );
}

export function SolidButton({ href, children, className = '' }) {
  return (
    <Anchor className={`tj_btn flip-text-wrap ${className}`.trim()} href={href}>
      <span className="flip-text"><FlipText>{children}</FlipText></span>
    </Anchor>
  );
}

export function UserButton({ href, children, avatar = '/images/users/h1-hero-user-img.png' }) {
  return (
    <Anchor className="tj_user_profile flip-text-wrap" href={href}>
      <div className="avatar"><img alt="" loading="lazy" width="96" height="96" src={avatar} /></div>
      <div className="name flip-text"><FlipText>{children}</FlipText></div>
    </Anchor>
  );
}

export { Anchor };
