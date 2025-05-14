import { Product } from '@/data/products';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { FC } from 'react';

type SustainableProps = React.ComponentProps<'section'> & {
  product: Product;
};

const Sustainable: FC<SustainableProps> = ({ className, product, ...props }) => {
  return (
    <section className={cn('pb-12 text-center', className)} {...props}>
      <Image
        className="w-full"
        width={412}
        height={192}
        src={product.sustainable.image.src}
        alt={product.sustainable.image.alt}
      />
      <h2 className="mt-9 uppercase">Sustainable</h2>
      <br />
      <p className="px-14">
        At Lumilu, sustainability isn’t just a buzzword—it’s at the heart of everything we do. From eco-friendly
        materials to responsible production, we are committed to protecting both your practice and the planet. All mats
        are produced in smaller batches. We carefully choose materials that are kind to the Earth while providing the
        highest quality for your yoga practice. Made with responsible manufacturing – Partnering with ethical suppliers
        that prioritize fair wages and sustainable practices. 
      </p>
      <br />
      <p className="px-14 font-semibold italic">
        Eco-conscious packaging & Includes a 100% cotton carrying strap. Please recycle the packaging responsibly.
      </p>
    </section>
  );
};

export default Sustainable;
