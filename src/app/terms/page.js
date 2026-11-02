import ResponsiveContainer from '@/component/ResponsiveContainer/ResponsiveContainer';
import React from 'react';
import TermsContainer from './Component/TermsContainer';

export const metadata = {
  title: 'Terms and Conditions',
  description: 'This is the terms and conditions page of Pec Electrical Website',
};

async function page() {
  return (
    <ResponsiveContainer className={' md:!mt-[125px] !mt-20'}>
      <TermsContainer />
    </ResponsiveContainer>
  );
}

export default page;
