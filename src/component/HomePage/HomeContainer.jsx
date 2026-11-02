'use client';
import React from 'react';
import Hero from '../Hero/Hero';
import AboutSection from './AboutUs/AboutSection';
import Services from './Services/Services';
import Gallery from './Gallery/Gallery';
import BookService from '@/app/book-service/Component/BookService';
import ContactContainer from '@/app/contact/_Component/ContactContainer';
import UseGetHomePageMeta from '@/Hooks/UseGetHomePageMeta';
import Faq from '../shared/Faq/Faq';
import LocalServiceArea from './LocalService/LocalServiceArea';
import ServicesSection from '@/app/services/_Component/ServicesSection';
import GoogleReviewSection from '../GoogleReview/GoogleReviewSection';

const HomeContainer = () => {
  const { loading, error, data } = UseGetHomePageMeta();
  return (
    <div>
      <Hero data={data} />
      <ServicesSection />
      <AboutSection data={data?.data?.value} />
      <GoogleReviewSection />
      {/* <Services data={data?.data?.value} /> */}
      <Gallery data={data?.data?.value} />
      <BookService />
      <LocalServiceArea />
      <Faq category="home" />
    </div>
  );
};

export default HomeContainer;
