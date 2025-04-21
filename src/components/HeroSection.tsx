import { SunAndLines } from '@/assets/icons';
import { cn } from '@/lib/utils';
import React, { ComponentProps, FC } from 'react';

type HeroSectionProps = ComponentProps<'section'>;

const HeroSection: FC<HeroSectionProps> = ({ className, ...props }) => {
  return (
    <section className={cn('grid w-full justify-center px-14 md:px-48', className)} {...props}>
      <div className="grid w-full max-w-[715px] grid-flow-col items-center">
        <SunAndLines width={108} height={124} className="text-green h-[124px] w-[108px] md:h-[287px] md:w-[251px]" />
        <div className="md:col-sp ml-7 md:ml-[77px]">
          <h1 className="italic md:text-[32px]">Bringing art & intention into every practice.</h1>
          <p className="pt-1.5 text-[12px] italic md:mt-7 md:text-2xl">
            Wherever your practice takes you, whether you&apos;re grounding or soaring, these mat are with you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
