// File: src/components/BuyButton.client.tsx

'use client';

import React, { useEffect, useRef, FC } from 'react';
import { Product } from '@/data/products';

interface BuyButtonProps {
  /** The product object including shopifyBuyConfig */
  product: Product;
  /** Optional CSS class on the container div */
  className?: string;
}

const BuyButton: FC<BuyButtonProps> = ({ product, className }) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;

    const { productId, moneyFormat, options } = product.shopifyBuyConfig;

    function initializeButton() {
      if (!isMounted || !container.current) return;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const ShopifyBuy = (window as any).ShopifyBuy;
      if (!ShopifyBuy || !container.current) return;

      // Clear any existing content to avoid duplicates
      container.current.innerHTML = '';

      const client = ShopifyBuy.buildClient({
        domain: 'tidbk0-4e.myshopify.com',
        storefrontAccessToken: 'b29cc03cf0d6247c121adb5f38113923',
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ShopifyBuy.UI.onReady(client).then((ui: any) => {
        if (!isMounted || !container.current) return;
        ui.createComponent('product', {
          id: productId,
          node: container.current,
          moneyFormat,
          options,
        });
      });
    }

    function loadSDK() {
      if (document.getElementById('shopify-buy-button-sdk')) {
        initializeButton();
        return;
      }
      const script = document.createElement('script');
      script.id = 'shopify-buy-button-sdk';
      script.src = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      script.async = true;
      script.onload = initializeButton;
      document.head.appendChild(script);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (!(window as any).ShopifyBuy) {
      loadSDK();
    } else {
      initializeButton();
    }

    return () => {
      isMounted = false;
      if (container.current) container.current.innerHTML = '';
    };
  }, [product]);

  return <div ref={container} className={className} />;
};

export default BuyButton;
