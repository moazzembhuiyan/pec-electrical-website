import React from 'react';
import BookService from './Component/BookService';
import ResponsiveContainer from '@/component/ResponsiveContainer/ResponsiveContainer';

export async function generateMetadata() {
  return {
    title: 'Book Service',
    description: 'This is the book service page of Pec Electrical Website',

    alternates: {
      canonical: 'https://pecelectricalct.com/book-service',
    },
  };
}

async function page({ searchParams }) {
  const { service, serviceName } = await searchParams;

  return (
    <div>
      <ResponsiveContainer className=" md:!mt-[115px] !mt-20 flex !flex-col !justify-center !items-center !w-full ">
        <BookService
          defaultServiceId={typeof service === 'string' ? service : ''}
          defaultServiceName={typeof serviceName === 'string' ? serviceName : ''}
        />
      </ResponsiveContainer>
    </div>
  );
}

export default page;
