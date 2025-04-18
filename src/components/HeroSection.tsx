import { SunAndLines } from '@/assets/icons';
import React, { FC } from 'react';

const HeroSection: FC = ({}) => {
  return (
    <div className="my-20 grid w-full grid-flow-col gap-7 px-16">
      <SunAndLines width={109} height={124} className="text-green" />
      <div>
        <h1>Bringing art & intention into every practice.</h1>
        <p className="pt-1.5 text-[12px]">
          Wherever your practice takes you, whether you&apos;re grounding or soaring, these mat are with you.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
