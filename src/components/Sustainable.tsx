import { Product } from '@/data/products';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { FC } from 'react';

type SustainableProps = React.ComponentProps<'section'> & {
  product: Product;
};

const Sustainable: FC<SustainableProps> = ({ className, product, ...props }) => {
  return (
    <section
      className={cn(
        'pb-12 text-center lg:grid lg:grid-cols-2 lg:gap-x-[105px] lg:px-48 lg:py-36 lg:text-left',
        className,
      )}
      {...props}
    >
      <Image
        className="w-full object-contain lg:max-h-[244px] lg:w-auto lg:self-center"
        width={412}
        height={192}
        src={product.sustainable.image.src}
        alt={product.sustainable.image.alt}
      />
      <div>
        <h2 className="mt-9 text-lg uppercase">Sustainable</h2>
        <br />
        <p className="px-14 text-sm lg:px-0">
          At Lumilu, sustainability isn’t just a buzzword—it’s at the heart of everything we do. From eco-friendly
          materials to responsible production, we are committed to protecting both your practice and the planet. All
          mats are produced in smaller batches. We carefully choose materials that are kind to the Earth while providing
          the highest quality for your yoga practice. Made with responsible manufacturing – Partnering with ethical
          suppliers that prioritize fair wages and sustainable practices. 
        </p>
        <br />
        <p className="px-14 text-sm font-semibold italic lg:px-0">
          Eco-conscious packaging & Includes a 100% cotton carrying strap. Please recycle the packaging responsibly.
        </p>
      </div>
    </section>
  );
};

export default Sustainable;
