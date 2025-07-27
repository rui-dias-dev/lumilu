import ProductsList from '@/components/ProductsList';
import Image from 'next/image';
import React, { FC } from 'react';

const ShopPage: FC = ({}) => {
  return (
    <div className="shop">
      <ProductsList />
      <div className="relative h-[470px] md:h-[523px]">
        <Image
          src={'https://res.cloudinary.com/dka4rwtwy/image/upload/v1753618010/SHOP_page-05_ybwnni.webp'}
          fill
          alt="Algarve collection"
          className="object-cover object-top md:hidden"
        />
        <Image
          src={'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751309891/HOME_iwbh5q.webp'}
          fill
          alt="Algarve collection"
          className="hidden object-cover object-right md:inline-block"
        />
      </div>
    </div>
  );
};

export default ShopPage;
