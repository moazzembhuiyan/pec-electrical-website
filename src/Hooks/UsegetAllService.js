'use client';
import { useEffect, useState } from 'react';

const useGetAllService = ({ limit, page }) => {
  const [services, setServices] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/services?limit=${limit}&page=${page}`,
          {
            next: { revalidate: 5 },
          }
        );

        if (!res.ok) throw new Error('Failed to fetch services');
        const data = await res.json();
        setServices(data.data || data);
        setTotalPages(data?.meta?.totalPage || 1);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [limit, page]);
  return { services, totalPages, loading, error };
};

export default useGetAllService;
