'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AnimateTextOnHover({ children, link, path, activePaths }) {
  const currentPathname = usePathname();

  const isActive =
    (path && currentPathname === path) || (activePaths && activePaths.includes(currentPathname));

  if (link) {
    return (
      <Link href={link} className={cn('block', isActive && 'font-bold')}>
        <Container isActive={isActive}>{children}</Container>
      </Link>
    );
  }

  return <Container isActive={isActive}>{children}</Container>;
}

function Container({ children, isActive }) {
  return (
    <motion.div
      className={cn(
        'relative max-h-max max-w-max overflow-hidden',
        isActive && 'font-bold !text-[#4169E1]'
      )}
      initial="initial"
      whileHover="hovered"
      style={{ lineHeight: 1.2 }}
    >
      <motion.div>
        {children.split('').map((l, idx) => (
          <motion.span
            variants={{
              initial: { y: 0 },
              hovered: { y: '-100%' },
            }}
            transition={{
              duration: 0.5,
              ease: [0.85, 0, 0.15, 1],
              delay: 0.025 * idx,
            }}
            key={idx}
            className="inline-block"
          >
            {l === ' ' ? <span>&nbsp;</span> : l}
          </motion.span>
        ))}
      </motion.div>

      <motion.div className="absolute inset-0">
        {children.split('').map((l, idx) => (
          <motion.span
            variants={{
              initial: { y: '100%' },
              hovered: { y: 0 },
            }}
            transition={{
              duration: 0.5,
              ease: [0.95, 0, 0.15, 1],
              delay: 0.025 * idx,
            }}
            key={idx}
            className="inline-block"
          >
            {l === ' ' ? <span>&nbsp;</span> : l}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}
