'use client';

import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const slideImages = [
  '/images/home/carousel/HOME-01.png',
  '/images/home/carousel/HOME-02.png',
  '/images/home/carousel/HOME-03.png',
  '/images/home/carousel/HOME-04.png',
];

export default function ProductCarousel() {
  // main viewport API
  const [mainRef, mainApi] = useEmblaCarousel({ loop: false, skipSnaps: false });
  // thumbnails API
  const [thumbRef, thumbApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  // sync main -> thumbs
  const onMainSelect = useCallback(
    (embla: UseEmblaCarouselType[1]) => {
      const idx = embla!.selectedScrollSnap();
      setSelectedIndex(idx);
      thumbApi?.scrollTo(idx);
    },
    [thumbApi],
  );

  useEffect(() => {
    if (!mainApi) return;
    onMainSelect(mainApi);
    mainApi.on('select', onMainSelect);
    mainApi.on('reInit', onMainSelect);
    return () => {
      mainApi.off('select', onMainSelect);
      mainApi.off('reInit', onMainSelect);
    };
  }, [mainApi, onMainSelect]);

  // click thumb -> main
  const handleThumbClick = (idx: number) => {
    mainApi?.scrollTo(idx);
  };

  return (
    <div className="space-y-6">
      {/* Main Carousel */}
      <div ref={mainRef} className="overflow-hidden">
        <div className="flex">
          {slideImages.map((src, idx) => (
            <div key={idx} className="min-w-full">
              <div className="relative h-[400px]">
                <Image src={src} alt={`Slide ${idx + 1}`} fill className="object-cover" priority={idx === 0} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnails Carousel */}
      <div ref={thumbRef} className="overflow-hidden">
        <div className="flex space-x-3">
          {slideImages.map((src, idx) => (
            <button
              key={idx}
              onClick={() => handleThumbClick(idx)}
              className={cn(
                'relative h-24 w-24 shrink-0 overflow-hidden rounded transition-opacity',
                idx === selectedIndex ? 'opacity-100' : 'opacity-60',
              )}
            >
              <Image src={src} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
