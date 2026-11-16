/** @type {import('next').NextConfig} */
// Subfolder deployments (GitHub Pages /podshot or test cPanel folder like /podshot-creative-agency)
// need basePath/assetPrefix set at build time so CSS, JS chunks, images and links resolve under that path.
// Default `npm run build` leaves basePath empty for root domain hosting.
const rawBase = process.env.SITE_BASE_PATH || (process.env.GH_PAGES === '1' ? '/podshot' : '');
const basePath = rawBase ? `/${rawBase.replace(/^\/+|\/+$/g, '')}` : '';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  ...(basePath
    ? {
        basePath,
        assetPrefix: basePath,
        env: { NEXT_PUBLIC_BASE_PATH: basePath },
      }
    : {}),
};

export default nextConfig;
