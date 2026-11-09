// GitHub Pages serves this site under /podshot/, not the domain root, so every hardcoded
// asset path ('/images/...', '/videos/...', '/brand/...') needs that prefix there.
// Next.js only auto-prefixes its own generated links (fonts, JS chunks, next/link, next/image);
// plain src="/images/..." strings in our components do not get it automatically, hence this.
// Empty string for normal local dev/builds; only set to '/podshot' when GH_PAGES=1 at build time
// (see next.config.mjs), so this is a no-op everywhere except the GitHub Pages build.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';
