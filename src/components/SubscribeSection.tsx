import React, { FC } from 'react';
import SubscribeForm from './SubscribeForm';
import backgroundMobile from '@/assets/images/home/subscriptionBackgroundMobile.jpg';
import backgroundDesktop from '@/assets/images/home/subscriptionBackgroundDesktop.png';
import Image from 'next/image';

const SubscribeSection: FC = ({}) => {
  return (
    <div className="relative h-[432px] w-full md:h-[693px]">
      <div className="absolute inset-0 z-0">
        <Image alt="flowers" src={backgroundMobile} className="h-full w-full object-cover md:hidden" />
        <Image alt="flowers" src={backgroundDesktop} className="hidden h-full w-full object-cover md:inline-block" />
      </div>
      <div className="relative z-10 mt-24 flex w-full justify-center px-14 md:justify-end">
        <SubscribeForm />
      </div>
    </div>
  );
};

export default SubscribeSection;
