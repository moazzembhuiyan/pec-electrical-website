'use client';

import UseGetTermsandPrivecy from '@/Hooks/UseGetTermsandPrivecy';
import React, { useEffect, useState } from 'react';

export default function PrivacyContainer() {
  const [privecyData, setPrivecyData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrivacyPolicy = async () => {
      try {
        const response = await UseGetTermsandPrivecy();
        setPrivecyData(response);
      } catch (error) {
        console.error('Privacy policy fetch error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrivacyPolicy();
  }, []);

  if (loading) {
    return <div className="py-10 text-center">Loading...</div>;
  }

  return (
    <div>
      <div className="!w-full mx-auto px-4 py-8 md:py-16">
        <h1 className="text-3xl font-bold mb-6 text-center !my-5">Privacy Policy</h1>

        <hr className="!my-5" />

        <div className="text-center w-full mx-auto !space-y-5">
          <div
            dangerouslySetInnerHTML={{
              __html: privecyData?.data?.value || '<p>No privacy policy available.</p>',
            }}
          />
        </div>
      </div>
    </div>
  );
}
