'use client';

import useGetAllFaq from '@/Hooks/usegetAllFaq';
import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div
      className={`!overflow-hidden !rounded-2xl !border !transition ${
        isOpen
          ? '!border-primary/30 !bg-primary/5 !shadow-sm'
          : '!border-gray-100 !bg-white hover:!border-gray-200'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex !w-full !items-center !justify-between !gap-4 !px-5 !py-4 !text-left sm:!px-6 sm:!py-5"
      >
        <span className="!text-base !font-semibold !leading-snug !text-gray-900 sm:!text-lg">
          {faq.question}
        </span>
        <span
          className={`flex !h-9 !w-9 !flex-shrink-0 !items-center !justify-center !rounded-full !transition ${
            isOpen ? '!bg-primary !text-white' : '!bg-gray-100 !text-gray-600'
          }`}
        >
          <ChevronDown
            size={18}
            className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="!overflow-hidden">
          <div className="!border-t !border-gray-100/80 !px-5 !pb-5 !pt-3 sm:!px-6 sm:!pb-6">
            <p className="!m-0 !text-sm !leading-relaxed !text-gray-600 sm:!text-base">
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Faq({ category }) {
  const [page, setPage] = useState(1);
  const [openId, setOpenId] = useState(null);
  const limit = 10;

  const { faqs, totalPages, loading, error } = useGetAllFaq({
    category,
    limit,
    page,
  });

  const list = Array.isArray(faqs) ? faqs : (faqs?.data ?? []);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  if (loading) {
    return (
      <section className="!py-12 md:!py-16">
        <div className="!mx-auto !mb-10 !max-w-2xl !text-center">
          <p className="!m-0 !text-sm !font-semibold !uppercase !tracking-wide !text-primary">
            FAQ
          </p>
          <h2 className="!mt-3 !mb-0 !text-3xl !font-semibold md:!text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="!mx-auto !flex !max-w-3xl !flex-col !gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="!h-16 !animate-pulse !rounded-2xl !bg-gray-100" />
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="!py-16 !text-center !text-red-600">
        Failed to load FAQs. Please try again.
      </section>
    );
  }

  return (
    <section className="!py-12 md:!py-16 lg:!py-20">
      {/* Header */}
      <div className="!mx-auto !mb-10 !max-w-2xl !px-4 !text-center md:!mb-12">
        <p className="!m-0 !text-sm !font-semibold !uppercase !tracking-wide !text-primary">FAQ</p>
        <h2 className="!mt-3 !mb-0 !text-3xl !font-semibold md:!text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="!mx-auto !mt-4 !mb-0 !max-w-md !text-sm !text-gray-500 md:!text-base">
          Quick answers to common questions
        </p>
      </div>

      {/* List */}
      <div className="!mx-auto !flex !max-w-3xl !flex-col !gap-3 !px-4 sm:!gap-4">
        {list.length === 0 ? (
          <p className="!py-12 !text-center !text-gray-500">No FAQs found.</p>
        ) : (
          list.map((faq) => (
            <FaqItem
              key={faq._id}
              faq={faq}
              isOpen={openId === faq._id}
              onToggle={() => handleToggle(faq._id)}
            />
          ))
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="!mt-10 flex !items-center !justify-center !gap-3">
          <button
            type="button"
            disabled={page <= 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="!rounded-full !border !border-gray-200 !px-5 !py-2.5 !text-sm disabled:!opacity-40"
          >
            Previous
          </button>
          <span className="!px-3 !text-sm !text-gray-600">
            {page} / {totalPages}
          </span>
          <button
            type="button"
            disabled={page >= totalPages}
            onClick={() => setPage((p) => p + 1)}
            className="!rounded-full !border !border-gray-200 !px-5 !py-2.5 !text-sm disabled:!opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}
