import Link from 'next/link';
import { notFound } from 'next/navigation';
import FlipText from '@/components/ui/FlipText';
import { UnderlineButton } from '@/components/ui/Marquee';
import { ArticleBody } from '@/components/sections/Article';
import Cta from '@/components/sections/Cta';
import { posts, postHref } from '@/data/blog';
import { site } from '@/data/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  return p ? { title: p.title, description: p.excerpt } : {};
}

const readTime = (p) => `${Math.max(2, Math.round(p.body.map((b) => [].concat(b[1]).join(' ')).join(' ').split(/\s+/).length / 200))} minutes`;

export default async function PostPage({ params }) {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) notFound();
  const related = posts.filter((x) => x.slug !== p.slug && x.category === p.category).concat(posts.filter((x) => x.slug !== p.slug)).slice(0, 1)[0];
  return (
    <>
      <section className="tj_blog_details container-space">
        <div className="inner_top_gap" />
        <div className="container-fluid">
          <div className="tj_blog_details_header row">
            <div className="tj_blog_details_header_left col-lg-4 tj-fade">
              <Link className="tj_icon_btn text-underline-btn blog_btn flip-text-wrap" href="/blog">
                <div className="icon_btn"><span><i className="tji-arrow-left" /><i className="tji-arrow-left" /></span></div>
                <span className="underline-text flip-text"><FlipText>Back to blog</FlipText></span>
              </Link>
            </div>
            <div className="tj_blog_details_header_right col-lg-8 tj-fade">
              <div className="blog_meta_item categories"><Link className="category" href="/blog">{p.category}</Link></div>
              <h1 className="tj_blog_details_title title-anim">{p.title}</h1>
              <div className="blog-date">
                <div className="blog-date-item"><span className="blog-date-title">Date: </span>{p.date}</div>
                <div className="blog-date-item"><span className="blog-date-title">Time to read: </span>{readTime(p)}</div>
              </div>
            </div>
          </div>
          <div className="row row-gap-5 flex-column-reverse flex-lg-row">
            <div className="col-12" />
            <div className="col-lg-4">
              <div className="tj_blog_sidebar">
                <div className="tj_blog_author_info tj-fade">
                  <div className="tj_blog_author">
                    <div className="author_images"><img alt="" loading="lazy" width="80" height="80" style={{ height: 'auto' }} src="/images/blog/blog-author.png" /></div>
                    <div className="author_text">
                      <div className="author_name fs-20"><span>By </span>{p.author}</div>
                      <span className="author_degination">Wakad, Pune</span>
                    </div>
                  </div>
                  <div className="author_share">
                    <p className="author_share_title">Follow us:</p>
                    <ul className="author_socials tj_socials">
                      {site.socials.map((s) => <li key={s.label}><a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}><i className={s.icon} /></a></li>)}
                    </ul>
                  </div>
                </div>
                <div className="tj_blog_subscription tj-fade">
                  <p className="tj_blog_subscription_title">Have a question about this?</p>
                  <a className="tj_btn flip-text-wrap" href={site.whatsapp} target="_blank" rel="noreferrer"><span className="flip-text"><FlipText>Ask us on WhatsApp</FlipText></span></a>
                </div>
                {related && (
                  <div className="tj_blog_related">
                    <span className="sec_subtitle tj-fade">[ <span>Related post</span> ]</span>
                    <div className="tj_blog_grid tj-fade">
                      <article className="tj_blog_item tj_blog_item_standard">
                        <Link className="blog_image" href={postHref(related)}><img alt={related.title} loading="lazy" width="870" height="579" src={related.image} /></Link>
                        <div className="blog_content">
                          <div className="blog_meta">
                            <div className="blog_meta_item categories"><Link className="category" href={postHref(related)}>{related.category}</Link></div>
                            <div className="blog_meta_item date"><span>{related.date}</span></div>
                          </div>
                          <div className="blog_title ff-heading fw-sbold"><Link href={postHref(related)}>{related.title}</Link></div>
                          <div className="blog_desc"><p>{related.excerpt}</p></div>
                          <UnderlineButton href={postHref(related)}>Read more</UnderlineButton>
                        </div>
                      </article>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tj_blog_details_body">
                <div className="tj_blog_details_image tj-fade"><img alt={p.title} width="1788" height="1080" style={{ height: 'auto' }} src="/images/blog/blog-details.webp" /></div>
                <ArticleBody blocks={p.body} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cta title="Let’s talk!" message={`Hi PodShot, I read "${p.title}" and have a question.`} />
    </>
  );
}
