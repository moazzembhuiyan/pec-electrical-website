import fs from 'fs';
import path from 'path';
const appDir = path.join(process.cwd(), 'src', 'app');
const outputDir = path.join(process.cwd(), 'src', 'generated');
const outputFile = path.join(outputDir, 'static-sitemap-routes.json');
const PAGE_FILES = new Set(['page.js', 'page.jsx', 'page.ts', 'page.tsx']);
const EXCLUDED_PREFIXES = ['/admin', '/dashboard', '/api'];
function isRouteGroup(name) {
  return name.startsWith('(') && name.endsWith(')');
}
function isDynamicSegment(name) {
  return name.startsWith('[') && name.endsWith(']');
}
function shouldIgnoreDirectory(name) {
  return (
    name.startsWith('.') || name.startsWith('_') || name.startsWith('@') || name === 'node_modules'
  );
}
function publicRouteFromSegments(segments) {
  const visible = segments.filter((segment) => !isRouteGroup(segment));
  return visible.length ? `/${visible.join('/')}` : '/';
}
function isExcludedRoute(route) {
  return EXCLUDED_PREFIXES.some((prefix) => route === prefix || route.startsWith(`${prefix}/`));
}
function walk(directory, segments = [], routes = []) {
  const entries = fs.readdirSync(directory, {
    withFileTypes: true,
  });
  const hasPage = entries.some((entry) => entry.isFile() && PAGE_FILES.has(entry.name));
  const hasDynamicSegment = segments.some(isDynamicSegment);
  if (hasPage && !hasDynamicSegment) {
    const route = publicRouteFromSegments(segments);
    if (!isExcludedRoute(route)) {
      routes.push(route);
    }
  }
  for (const entry of entries) {
    if (!entry.isDirectory() || shouldIgnoreDirectory(entry.name)) {
      continue;
    }
    walk(path.join(directory, entry.name), [...segments, entry.name], routes);
  }
  return routes;
}
if (!fs.existsSync(appDir)) {
  throw new Error(`App directory not found: ${appDir}`);
}
const routes = [...new Set(walk(appDir))].sort((a, b) => {
  if (a === '/') return -1;
  if (b === '/') return 1;
  return a.localeCompare(b);
});
fs.mkdirSync(outputDir, {
  recursive: true,
});
fs.writeFileSync(outputFile, JSON.stringify(routes, null, 2) + '\n');
console.log(`Generated ${routes.length} static sitemap routes`);
