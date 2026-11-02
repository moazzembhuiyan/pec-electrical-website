export async function getPageSEO() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/contents/page-meta`, {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch SEO data');
  }

  return response.json();
}
