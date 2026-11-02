'use client';
import { useEffect, useState } from 'react';

const useGetAllBlog = ({ limit, page }) => {
  const [blogs, setBlogs] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/blogs?limit=${limit}&page=${page}`,
          {
            next: { revalidate: 5 },
          }
        );

        if (!res.ok) throw new Error('Failed to fetch blogs');
        const data = await res.json();
        setBlogs(data.data || data);
        setTotalPages(data?.meta?.totalPage || 1);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [limit, page]);
  return { blogs, totalPages, loading, error };
};

export default useGetAllBlog;
