import React, { FC } from 'react';
import { Cart, Logo } from '@/assets/icons';
import Link from 'next/link';

const MainNav: FC = () => {
  return (
    <div className="m-auto hidden w-full px-48 lg:block">
      <div className="flex items-center justify-between overflow-auto py-6">
        <Link href={'/'}>
          <Logo height={36} width={92} />
        </Link>
        <div className="grid grid-flow-col items-center gap-9 space-y-3 text-[22px]">
          <Link className="m-0 uppercase" href={'/shop'}>
            Shop
          </Link>
          <Link className="m-0 uppercase" href={'/faq'}>
            FAQ
          </Link>
          <Link className="uppercase" href={'/contact'}>
            Contact
          </Link>
        </div>
        <Cart height={53} width={47} />
      </div>
    </div>
  );
};

export default MainNav;
