'use client';

import React, { useEffect, useState, useCallback, FC } from 'react';
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Product } from '@/data/products';
import BuyButton from './BuyButton';

interface ProductCarouselProps {
  product: Product;
}

const ProductCarousel: FC<ProductCarouselProps> = ({ product }) => {
  const [mainRef, mainApi] = useEmblaCarousel({ loop: false, skipSnaps: false });
  const [thumbRef, thumbApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 1024px)': {
        axis: 'y',
        align: 'start',
      },
    },
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onMainSelect = useCallback(
    (embla: UseEmblaCarouselType[1]) => {
      const index = embla!.selectedScrollSnap();
      setSelectedIndex(index);
      thumbApi?.scrollTo(index);
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

  const handleThumbClick = (idx: number) => {
    mainApi?.scrollTo(idx);
  };

  return (
    <div className="product-gallery">
      <div className="space-y-2.5 lg:grid lg:grid-flow-col lg:space-y-0">
        <div ref={mainRef} className="main-gallery overflow-hidden">
          <div className="flex">
            {product.images.map(({ src, alt }, index) => (
              <div key={src} className="min-w-full">
                <div className="relative h-[412px] lg:h-[436px] lg:w-[436px]">
                  <Image src={src} alt={alt} fill className="object-cover" priority={index === 0} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div ref={thumbRef} className="overflow-hidden lg:h-[436px]">
          <div className="flex space-x-1 lg:h-full lg:flex-col lg:space-y-[3px] lg:space-x-0">
            {product.images.map(({ src, alt }, index) => (
              <button
                key={src}
                onClick={() => handleThumbClick(index)}
                className={cn(
                  'relative h-24 w-24 shrink-0 overflow-hidden transition-opacity lg:h-[107px] lg:w-[107px]',
                  index === selectedIndex ? 'opacity-100' : 'opacity-60',
                )}
              >
                <Image src={src} alt={alt} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
      <BuyButton className="hidden! lg:flex!" product={product} />
    </div>
  );
};

export default ProductCarousel;
