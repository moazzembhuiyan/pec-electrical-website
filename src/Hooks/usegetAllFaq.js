'use client';
import { useEffect, useState } from 'react';

const useGetAllFaq = ({ category, limit, page }) => {
  const [faqs, setFaqs] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/faqs?category=${category}&limit=${limit}&page=${page}`,
          {
            next: { revalidate: 5 },
          }
        );

        if (!res.ok) throw new Error('Failed to fetch faqs');
        const data = await res.json();
        setFaqs(data.data || data);
        setTotalPages(data?.meta?.totalPage || 1);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, [category, limit, page]);
  return { faqs, totalPages, loading, error };
};

export default useGetAllFaq;
