import React, { FC } from 'react';
import Image from 'next/image';

const TowelsSection: FC = ({}) => {
  return (
    <section className="relative h-[447px] w-full md:h-[523px]">
      <Image
        alt="flowers"
        src={'https://res.cloudinary.com/dka4rwtwy/image/upload/v1750854579/HOME_for-web_qnk3py.jpg'}
        fill
        className="h-full w-full object-cover md:hidden"
      />
      <Image
        alt="flowers"
        src={'https://res.cloudinary.com/dka4rwtwy/image/upload/v1750849330/HOME_opgtkr.png'}
        fill
        className="hidden h-full w-full object-cover object-right md:inline-block"
      />
    </section>
  );
};

export default TowelsSection;
