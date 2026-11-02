import staticRoutes from '@/generated/static-sitemap-routes.json';

const SITE_URL = 'https://pecelectricalct.com';
const API_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://api.pecelectricalct.com/api/v1';

// Always request latest Blog and Service data
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// =====================================
// API RESPONSE NORMALIZER
// =====================================
function normalizeListResponse(payload) {
  if (Array.isArray(payload)) {
    return {
      items: payload,
      totalPages: 1,
    };
  }

  const items = Array.isArray(payload?.data)
    ? payload.data
    : Array.isArray(payload?.blogs)
      ? payload.blogs
      : Array.isArray(payload?.services)
        ? payload.services
        : Array.isArray(payload?.result)
          ? payload.result
          : [];

  const totalPages = Math.max(
    1,
    Number(payload?.meta?.totalPage ?? payload?.meta?.totalPages ?? payload?.totalPages ?? 1) || 1
  );

  return {
    items,
    totalPages,
  };
}

// =====================================
// FETCH ONE API PAGE
// =====================================
async function fetchPage(endpoint, page, limit) {
  const response = await fetch(`${API_URL}/${endpoint}?limit=${limit}&page=${page}`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`${endpoint} API returned ${response.status}`);
  }

  return response.json();
}

// =====================================
// FETCH ALL PAGINATED ITEMS
// =====================================
async function fetchAll(endpoint) {
  const limit = 100;

  try {
    const firstPayload = await fetchPage(endpoint, 1, limit);
    const firstPage = normalizeListResponse(firstPayload);

    if (firstPage.totalPages <= 1) {
      return firstPage.items;
    }

    const remainingPages = await Promise.all(
      Array.from({ length: firstPage.totalPages - 1 }, (_, index) => index + 2).map(
        async (page) => {
          try {
            const payload = await fetchPage(endpoint, page, limit);
            return normalizeListResponse(payload).items;
          } catch (error) {
            console.error(`Sitemap ${endpoint} page ${page} error:`, error);
            return [];
          }
        }
      )
    );

    return [firstPage.items, ...remainingPages].flat();
  } catch (error) {
    console.error(`Sitemap ${endpoint} fetch error:`, error);
    return [];
  }
}

// =====================================
// DATE HANDLING
// =====================================
function safeDate(item) {
  const rawDate = item?.updatedAt || item?.publishedAt || item?.createdAt;

  if (!rawDate) {
    return new Date();
  }

  const date = new Date(rawDate);
  return Number.isNaN(date.getTime()) ? new Date() : date;
}

// =====================================
// URL HANDLER VALIDATION
// =====================================
function hasValidUrlHandler(item) {
  if (typeof item?.urlHandler !== 'string') {
    return false;
  }

  const value = item.urlHandler.trim();
  return value.length > 0 && value.toLowerCase() !== 'undefined' && value.toLowerCase() !== 'null';
}

// =====================================
// PUBLIC CONTENT FILTER
// =====================================
function isPublicItem(item) {
  if (!item) {
    return false;
  }

  const status = String(item.status || '')
    .trim()
    .toLowerCase();
  const blockedStatuses = ['draft', 'inactive', 'deleted', 'private', 'unpublished'];

  if (blockedStatuses.includes(status)) {
    return false;
  }

  if (item.isPublished === false || item.published === false) {
    return false;
  }

  return true;
}

// =====================================
// STATIC NEXT.JS PAGES
// =====================================
function createStaticPages() {
  return staticRoutes.map((route) => ({
    url: route === '/' ? `${SITE_URL}/` : `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === '/'
        ? 'weekly'
        : route === '/blogs'
          ? 'daily'
          : route === '/services'
            ? 'weekly'
            : 'monthly',
    priority: route === '/' ? 1 : route === '/blogs' || route === '/services' ? 0.9 : 0.7,
  }));
}

// =====================================
// BLOG AND SERVICE URL CREATOR
// =====================================
function createDynamicEntries(items, routePrefix) {
  return items
    .filter((item) => isPublicItem(item) && hasValidUrlHandler(item))
    .map((item) => ({
      url: `${SITE_URL}/${routePrefix}/${encodeURIComponent(item.urlHandler.trim())}`,
      lastModified: safeDate(item),
      changeFrequency: 'monthly',
      priority: 0.8,
    }));
}

// =====================================
// FINAL SITEMAP
// =====================================
export default async function sitemap() {
  const staticPages = createStaticPages();

  const [blogs, services] = await Promise.all([fetchAll('blogs'), fetchAll('services')]);

  const blogPages = createDynamicEntries(blogs, 'blogs');
  const servicePages = createDynamicEntries(services, 'services');

  const allPages = [...staticPages, ...blogPages, ...servicePages];

  // Remove duplicate URLs
  return Array.from(new Map(allPages.map((entry) => [entry.url, entry])).values());
}
