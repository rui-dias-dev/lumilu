'use client';

import React, { useState, useEffect, useCallback, ComponentProps } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Slider } from '@/components/ui/slider';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import type { CarouselApi } from './ui/carousel';
import AlgarveCollection from '@/assets/icons/AlgarveCollection';
import { home } from '@/data/home';
import Wave from './Wave';

const SLIDE_COUNT = home.carousel.length;

type CollectionSliderProps = ComponentProps<'section'>;

const CollectionSlider: React.FC<CollectionSliderProps> = ({ className, ...props }) => {
  const [emblaApi, setEmblaApi] = useState<CarouselApi | null>(null);
  const [progress, setProgress] = useState(0);

  const onScroll = useCallback((api: CarouselApi) => {
    if (api?.scrollProgress) {
      const p = Math.max(0, Math.min(1, api.scrollProgress()));
      setProgress(p * 100);
    }
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('reInit', onScroll);
    emblaApi.on('scroll', onScroll);
    emblaApi.on('select', onScroll);
    onScroll(emblaApi);
    return () => {
      emblaApi.off('reInit', onScroll);
      emblaApi.off('scroll', onScroll);
      emblaApi.off('select', onScroll);
    };
  }, [emblaApi, onScroll]);

  const onSliderChange = (values: number[]) => {
    if (!emblaApi) return;
    const targetIndex = Math.round((values[0] / 100) * (SLIDE_COUNT - 1));
    emblaApi.scrollTo(targetIndex);
  };

  return (
    <section className={cn('bg-green relative w-full pt-12 pb-20', className)} {...props}>
      <Wave />
      <Carousel opts={{ align: 'start', dragFree: true }} setApi={setEmblaApi}>
        <CarouselContent>
          {home.carousel.map(({ link: { href }, image: { src, alt } }, index) => (
            <CarouselItem key={index} className="basis-[80%] md:basis-[30%]">
              <Link href={href} className="block">
                <div className="relative h-[355px] p-1 md:h-[446px]">
                  <Image src={src} alt={alt} fill className="object-contain" quality={90} />
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <Image
        width={425}
        height={45}
        src={'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751359503/Algarve-collection_rreldj.webp'}
        alt=""
        className="m-auto mt-28 block w-[185px] text-white lg:w-[425px]"
      />

      <div className="mt-4 flex w-full justify-center px-4 md:mt-12">
        <Slider
          min={0}
          max={100}
          step={1}
          value={[progress]}
          onValueChange={onSliderChange}
          className="h-4 w-[136px] md:h-10 md:w-[359px]"
        />
      </div>
    </section>
  );
};

export default CollectionSlider;
