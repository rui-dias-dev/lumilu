import ProductsList from '@/components/ProductsList';
import Image from 'next/image';
import React, { FC } from 'react';

const ShopPage: FC = ({}) => {
  return (
    <div className="shop">
      <ProductsList />
      <div className="relative h-[470px] md:h-[523px]">
        <Image
          src={'/images/shop/algarve-collection-mobile.jpg'}
          fill
          alt="Algarve collection"
          className="object-cover object-top md:hidden"
        />
        <Image
          src={'/images/shop/algarve-collection.jpg'}
          fill
          alt="Algarve collection"
          className="hidden object-cover object-right md:inline-block"
        />
      </div>
    </div>
  );
};

export default ShopPage;
