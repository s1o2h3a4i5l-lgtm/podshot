/** @type {import('next').NextConfig} */
// GitHub Pages serves this repo at https://<user>.github.io/podshot/, not the domain root,
// so every asset/link must be prefixed with /podshot or they'll 404 there.
// Set GH_PAGES=1 only for the Pages build; local dev/build stays at the root as before.
const forPages = process.env.GH_PAGES === '1';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  ...(forPages
    ? {
        basePath: '/podshot',
        assetPrefix: '/podshot',
        env: { NEXT_PUBLIC_BASE_PATH: '/podshot' },
      }
    : {}),
};

export default nextConfig;
