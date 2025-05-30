'use client';

import React, { FC, ComponentProps } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import { Fish, Wave } from '@/assets/icons';
import WaveDesktop from '@/assets/icons/WaveDesktop';

const images = [
  { src: '/images/product/you-may-also-like-flor.jpg', alt: 'Related item 1', href: '/shop/flor-algarve' },
  { src: '/images/product/you-may-also-like-flor.jpg', alt: 'Related item 2', href: '/shop/flor-algarve' },
  { src: '/images/product/you-may-also-like-flor.jpg', alt: 'Related item 3', href: '/shop/flor-algarve' },
];

type YouMayLikeProps = ComponentProps<'section'>;

const YouMayLike: FC<YouMayLikeProps> = ({ className, ...props }) => {
  return (
    <section className={cn('bg-green relative w-full pt-12 pb-28 lg:pb-0', className)} {...props}>
      <Wave className="absolute top-0 -translate-y-1/2 md:hidden" />
      <WaveDesktop className="absolute top-0 hidden -translate-y-1/2 md:inline-block" />
      <div className="mb-6 w-full lg:flex lg:items-center lg:justify-between lg:px-48">
        <h2 className="text-center text-lg text-white uppercase lg:mt-20 lg:text-left">You May Also Like</h2>
        <Fish width={110} height={110} className="hidden lg:inline-block" />
      </div>
      <Carousel opts={{ align: 'start', dragFree: true }}>
        <CarouselContent className="gap-2.5">
          {images.map(({ src, alt, href }, idx) => (
            <CarouselItem key={idx} className="flex basis-[66%] items-center sm:basis-1/3">
              <Link href={href} className="m-auto block overflow-hidden">
                <Image src={src} alt={alt} width={296} height={296} className="object-cover" quality={90} />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="pl-48">
        <Fish width={110} height={110} className="hidden -scale-x-100 lg:inline-block" />
      </div>
    </section>
  );
};

export default YouMayLike;
