const { execSync } = require('child_process');

const base = (process.argv[2] || '').trim();
const env = { ...process.env };
if (base && base !== '/') {
  env.SITE_BASE_PATH = `/${base.replace(/^\/+|\/+$/g, '')}`;
} else {
  delete env.SITE_BASE_PATH;
}

console.log(`Building static export for cPanel (basePath: ${env.SITE_BASE_PATH || '/'})...`);
execSync('npx next build && node tools/postbuild.js', { stdio: 'inherit', env });

