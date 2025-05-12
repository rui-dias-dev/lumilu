import { cn } from '@/lib/utils';
import React, { FC } from 'react';

type SustainableProps = React.ComponentProps<'section'> & {};

const Sustainable: FC<SustainableProps> = ({ className, ...props }) => {
  return (
    <section className={cn('py-8 text-center text-white', className)} {...props}>
      <h2 className="uppercase">Sustainable</h2>
      <br />
      <p>
        At Lumilu, sustainability isn’t just a buzzword—it’s at the heart of everything we do. From eco-friendly
        materials to responsible production, we are committed to protecting both your practice and the planet. All mats
        are produced in smaller batches. We carefully choose materials that are kind to the Earth while providing the
        highest quality for your yoga practice. Made with responsible manufacturing – Partnering with ethical suppliers
        that prioritize fair wages and sustainable practices. 
      </p>
      <br />
      <p className="font-semibold italic">
        Eco-conscious packaging & Includes a 100% cotton carrying strap. Please recycle the packaging responsibly.
      </p>
    </section>
  );
};

export default Sustainable;
