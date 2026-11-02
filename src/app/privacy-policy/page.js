import ResponsiveContainer from '@/component/ResponsiveContainer/ResponsiveContainer';
import React from 'react';
import PrivacyContainer from './Component/PrivacyContainer';

export const metadata = {
  title: 'Privecy Policy',
  description: 'This is the privecy policy page of Pec Electrical Website',
};

async function page() {
  return (
    <ResponsiveContainer className={' md:!mt-[125px] !mt-20'}>
      <PrivacyContainer />
    </ResponsiveContainer>
  );
}

export default page;
