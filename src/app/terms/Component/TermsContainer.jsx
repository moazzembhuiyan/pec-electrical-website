'use client';
import UseGetTermsCondition from '@/Hooks/UseGetTermsCondition';
import React, { useEffect, useState } from 'react';

export default function TermsContainer() {
  const [termsData, setTermsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTermsCondition = async () => {
      try {
        const response = await UseGetTermsCondition();
        setTermsData(response);
      } catch (error) {
        console.error('Terms and conditions fetch error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTermsCondition();
  }, []);

  if (loading) {
    return <div className="py-10 text-center">Loading...</div>;
  }

  return (
    <div>
      <div className="!w-full mx-auto px-4 py-8 md:py-16">
        <h1 className="text-3xl font-bold mb-6 text-center !my-5">Terms and Conditions</h1>

        <hr className="!my-5" />

        <div className="text-center w-full mx-auto !space-y-5">
          <div
            dangerouslySetInnerHTML={{
              __html: termsData?.data?.value || '<p>No terms and conditions available.</p>',
            }}
          />
        </div>
      </div>
    </div>
  );
}
