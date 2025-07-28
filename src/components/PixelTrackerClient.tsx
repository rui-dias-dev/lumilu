'use client';

import React, { FC } from 'react';
import dynamic from 'next/dynamic';
const PixelTracker = dynamic(() => import('@/components/PixelTracker'), { ssr: false });

const PixelTrackerClient: FC = ({}) => {
  return <PixelTracker />;
};

export default PixelTrackerClient;
