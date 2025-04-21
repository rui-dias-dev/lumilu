import ProductsList from '@/components/ProductsList';
import Image from 'next/image';
import React, { FC } from 'react';

const ShopPage: FC = ({}) => {
  return (
    <div className="mt-14">
      <ProductsList />
      <div className="relative mt-12 h-[470px] md:h-[523px]">
        <Image
          src={'/images/shop/footer-mobile.jpg'}
          fill
          alt="Algarve collection"
          className="object-cover object-top md:hidden"
        />
        <Image
          src={'/images/shop/footer-desktop.jpg'}
          fill
          alt="Algarve collection"
          className="hidden object-cover object-right md:inline-block"
        />
      </div>
    </div>
  );
};

export default ShopPage;
