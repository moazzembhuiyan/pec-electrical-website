export async function fetchServiceImages(id) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/service-photos/service/${id}`,
      {
        next: { revalidate: 5 },
      }
    );
    if (!response.ok) {
      throw new Error('Failed to fetch service details');
    }
    return await response.json();
  } catch (err) {
    console.error('Error fetching service details:', err);
    throw new Error('Failed to fetch service details');
  }
}
