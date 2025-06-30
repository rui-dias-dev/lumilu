import { products } from '@/data/products';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

const ProductsList: FC = () => {
  return (
    <>
      <section className="grid w-full lg:hidden">
        {products.map((product) => (
          <Link key={product.id} href={`/shop/${product.id}`} className="">
            <div className="relative w-full overflow-hidden">
              <Image
                src={product.shopImage.mobile.src}
                alt={product.name}
                width={1010}
                height={2000}
                quality={100}
                className="w-full object-contain"
              />
            </div>
          </Link>
        ))}
      </section>
      <section className="hidden w-full lg:grid">
        {products.map((product) => (
          <Link key={product.id} href={`/shop/${product.id}`} className="" style={{ backgroundColor: product.bgColor }}>
            <div className="relative w-full overflow-hidden">
              <Image
                src={product.shopImage.desktop.src}
                alt={product.name}
                width={1356}
                height={1129}
                quality={100}
                className="w-full object-contain"
              />
            </div>
          </Link>
        ))}
      </section>
    </>
  );
};

export default ProductsList;
