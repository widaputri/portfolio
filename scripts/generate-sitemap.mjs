import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const APP_DIR = path.join(ROOT, 'app');
const PUBLIC_DIR = path.join(ROOT, 'public');
const OUT_FILE = path.join(PUBLIC_DIR, 'sitemap.xml');
// Hardcoded site URL
const SITE_URL = 'https://wiwawuwewo.vercel.app';

function isPageFile(name) {
  return /^(page)\.(js|ts|jsx|tsx)$/.test(name);
}

function collectRoutes(dir, base = '') {
  let routes = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  // If this directory contains a page.* file, treat it as a route
  if (entries.some(e => e.isFile() && isPageFile(e.name))) {
    // skip dynamic routes (any segment with [ or ])
    if (!base.split('/').some(seg => /\[.+\]/.test(seg))) {
      const route = base === '' ? '/' : `/${base.replaceAll('\\', '/')}`;
      routes.push(route);
    }
  }

  for (const e of entries) {
    if (e.isDirectory()) {
      const name = e.name;
      // skip components, api or internal folders
      if (name === 'components' || name === 'api' || name.startsWith('_')) continue;
      const subdir = path.join(dir, name);
      const subbase = base === '' ? name : `${base}/${name}`;
      routes = routes.concat(collectRoutes(subdir, subbase));
    }
  }

  return routes;
}

function buildSitemap(routes) {
  const now = new Date().toISOString();
  const urls = routes.map(r => `  <url>\n    <loc>${SITE_URL.replace(/\/$/, '')}${r}</loc>\n    <lastmod>${now}</lastmod>\n  </url>`).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

try {
  if (!fs.existsSync(APP_DIR)) {
    console.error('app directory not found, skipping sitemap generation.');
    process.exit(0);
  }

  const routes = collectRoutes(APP_DIR);
  const unique = Array.from(new Set(routes)).sort((a, b) => a.localeCompare(b));

  ensureDir(PUBLIC_DIR);
  const xml = buildSitemap(unique);
  fs.writeFileSync(OUT_FILE, xml, 'utf8');
  console.log(`Sitemap written to ${OUT_FILE} with ${unique.length} routes.`);
} catch (err) {
  console.error('Error generating sitemap:', err);
  process.exit(1);
}
