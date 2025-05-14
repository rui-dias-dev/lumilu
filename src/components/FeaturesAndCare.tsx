import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { FC } from 'react';

type FeaturesAndCareProps = React.ComponentProps<'section'> & {};

const FeaturesAndCare: FC<FeaturesAndCareProps> = ({ className, ...props }) => {
  return (
    <section className={cn('', className)} {...props}>
      <h2 className="uppercase">Features & care</h2>
      <br />
      <p className="px-14">
        <span className="font-semibold italic">Antibacterial non-slip top layer</span> | The top layer is designed for
        enhanced hygiene and grip. Integrated antibacterial technology helps prevent odor and bacteria buildup,
        maintaining freshness over time. Its non-slip texture ensures a secure grip, even during high-intensity or hot
        yoga sessions. Adding longer lifespan for each mat.
      </p>
      <br />
      <p className="px-14">
        <span className="font-semibold italic">Soft suede microfiber middle layer</span> | The microfiber layer provides
        additional softness and moisture absorption, working in combination with the top layer to enhance comfort and
        stability. This layer helps wick away sweat, improving traction as you move, making it suitable for various
        practices, including yoga, Pilates, and meditation.
      </p>
      <br />
      <p className="px-14">
        <span className="font-semibold italic">Natural rubber base</span> | Crafted from natural tree rubber and premium
        vegan microfiber, the base offers durability and eco-friendly support. While nearly odorless, a slight natural
        scent may be present upon unboxing.This is normal for rubber-based mats. Simply leave the mat open for a few
        days, and the scent will naturally fade.
      </p>
      <Image
        src={'/images/product/layers-mobile.png'}
        width={412}
        height={315}
        alt="layers"
        quality={100}
        className="my-8 ml-auto w-full object-cover md:hidden"
      />
      <Image
        src={'/images/product/layers.png'}
        width={412}
        height={495}
        alt="layers"
        className="ml-auto hidden h-[400px] object-cover md:inline-block"
      />
      <p className="px-14">
        <span className="font-semibold italic">Printing</span> | Heat/thermal transfer printing method uses water-based,
        eco-friendly ink, ensuring a safe and sustainable choice for both you and the planet. Long-lasting design that
        won’t wear out from practice. To preserve the mat’s appearance, roll the mat with the design facing out.
      </p>
      <br />
      <p className="px-14">
        <span className="font-semibold italic">Non-toxic manufacturing</span> | 100% free from latex, PVC, silicone,
        toxic glue, and phthalates.
      </p>
    </section>
  );
};

export default FeaturesAndCare;
