import React, { FC } from 'react';
import SubscribeForm from './SubscribeForm';
import Image from 'next/image';

const SubscribeSection: FC = ({}) => {
  return (
    <div className="relative h-[432px] w-full md:h-[693px]">
      <div className="absolute inset-0 z-0">
        <Image
          alt="flowers"
          fill
          src={'/images/home/subscriptionBackgroundMobile.jpg'}
          className="h-full w-full object-cover md:hidden"
        />
        <Image
          alt="flowers"
          width={1440}
          height={693}
          src={'/images/home/subscriptionBackgroundDesktop.png'}
          className="hidden h-full w-full object-cover md:inline-block"
        />
      </div>
      <div className="relative z-10 mt-24 flex w-full justify-center px-14 md:justify-end">
        <SubscribeForm />
      </div>
    </div>
  );
};

export default SubscribeSection;
