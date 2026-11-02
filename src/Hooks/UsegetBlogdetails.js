export async function fetchBlogDetails(urlHandler) {
  console.log('🚀 ~ fetchBlogDetails ~ urlHandler:', urlHandler);
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/url/${urlHandler}`;

  console.log('Fetching blog details:', url);

  try {
    const response = await fetch(url, {
      next: { revalidate: 5 },
    });

    // Log actual response details
    console.log('Response status:', response.status);
    console.log('Response status text:', response.statusText);

    if (!response.ok) {
      const errorBody = await response.text();

      console.error('API Error:', {
        url,
        status: response.status,
        statusText: response.statusText,
        body: errorBody,
      });

      throw new Error(`API Error ${response.status}: ${errorBody || response.statusText}`);
    }

    const data = await response.json();

    console.log('Service details response:', data);

    return data;
  } catch (err) {
    console.error('Actual fetch error:', err);

    // More detailed error information
    console.error('Error message:', err?.message);
    console.error('Error stack:', err?.stack);

    throw err;
  }
}
