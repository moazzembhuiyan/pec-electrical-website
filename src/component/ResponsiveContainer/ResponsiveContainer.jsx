import { cn } from '@/lib/utils';
import React from 'react';

const ResponsiveContainer = ({ children, className, id, style }) => {
  return (
    <div className="flex justify-center  ">
      <section
        className={cn(
          '!mx-auto flex w-full max-w-[1920px] !px-5 md:!px-10 lg:!w-[90%] lg:px-0 ',
          className
        )}
        id={id}
        style={style}
      >
        {children}
      </section>
    </div>
  );
};

export default ResponsiveContainer;
