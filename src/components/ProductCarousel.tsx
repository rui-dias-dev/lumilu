'use client';

import React, { useEffect, useState, useCallback, FC } from 'react';
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Product } from '@/data/products';
import BuyButton from './BuyButton';
import { useWindowSize } from '@/hooks/useWindowSize';

// --- SVG ICONS ---
const CloseIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" {...props}>
    <path d="M18 6 L6 18 M6 6 L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const PrevIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" {...props}>
    <path d="M15 18 L9 12 L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const NextIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" {...props}>
    <path d="M9 18 L15 12 L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
// ----------------------

interface ProductCarouselProps {
  product: Product;
}

const ProductCarousel: FC<ProductCarouselProps> = ({ product }) => {
  // main carousel
  const [mainRef, mainApi] = useEmblaCarousel({ loop: false, skipSnaps: false });
  // thumbnails
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
  // lightbox carousel
  const [lightboxRef, lightboxApi] = useEmblaCarousel({ loop: true, skipSnaps: false });
  const { width } = useWindowSize();

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // sync main ↔ thumbnails
  const onMainSelect = useCallback(
    (embla: UseEmblaCarouselType[1]) => {
      if (!embla) return;
      const idx = embla.selectedScrollSnap();
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

  // open lightbox at a given index
  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };
  // close & sync back
  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    mainApi?.scrollTo(lightboxIndex);
  }, [lightboxIndex, mainApi]);

  // when lightbox opens, jump to that slide
  useEffect(() => {
    if (lightboxOpen && lightboxApi) {
      lightboxApi.scrollTo(lightboxIndex);
    }
  }, [lightboxOpen, lightboxApi, lightboxIndex]);

  // lightbox nav
  const goPrev = useCallback(() => lightboxApi?.scrollPrev(), [lightboxApi]);
  const goNext = useCallback(() => lightboxApi?.scrollNext(), [lightboxApi]);

  // keyboard handlers
  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        goPrev();
      } else if (e.key === 'ArrowRight') {
        goNext();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxOpen, goPrev, goNext, closeLightbox]);

  return (
    <div className="product-gallery grid">
      <div className="space-y-2.5 lg:grid lg:grid-flow-col lg:space-y-0">
        {/* Main view (click opens lightbox) */}
        <div
          ref={mainRef}
          className="main-gallery m-auto h-[412px] w-[412px] cursor-pointer overflow-hidden lg:h-[436px] lg:w-[436px]"
          onClick={() => openLightbox(selectedIndex)}
        >
          <div className="flex cursor-grab">
            {product.images.map(({ src, alt }, idx) => (
              <div key={src} className="min-w-full">
                <div className="relative h-[412px] w-[412px] lg:h-[436px] lg:w-[436px]">
                  <Image src={src} alt={alt} fill className="object-cover" priority={idx === 0} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Thumbnails */}
        <div ref={thumbRef} className="m-auto w-[412px] overflow-hidden lg:h-[436px]">
          <div className="flex space-x-1 lg:h-full lg:flex-col lg:space-y-[3px] lg:space-x-0">
            {product.images.map(({ src, alt }, idx) => (
              <button
                key={src}
                onClick={() => mainApi?.scrollTo(idx)}
                className={cn(
                  'relative h-24 w-24 shrink-0 cursor-pointer overflow-hidden transition-opacity lg:h-[107px] lg:w-[107px]',
                  idx === selectedIndex ? 'opacity-100' : 'opacity-60',
                )}
              >
                <Image src={src} alt={alt} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Buy button only on desktop */}
      {width >= 1024 && <BuyButton className="mt-auto hidden! lg:flex!" product={product} />}

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop-blur-sm">
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 flex h-[50px] w-[50px] items-center justify-center text-white hover:opacity-80"
            aria-label="Close"
          >
            <CloseIcon className="h-full w-full" />
          </button>

          {/* Prev */}
          <button
            onClick={goPrev}
            className="absolute top-1/2 left-6 z-10 flex h-[50px] w-[50px] -translate-y-1/2 items-center justify-center text-white hover:opacity-80"
            aria-label="Previous"
          >
            <PrevIcon className="h-full w-full" />
          </button>

          {/* Next */}
          <button
            onClick={goNext}
            className="absolute top-1/2 right-6 z-10 flex h-[50px] w-[50px] -translate-y-1/2 items-center justify-center text-white hover:opacity-80"
            aria-label="Next"
          >
            <NextIcon className="h-full w-full" />
          </button>

          {/* Fullscreen slider */}
          <div ref={lightboxRef} className="w-11/12 max-w-3xl overflow-hidden">
            <div className="flex">
              {product.images.map(({ src, alt }) => (
                <div key={src} className="min-w-full">
                  <div className="relative h-[80vh] w-full">
                    <Image src={src} alt={alt} fill className="object-contain" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCarousel;
