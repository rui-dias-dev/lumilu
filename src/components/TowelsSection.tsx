import React, { FC } from 'react';
import Image from 'next/image';

const TowelsSection: FC = ({}) => {
  return (
    <section className="relative h-[447px] w-full md:h-[523px]">
      <Image
        alt="flowers"
        src={'/images/home/towelsMobile.jpg'}
        fill
        className="h-full w-full object-cover md:hidden"
      />
      <Image
        alt="flowers"
        src={'/images/home/towelsDesktop.jpg'}
        fill
        className="hidden h-full w-full object-cover md:inline-block"
      />
    </section>
  );
};

export default TowelsSection;
