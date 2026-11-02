'use client';
import React from 'react';
import BookServiceForm from './BookServiceForm';

function BookService({ defaultServiceId, defaultServiceName }) {
  return (
    <section className="!py-16 !bg-white w-full" id="book-service">
      <div className="!max-w-4xl !mx-auto !px-4 sm:!px-6">
        {/* Header */}
        <div className="!text-center !mb-10">
          <p className="!text-[#4169E1] !font-semibold !tracking-wider !uppercase !text-sm !mb-3">
            Book Now
          </p>
          <h2 className="!text-3xl md:!text-4xl !font-bold !text-gray-900 !mb-3">
            Book Your Service
          </h2>
          <p className="!text-gray-600 !max-w-xl !mx-auto">
            Book your electrical service today and experience the PEC ELECTRICAL difference
          </p>
        </div>

        {/* Form Card */}
        <div className="!bg-white !border !flex ! !border-gray-100 !rounded-2xl !shadow-lg !p-6 md:!p-10">
          <BookServiceForm
            defaultServiceId={defaultServiceId}
            defaultServiceName={defaultServiceName}
          />
        </div>
      </div>
    </section>
  );
}

export default BookService;
