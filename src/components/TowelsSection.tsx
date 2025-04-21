import React, { FC } from 'react';
import towelsMobile from '@/assets/images/home/towelsMobile.jpg';
import towelsDesktop from '@/assets/images/home/towelsDesktop.jpg';
import Image from 'next/image';

const TowelsSection: FC = ({}) => {
  return (
    <section className="relative h-[447px] w-full md:h-[523px]">
      <Image alt="flowers" src={towelsMobile} height={447} className="h-full w-full object-cover md:hidden" />
      <Image
        alt="flowers"
        src={towelsDesktop}
        height={523}
        className="hidden h-full w-full object-cover md:inline-block"
      />
    </section>
  );
};

export default TowelsSection;
