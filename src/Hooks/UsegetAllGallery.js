'use client';

import { useEffect, useState } from 'react';

const UsegetAllGallery = ({ limit, page }) => {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchGallery = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/service-photos?limit=${limit}&page=${page}`,
          {
            // cache: 'force-cache',
            next: { revalidate: 5 },
          }
        );

        if (!res.ok) throw new Error('Failed to fetch services');
        const data = await res.json();
        setGallery(data);
        setTotalPages(data?.meta?.totalPage);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, [limit, page]);

  return { gallery, loading, error, totalPages };
};

export default UsegetAllGallery;
