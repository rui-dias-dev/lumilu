import { products } from '@/data/products';
import { formatPrice } from '@/lib/formatters';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React, { FC } from 'react';
import { Fish } from '@/assets/icons';
import { Button } from '@/components/ui/button';
import FeaturesAndCare from '@/components/FeaturesAndCare';
import CareInstructions from '@/components/CareInstructions';
import Sustainable from '@/components/Sustainable';
import YouMayLike from '@/components/YouMayLike';
import ProductCarousel from '@/components/ProductCarousel';

interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage: FC<ProductPageProps> = ({ params: { id } }) => {
  const product = products.find((product) => product.id === id);
  if (!product) {
    notFound();
  }

  const price = formatPrice({ amount: product.price.amount, currency: product.price.currency });
  return (
    <div className={`text-white`}>
      <section className="rounded-b-[150px] pt-10 pb-10 text-center" style={{ backgroundColor: product.bgColor }}>
        <h1 className="mb-7 px-14 text-xl">
          <strong>{product.name}</strong> | {product.collection}
        </h1>
        <ProductCarousel />
        <p>{product.description}</p>

        <div className="mt-6 px-14">
          <p>
            {product.dimensions.lengthCm} X {product.dimensions.widthCm} CM | {product.dimensions.thicknessMm}MM |{' '}
            {product.dimensions.weightKg}KG
          </p>
          <p className="font-bold">{price}</p>
          <Fish width={80} height={71} />
          <Button className="rounded-full bg-[#F6E6D9] px-16 py-6 text-black uppercase">Add to cart</Button>
        </div>
      </section>

      <FeaturesAndCare className="mt-8 text-center text-black" />
      <CareInstructions className="mt-10 px-14" />
      <Sustainable className="mt-8 px-14" style={{ backgroundColor: product.bgColor }} />
      <YouMayLike />
    </div>
  );
};

export default ProductPage;
