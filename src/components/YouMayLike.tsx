'use client';

import React, { FC, ComponentProps } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import { Wave } from '@/assets/icons';

const images = [
  { src: '/images/product/you-may-also-like-flor.jpg', alt: 'Related item 1', href: '/shop/flor-algarve' },
  { src: '/images/product/you-may-also-like-flor.jpg', alt: 'Related item 2', href: '/shop/flor-algarve' },
  { src: '/images/product/you-may-also-like-flor.jpg', alt: 'Related item 3', href: '/shop/flor-algarve' },
];

type YouMayLikeProps = ComponentProps<'section'>;

const YouMayLike: FC<YouMayLikeProps> = ({ className, ...props }) => {
  return (
    <section className={cn('bg-green relative w-full pt-12 pb-28', className)} {...props}>
      <Wave className="absolute top-0 -translate-y-1/2" />
      <h2 className="mb-6 text-center text-2xl text-white">You May Also Like</h2>
      <Carousel opts={{ align: 'start', dragFree: true }}>
        <CarouselContent className="gap-2.5">
          {images.map(({ src, alt, href }, idx) => (
            <CarouselItem key={idx} className="basis-[66%] sm:basis-1/3">
              <Link href={href} className="block overflow-hidden">
                <Image src={src} alt={alt} width={296} height={296} className="object-cover" quality={90} />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default YouMayLike;
