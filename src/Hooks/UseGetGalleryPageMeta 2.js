import React, { useEffect, useState } from 'react';

const UseGetGalleryPageMeta = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchHomeMeta = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/contents/gallery`, {
          next: { revalidate: 5 },
        });

        if (!res.ok) throw new Error('Failed to fetch services');
        const data = await res.json();
        setData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHomeMeta();
  }, []);
  return { loading, error, data };
};

export default UseGetGalleryPageMeta;
