const fs = require('fs');

// 1. Update src/app/blog/page.js
const blogPageContent = `import { BlogHero, BlogGrid } from '@/components/sections/blog/BlogSections';
import Cta from '@/components/sections/Cta';
import { posts, blogFilters } from '@/data/blog';

export const metadata = {
  title: 'Blog: Marketing and Content Tips for Pune Brands',
  description: 'Practical tips on SEO, ads, social media, UGC, product shoots and ad films, written for business owners in Pune.',
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogGrid posts={posts} filters={blogFilters} />
      <Cta title="Want help with this?" message="Hi PodShot, I read your blog and want help with my marketing." />
    </>
  );
}
`;
fs.writeFileSync('src/app/blog/page.js', blogPageContent.replace(/\n/g, '\r\n'), 'utf8');
console.log('Updated src/app/blog/page.js');

// 2. Update src/components/sections/blog/BlogSections.jsx
let secCode = fs.readFileSync('src/components/sections/blog/BlogSections.jsx', 'utf8');

// Replace BlogHero definition with centered version
const newBlogHero = `export function BlogHero() {
  return (
    <section className="ps-blog-hero text-center fix">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-9 text-center">
            <div className="ps-blog-hero-centered">
              <div className="ps-blog-single-line tj-fade">
                <span className="ps-blog-badge">[ BLOG ]</span>
                <span className="ps-blog-sep">•</span>
                <span className="ps-blog-line-text">Articles, guides &amp; marketing tips for growing businesses</span>
              </div>
              <h1 className="ps-blog-hero-heading tj-reveal-line">
                Marketing tips for local brands
              </h1>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}`;

// Find BlogHero in secCode
const heroRegex = /export function BlogHero\s*\([\s\S]*?<\/section>\s*\);\s*\}/;
if (!heroRegex.test(secCode)) {
  console.error('Could not find BlogHero in BlogSections.jsx');
  process.exit(1);
}
secCode = secCode.replace(heroRegex, newBlogHero);

// Also update BlogGrid to remove header left-right split and center filter buttons
const gridRegex = /export function BlogGrid\s*\([\s\S]*?return\s*\([\s\S]*?<\/section>\s*\);\s*\}/;
const newBlogGrid = `export function BlogGrid({ title, posts, filters }) {
  const [active, setActive] = useState('All');
  const shown = active === 'All' ? posts : posts.filter((p) => p.category === active);
  return (
    <section className="tj_blog_grid_area container-space tj_filter fix">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            {title && (
              <div className="section_heading text-center mb-4">
                <h2 className="sec_title tj-reveal-line">{title}</h2>
              </div>
            )}
            <div className="tj_filter_btn_group category-wrap justify-content-center">
              {Array.from(new Set(['All', ...(filters || [])])).map((f) => (
                <button key={f} type="button" className={\`tj_filter_btn category flip-text-wrap\${active === f ? ' active' : ''}\`} onClick={() => setActive(f)}>
                  <span className="flip-text"><FlipText>{f}</FlipText></span>
                </button>
              ))}
            </div>
            <div className="tj_blog_grid tj_filter_item_wrapper">
              {shown.map((p) => <PostCard key={p.slug} p={p} className="tj_filter_item" />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}`;

secCode = secCode.replace(gridRegex, newBlogGrid);
fs.writeFileSync('src/components/sections/blog/BlogSections.jsx', secCode, 'utf8');
console.log('Updated src/components/sections/blog/BlogSections.jsx');

// 3. Update src/app/globals.css
let css = fs.readFileSync('src/app/globals.css', 'utf8');
const heroMarker = '/* Centered Blog Hero Section */';
const heroIdx = css.indexOf(heroMarker);

if (heroIdx !== -1) {
  css = css.slice(0, heroIdx);
}

const finalHeroCSS = `/* Centered Blog Hero Section */
.ps-blog-hero {
  padding-top: clamp(140px, 13vw, 175px);
  padding-bottom: 24px;
}

.ps-blog-hero-centered {
  text-align: center;
  max-width: 860px;
  margin: 0 auto;
}

.ps-blog-single-line {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--tj-color-text-body);
  margin-bottom: 16px;
}

.ps-blog-single-line .ps-blog-badge {
  font-family: var(--tj-ff-heading);
  font-weight: 600;
  color: var(--tj-color-heading-primary);
}

.ps-blog-single-line .ps-blog-sep {
  opacity: 0.45;
}

.ps-blog-hero-heading {
  font-family: var(--tj-ff-heading);
  font-weight: var(--tj-fw-bold);
  font-size: clamp(34px, 4.4vw, 62px);
  line-height: 1.1;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  color: var(--tj-color-heading-primary);
  margin: 0 auto 16px auto;
}

.ps-blog-hero-subline {
  font-size: clamp(15px, 1.15vw, 18px);
  color: var(--tj-color-text-body);
  max-width: 640px;
  margin: 0 auto;
  line-height: 1.6;
}

.ps-blog-hero + .tj_blog_grid_area {
  padding-top: 15px;
}

.tj_filter_btn_group.category-wrap.justify-content-center {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 45px;
}
`;

css += finalHeroCSS.replace(/\n/g, '\r\n');
fs.writeFileSync('src/app/globals.css', css, 'utf8');
console.log('Updated src/app/globals.css');
