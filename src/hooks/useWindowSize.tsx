'use client';

import { useState, useEffect } from 'react';

export function useWindowSize() {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    // initialize
    function update() {
      setWidth(window.innerWidth);
    }
    update();

    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return { width };
}
