import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

// npm i framer-motion
// Every Tailwind class uses the important modifier (leading "!") so it wins over any other CSS.

const reviews = [
  {
    name: 'Larinzo Clayton',
    rating: 5,
    time: '11 months ago',
    text: 'Ricky was absolutely awesome—professional, competent, and courteous. His work is flawless and he kept his work area immaculate. I highly recommend PEC.',
  },
  {
    name: 'Sandra Mcfarlane',
    rating: 5,
    time: 'a month ago',
    text: 'I had a wonderful experience with Ricky (PEC). The work is very professionally done. They are very professional, courteous and timely. I have been using this company for awhile now and have been satisfied each time. I highly recommend them.',
  },
  {
    name: 'Tricia D',
    rating: 5,
    time: '11 months ago',
    text: 'We finished our basement and Ricky at PEC did an amazing job wiring the entire space to code, including living room, bathroom and laundry room. Ricky was professional, meticulous and personable. I highly recommend Ricky.',
  },
  {
    name: 'Josef-Stefan Wenzler',
    rating: 5,
    time: '9 months ago',
    text: "Ricky upgraded our home's electrical system from 100A to 200A and handled the full wiring for two bathrooms, the kitchen, and our attic. Everything was done to code and passed inspection without issue.",
  },
];

const AUTOPLAY_MS = 6000;
const SWIPE_THRESHOLD = 80;

const STAR_PATH =
  'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z';

const Stars = ({ count, size = '!w-5 !h-5', animate = false }) => (
  <div className="!flex !gap-1">
    {[...Array(count)].map((_, i) => (
      <motion.svg
        key={i}
        className={`${size} !text-amber-400`}
        fill="currentColor"
        viewBox="0 0 20 20"
        initial={animate ? { scale: 0, rotate: -90, opacity: 0 } : false}
        animate={animate ? { scale: 1, rotate: 0, opacity: 1 } : undefined}
        transition={{ delay: 0.25 + i * 0.07, type: 'spring', stiffness: 400, damping: 14 }}
      >
        <path d={STAR_PATH} />
      </motion.svg>
    ))}
  </div>
);

const variants = {
  enter: (dir) => ({
    x: dir > 0 ? 120 : -120,
    opacity: 0,
    scale: 0.94,
    rotateY: dir > 0 ? 12 : -12,
  }),
  center: { x: 0, opacity: 1, scale: 1, rotateY: 0 },
  exit: (dir) => ({
    x: dir > 0 ? -120 : 120,
    opacity: 0,
    scale: 0.94,
    rotateY: dir > 0 ? -12 : 12,
  }),
};

export default function GoogleReviewSection() {
  const [[index, direction], setPage] = useState([0, 0]);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  const paginate = useCallback((dir) => {
    setPage(([i]) => [(i + dir + reviews.length) % reviews.length, dir]);
  }, []);

  const goTo = (i) => setPage(([cur]) => [i, i > cur ? 1 : -1]);

  // Autoplay (restarts whenever the slide changes, pauses on hover/focus)
  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = setTimeout(() => paginate(1), AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [index, paused, reduceMotion, paginate]);

  const review = reviews[index];

  return (
    <section className="!relative !overflow-hidden !bg-gradient-to-b !from-slate-50 !via-white !to-blue-50/40 !py-24 !px-4">
      {/* Decorative floating blobs */}
      <motion.div
        aria-hidden
        className="!absolute !-top-24 !-left-24 !w-96 !h-96 !rounded-full !bg-blue-200/40 !blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="!absolute !-bottom-32 !-right-24 !w-96 !h-96 !rounded-full !bg-amber-200/30 !blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="!relative !max-w-4xl !mx-auto">
        {/* Header */}
        <motion.div
          className="!text-center !mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <div className="!inline-flex !items-center !gap-2 !bg-white !border !border-slate-200 !rounded-full !px-4 !py-2 !mb-5 !shadow-sm">
            <svg className="!w-5 !h-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <span className="!text-sm !font-semibold !text-blue-900 !tracking-wide">
              Google Reviews
            </span>
          </div>

          <h2 className="!text-3xl md:!text-5xl !font-bold !text-blue-950 !mb-3 !tracking-tight">
            What Our Customers Say
          </h2>
          <p className="!text-slate-600 !text-lg !max-w-xl !mx-auto !mb-6">
            Real feedback from homeowners who trusted PEC Electrical
          </p>

          <div className="!flex !items-center !justify-center !gap-3">
            <Stars count={5} />
            <span className="!text-blue-900 !font-semibold !text-sm">
              5.0 · Based on recent reviews
            </span>
          </div>
        </motion.div>

        {/* Carousel */}
        <div
          className="!relative !flex !items-center !gap-3 md:!gap-6"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          role="region"
          aria-roledescription="carousel"
          aria-label="Customer reviews"
        >
          {/* Prev */}
          <motion.button
            type="button"
            onClick={() => paginate(-1)}
            aria-label="Previous review"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="!hidden sm:!flex !shrink-0 !w-12 !h-12 !items-center !justify-center !rounded-full !bg-white !border !border-slate-200 !text-blue-900 !shadow-md hover:!bg-blue-900 hover:!text-white !transition-colors !duration-300 !cursor-pointer focus-visible:!outline-2 focus-visible:!outline-blue-900"
          >
            <svg
              className="!w-5 !h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          {/* Slide area */}
          <div className="!relative !flex-1 !min-h-[340px] md:!min-h-[300px] [perspective:1200px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.article
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                onDragEnd={(_, { offset }) => {
                  if (offset.x < -SWIPE_THRESHOLD) paginate(1);
                  else if (offset.x > SWIPE_THRESHOLD) paginate(-1);
                }}
                className="!absolute !inset-0 !flex !flex-col !justify-between !bg-white/90 !backdrop-blur !border !border-slate-100 !rounded-3xl !p-7 md:!p-10 !shadow-xl !shadow-blue-900/10 !cursor-grab active:!cursor-grabbing !overflow-hidden"
              >
                {/* Big decorative quote mark */}
                <svg
                  aria-hidden
                  className="!absolute !top-5 !right-6 !w-20 !h-20 !text-blue-900/5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                </svg>

                <div className="!relative">
                  <Stars count={review.rating} size="!w-6 !h-6" animate />
                  <p className="!mt-5 !text-slate-700 !leading-relaxed !text-base md:!text-xl">
                    “{review.text}”
                  </p>
                </div>

                <div className="!relative !flex !items-center !gap-4 !mt-6">
                  <div className="!w-12 !h-12 !rounded-full !bg-gradient-to-br !from-blue-900 !to-blue-700 !text-white !flex !items-center !justify-center !font-semibold !text-xl !shadow-md">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="!font-semibold !text-blue-950">{review.name}</p>
                    <p className="!text-sm !text-slate-500">{review.time}</p>
                  </div>
                  <span className="!ml-auto !hidden sm:!inline-flex !items-center !gap-1.5 !text-xs !font-medium !text-emerald-700 !bg-emerald-50 !border !border-emerald-100 !rounded-full !px-3 !py-1">
                    <svg className="!w-3.5 !h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Verified review
                  </span>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          {/* Next */}
          <motion.button
            type="button"
            onClick={() => paginate(1)}
            aria-label="Next review"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="!hidden sm:!flex !shrink-0 !w-12 !h-12 !items-center !justify-center !rounded-full !bg-white !border !border-slate-200 !text-blue-900 !shadow-md hover:!bg-blue-900 hover:!text-white !transition-colors !duration-300 !cursor-pointer focus-visible:!outline-2 focus-visible:!outline-blue-900"
          >
            <svg
              className="!w-5 !h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>

        {/* Dots with autoplay progress */}
        <div className="!flex !items-center !justify-center !gap-2.5 !mt-8">
          {reviews.map((r, i) => {
            const active = i === index;
            return (
              <button
                key={r.name}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show review from ${r.name}`}
                aria-current={active}
                className={`!relative !h-2.5 !rounded-full !overflow-hidden !cursor-pointer !border-0 !p-0 !transition-all !duration-500 ${
                  active ? '!w-10 !bg-blue-200' : '!w-2.5 !bg-slate-300 hover:!bg-blue-300'
                }`}
              >
                {active && (
                  <motion.span
                    key={`${index}-${paused}`}
                    className="!absolute !inset-y-0 !left-0 !bg-blue-900 !rounded-full"
                    initial={{ width: reduceMotion || paused ? '100%' : '0%' }}
                    animate={{ width: '100%' }}
                    transition={{
                      duration: reduceMotion || paused ? 0 : AUTOPLAY_MS / 1000,
                      ease: 'linear',
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="!text-center !mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.a
            href="https://g.page/r/CYwLqRbrmWr8EBM/review"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="!group !inline-flex !items-center !gap-3 !bg-blue-900 hover:!bg-blue-800 !text-white !font-semibold !text-base !px-8 !py-4 !rounded-xl !shadow-lg !shadow-blue-900/25 hover:!shadow-xl hover:!shadow-blue-900/30 !transition-colors !duration-300 !no-underline"
          >
            See All Reviews on Google
            <svg
              className="!w-5 !h-5 group-hover:!translate-x-1 !transition-transform !duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </motion.a>
          <p className="!mt-4 !text-sm !text-slate-500">Read more verified customer experiences</p>
        </motion.div>
      </div>
    </section>
  );
}
