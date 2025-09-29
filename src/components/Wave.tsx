import { cn } from '@/lib/utils';
import React, { FC } from 'react';

interface WaveProps {
  classname?: string;
}

const Wave: FC<WaveProps> = ({ classname, ...props }) => {
  return (
    <div
      className={cn('wave-desktop absolute top-0 block h-[125px] w-full -translate-y-1/2', classname)}
      {...props}
    ></div>
  );
};

export default Wave;
