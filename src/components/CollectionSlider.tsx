'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Slider } from '@/components/ui/slider';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import type { CarouselApi } from './ui/carousel';
import AlgarveCollection from '@/assets/icons/AlgarveCollection';

const SLIDE_COUNT = 4;

const CollectionSlider: React.FC = () => {
  const [emblaApi, setEmblaApi] = useState<CarouselApi | null>(null);
  const [progress, setProgress] = useState(0);

  const onScroll = useCallback((api: CarouselApi) => {
    if (api?.scrollProgress) {
      const p = Math.max(0, Math.min(1, api?.scrollProgress()));
      setProgress(p * 100);
    }
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('reInit', onScroll);
    emblaApi.on('scroll', onScroll);
    emblaApi.on('select', onScroll);

    // initialize
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
    <div className="w-full pb-20">
      <Carousel opts={{ align: 'start', dragFree: true }} setApi={setEmblaApi} className="">
        <CarouselContent>
          {Array.from({ length: SLIDE_COUNT }).map((_, index) => (
            <CarouselItem key={index} className="basis-1/2 md:h-48 md:basis-1/3">
              <div className="h-full p-1">
                <Card className="h-full">
                  <CardContent className="flex h-full items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <AlgarveCollection className="m-auto mt-10" />

      <div className="mt-4 flex w-full justify-center px-4">
        <Slider
          min={0}
          max={100}
          step={1}
          value={[progress]}
          onValueChange={onSliderChange}
          className="h-4 w-[136px]"
        />
      </div>
    </div>
  );
};

export default CollectionSlider;
