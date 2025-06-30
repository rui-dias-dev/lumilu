'use client';

import React, { FC } from 'react';
import { useWindowSize } from '@/hooks/useWindowSize';
import { Product } from '@/data/products';
import BuyButton from './BuyButton';

interface MobileBuyButtonProps {
  product: Product;
}

const MobileBuyButton: FC<MobileBuyButtonProps> = ({ product }) => {
  const { width } = useWindowSize();
  return (
    <>{width > 0 && width < 1024 && <BuyButton product={product} className="product-buy-button m-auto lg:hidden!" />}</>
  );
};

export default MobileBuyButton;
