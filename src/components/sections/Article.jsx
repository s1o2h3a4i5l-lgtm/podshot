import { SolidButton } from '@/components/ui/Buttons';
import GuideToc from '@/components/ui/GuideToc';
import { BASE_PATH } from '@/lib/basePath';

// Renders article blocks with Agina's blog body styles.
// ['p', text] ['h2', text] ['h3', text] ['ul', [items]] ['ol', [items]] ['quote', text] ['table', { head: [], rows: [[]] }] ['img', src]
// Items in ul/ol can be "Bold part: rest of text" to get Agina's bold lead-in.
function Item({ text }) {
  const i = text.indexOf(': ');
  if (i > 0 && i < 40) return <li><b>{text.slice(0, i)}:</b> {text.slice(i + 2)}</li>;
  return <li>{text}</li>;
}

export function ArticleBody({ blocks, quoteAuthor = { name: 'PodShot Team', role: 'Wakad, Pune' } }) {
  return blocks.map(([type, value], i) => {
    switch (type) {
      case 'h2': return <h2 key={i} className="tj-fade">{value}</h2>;
      case 'h3': return <h3 key={i} className="tj-fade">{value}</h3>;
      case 'ul': return <ul key={i} className="tj-fade">{value.map((t) => <Item key={t} text={t} />)}</ul>;
      case 'ol': return <ol key={i} className="tj-fade">{value.map((t) => <Item key={t} text={t} />)}</ol>;
      case 'img': return <div key={i} className="tj_blog_details_image tj-fade"><img alt="" loading="lazy" width="1788" height="1080" style={{ height: 'auto' }} src={value} /></div>;
      case 'quote': return (
        <blockquote key={i} className="tj-fade">
          <p>“{value}”</p>
          <div className="tj_blog_author">
            <div className="author_images"><img alt="" loading="lazy" width="160" height="160" style={{ height: 'auto' }} src={`${BASE_PATH}/images/blog/blog-author.png`} /></div>
            <div className="author_text">
              <div className="author_name fs-20"><span>By </span>{quoteAuthor.name}</div>
              <span className="author_degination">{quoteAuthor.role}</span>
            </div>
          </div>
        </blockquote>
      );
      case 'table': return (
        <table key={i} className="tj-fade">
          <thead><tr>{value.head.map((h) => <th key={h}>{h}</th>)}</tr></thead>
          <tbody>{value.rows.map((r, ri) => <tr key={ri}>{r.map((c, ci) => <td key={ci}>{c}</td>)}</tr>)}</tbody>
        </table>
      );
      default: return <p key={i} className="tj-fade">{value}</p>;
    }
  });
}

const slug = (t) => `guide-${t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`;

// Intro = blocks before the first heading; each heading starts a section; the first quote and
// everything after it is the outro (quote + closing call to action).
function splitGuide(blocks) {
  const intro = [];
  const sections = [];
  const outro = [];
  blocks.forEach((b) => {
    const [type, value] = b;
    if (outro.length || type === 'quote') outro.push(b);
    else if (type === 'h2' || type === 'h3') sections.push({ id: slug(value), title: value, blocks: [] });
    else if (sections.length) sections[sections.length - 1].blocks.push(b);
    else intro.push(b);
  });
  return { intro, sections, outro };
}

function GuideBlocks({ blocks }) {
  return blocks.map(([type, value], i) => {
    if (type === 'ul') {
      return <ul key={i} className="ps-guide-list">{value.map((t) => <Item key={t} text={t} />)}</ul>;
    }
    if (type === 'ol') {
      return (
        <ol key={i} className="ps-guide-steps">
          {value.map((t, n) => {
            const at = t.indexOf(': ');
            const lead = at > 0 && at < 40 ? t.slice(0, at) : null;
            return (
              <li key={t}>
                <span className="step-n">{String(n + 1).padStart(2, '0')}</span>
                {lead && <b>{lead}</b>}
                <span className="step-t">{lead ? t.slice(at + 2) : t}</span>
              </li>
            );
          })}
        </ol>
      );
    }
    return <ArticleBody key={i} blocks={[[type, value]]} />;
  });
}

// Long-form service text: sticky title and contents on the left, numbered sections on the right,
// ending in the quote and a call to action.
export function Guide({ subtitle = 'The full guide', title, blocks }) {
  const { intro, sections, outro } = splitGuide(blocks);
  const quotes = outro.filter(([t]) => t === 'quote');
  const closing = outro.filter(([t]) => t !== 'quote');
  const [lead, ...introRest] = intro[0]?.[0] === 'p' ? intro : [null, ...intro];

  return (
    <section className="tj_blog_details container-space ps-guide sidebar-sticky-container tj-theme-bg">
      <div className="container-fluid">
        <div className="row row-gap-5">
          <div className="col-lg-4">
            <div className="ps-guide-side sidebar-sticky">
              <div className="section_heading">
                <span className="sec_subtitle tj-fade">[ <span>{subtitle}</span> ]</span>
                <h2 className="sec_title tj-reveal-line">{title}</h2>
              </div>
              {sections.length > 1 && <GuideToc items={sections.map(({ id, title: t }) => ({ id, title: t }))} />}
            </div>
          </div>
          <div className="col-lg-8">
            <div className="ps-guide-body tj_blog_details_body">
              {lead && <p className="ps-guide-lead tj-fade">{lead[1]}</p>}
              {introRest.length > 0 && <div className="ps-guide-intro"><GuideBlocks blocks={introRest} /></div>}
              {sections.map((s, i) => (
                <div key={s.id} id={s.id} className="ps-guide-section">
                  <span className="ps-guide-num tj-fade">{String(i + 1).padStart(2, '0')}</span>
                  <div className="ps-guide-section-body tj-fade">
                    <h3 className="ps-guide-h">{s.title}</h3>
                    <GuideBlocks blocks={s.blocks} />
                  </div>
                </div>
              ))}
              {quotes.length > 0 && <div className="ps-guide-quote"><ArticleBody blocks={quotes} /></div>}
              {closing.length > 0 && (
                <div className="ps-guide-cta tj-fade">
                  {closing.map(([, t], i) => <p key={i}>{t}</p>)}
                  <SolidButton href="/contact">Book a free call</SolidButton>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
