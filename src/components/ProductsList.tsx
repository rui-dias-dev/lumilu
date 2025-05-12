// src/components/ProductsList.tsx
import { products } from '@/data/products';
import { formatPrice } from '@/lib/formatters';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

const ProductsList: FC = () => {
  return (
    <section className="grid w-full gap-9 px-20 md:grid-cols-2 md:gap-4 md:px-48 lg:grid-cols-4">
      {products.map((product) => (
        <Link key={product.id} href={`/shop/${product.id}`} className="space-y-9">
          <div className="relative aspect-[256/435] w-full overflow-hidden">
            <Image
              src={`/images/shop/${product.name.toLowerCase()}.jpg`}
              alt={product.name}
              width={256}
              height={435}
              className="w-full object-contain"
            />
          </div>
          <div className="text-center">
            <span>{product.name}</span>
            <span> | </span>
            <span className="text-sm font-bold">
              {formatPrice({ amount: product.price.amount, currency: product.price.currency })}
            </span>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default ProductsList;
