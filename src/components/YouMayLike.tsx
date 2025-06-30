'use client';

import React, { FC, ComponentProps } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import { Fish } from '@/assets/icons';
import { useParams } from 'next/navigation';
import Wave from './Wave';

const images = [
  {
    id: 'lua-algarve',
    src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751311320/3_uswxt4.webp',
    alt: '',
    href: '/shop/lua-algarve',
  },
  {
    id: 'flor-algarve',
    src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751311310/5_yb1db8.webp',
    alt: '',
    href: '/shop/flor-algarve',
  },
  {
    id: 'praia-algarve',
    src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751311323/2_jzqo91.webp',
    alt: '',
    href: '/shop/praia-algarve',
  },
  {
    id: 'sol-algarve',
    src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751311330/7_pcsnk6.webp',
    alt: '',
    href: '/shop/sol-algarve',
  },

  {
    id: 'lua-algarve',
    src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751311316/4_f5bywc.webp',
    alt: '',
    href: '/shop/lua-algarve',
  },
  {
    id: 'flor-algarve',
    src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751311333/6_fmfgam.webp',
    alt: '',
    href: '/shop/flor-algarve',
  },
  {
    id: 'praia-algarve',
    src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751311327/1_x2wchg.webp',
    alt: '',
    href: '/shop/praia-algarve',
  },
  {
    id: 'sol-algarve',
    src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751311313/8_ymxakk.webp',
    alt: '',
    href: '/shop/sol-algarve',
  },
];

type YouMayLikeProps = ComponentProps<'section'>;

const YouMayLike: FC<YouMayLikeProps> = ({ className, ...props }) => {
  const { slug } = useParams();

  const filteredImages = React.useMemo(() => images.filter((image) => image.id !== slug), [slug]);

  return (
    <section className={cn('bg-green relative w-full pt-12 pb-28 lg:pb-0', className)} {...props}>
      <Wave />
      <div className="mb-6 w-full lg:flex lg:items-center lg:justify-between lg:px-48">
        <h2 className="text-center text-lg text-white uppercase lg:mt-20 lg:text-left">You May Also Like</h2>
        <Fish width={110} height={110} className="hidden lg:inline-block" />
      </div>
      <Carousel opts={{ align: 'start', dragFree: true }}>
        <CarouselContent className="gap-2.5">
          {filteredImages.map(({ src, alt, href }, idx) => (
            <CarouselItem key={idx} className="flex basis-[66%] items-center sm:basis-1/4">
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
