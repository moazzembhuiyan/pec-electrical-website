const SITE_URL = 'https://pecelectricalct.com';

export function generateCanonical(pathname = '/') {
  const cleanPath = pathname.split('?')[0].replace(/\/+$/, '');

  return `${SITE_URL}${cleanPath || '/'}`;
}
