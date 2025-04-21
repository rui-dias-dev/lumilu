'use client';

import React, { useState, useEffect, useCallback, ComponentProps } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Slider } from '@/components/ui/slider';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import type { CarouselApi } from './ui/carousel';
import AlgarveCollection from '@/assets/icons/AlgarveCollection';

const images = [
  '/images/home/carousel/HOME-01.png',
  '/images/home/carousel/HOME-02.png',
  '/images/home/carousel/HOME-03.png',
  '/images/home/carousel/HOME-04.png',
];
const SLIDE_COUNT = images.length;

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
    <section className={cn('w-full pb-20', className)} {...props}>
      <Carousel opts={{ align: 'start', dragFree: true }} setApi={setEmblaApi}>
        <CarouselContent>
          {images.map((src, idx) => (
            <CarouselItem key={idx} className="basis-1/2 md:basis-[30%]">
              <Link href="/" className="block">
                <div className="relative h-48 p-1 md:h-[446px]">
                  <Image src={src} alt={`Slide ${idx + 1}`} fill className="object-contain" quality={90} />
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <AlgarveCollection className="m-auto mt-10 md:hidden" />
      <AlgarveCollection width={425} height={45} className="m-auto mt-28 hidden md:block" />

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
