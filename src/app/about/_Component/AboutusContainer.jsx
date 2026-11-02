'use client';
import React from 'react';
import Ourmission from './Ourmission';
import { OurTeam } from './OurTeam';
import UseGetAboutPageMeta from '@/Hooks/UseGetAboutPageMeta copy';
import Faq from '@/component/shared/Faq/Faq';

const AboutusContainer = () => {
  const { data } = UseGetAboutPageMeta();
  return (
    <div className="!bg-white">
      {/* About PEC Electrical */}
      <Ourmission data={data?.data?.value} />
      {/* Our team */}
      <OurTeam />
      <Faq category="about" />
    </div>
  );
};

export default AboutusContainer;
