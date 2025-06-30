'use client';

import React, { useEffect, useRef, FC, useCallback, useState } from 'react';
import { Product } from '@/data/products';

interface BuyButtonProps {
  product: Product;
  className?: string;
}

const BuyButton: FC<BuyButtonProps> = ({ product, className }) => {
  const container = useRef<HTMLDivElement>(null);
  const { productId, moneyFormat, options } = product.shopifyBuyConfig;
  const scriptId = 'shopify-buy-button-sdk';
  const [sdkReady, setSdkReady] = useState(false);

  // Initialize Shopify Buy Button UI
  const initializeButton = useCallback(() => {
    if (!container.current) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ShopifyBuy = (window as any).ShopifyBuy;
    if (!ShopifyBuy) return;

    // Clear any existing content to avoid duplicates
    container.current.innerHTML = '';

    const client = ShopifyBuy.buildClient({
      domain: 'tidbk0-4e.myshopify.com',
      storefrontAccessToken: 'b29cc03cf0d6247c121adb5f38113923',
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ShopifyBuy.UI.onReady(client).then((ui: any) => {
      if (!container.current) return;
      ui.createComponent('product', {
        id: productId,
        node: container.current,
        moneyFormat,
        options,
      });
    });
  }, [moneyFormat, options, productId]);

  // Load SDK once
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      script.async = true;
      script.onload = () => setSdkReady(true);
      document.head.appendChild(script);
    } else {
      setSdkReady(true);
    }

    return () => {
      if (container.current) container.current.innerHTML = '';
    };
  }, []);

  // Initialize on SDK ready or product change
  useEffect(() => {
    if (sdkReady) {
      initializeButton();
    }
  }, [sdkReady, initializeButton]);

  return <div key={productId} ref={container} className={className} />;
};

export default BuyButton;
