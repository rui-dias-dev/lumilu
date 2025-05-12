import { cn } from '@/lib/utils';
import React, { FC } from 'react';
import { Flower, Moon } from '@/assets/icons';

type CareInstructionsProps = React.ComponentProps<'section'> & {};

const CareInstructions: FC<CareInstructionsProps> = ({ className, ...props }) => {
  return (
    <section className={cn('grid grid-cols-2 gap-6 text-center text-black', className)} {...props}>
      <div className="grid justify-items-center">
        <Flower width={66} height={66} />
        <p className="mt-5">
          Hand wash only. Wipe clean with a damp cloth and a few spritzes of spray. We recommend a mix of tea tree oil,
          water, and vinegar.
        </p>
      </div>
      <div className="grid justify-items-center">
        <Moon width={66} height={66} />
        <p className="mt-5">
          Hang to air-dry; avoid prolonged exposure to direct sunlight. To preserve the mat’s appearance, roll the mat
          with the design facing out.
        </p>
      </div>
    </section>
  );
};

export default CareInstructions;
