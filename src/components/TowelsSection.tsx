import React, { FC } from 'react';
import Image from 'next/image';

const TowelsSection: FC = ({}) => {
  return (
    <section className="relative h-[447px] w-full md:h-[523px]">
      <Image
        alt="flowers"
        src={'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751309896/HOME_for-web_me6zjw.webp'}
        fill
        className="h-full w-full object-cover md:hidden"
      />
      <Image
        alt="flowers"
        src={'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751309891/HOME_iwbh5q.webp'}
        fill
        className="hidden h-full w-full object-cover object-right md:inline-block"
      />
    </section>
  );
};

export default TowelsSection;
