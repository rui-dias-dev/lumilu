import { Facebook, Instagram, SunAndLines } from '@/assets/icons';
import Link from 'next/link';
import React, { FC } from 'react';

const FooterDesktop: FC = ({}) => {
  const thisYear = new Date().getFullYear();
  return (
    <div className="hidden place-items-center justify-between px-14 pt-9 pb-6 text-white md:flex">
      <div className="text-sm">
        <p>{thisYear} Lumilu™</p>
        <p>
          Sustainable yoga mats{' '}
          <b>
            Inspired by Portugal,
            <br /> Designed in Estonia
          </b>
        </p>
      </div>
      <SunAndLines width={75} height={86} />
      <div className="grid justify-end justify-items-end">
        <div className="flex gap-3">
          <div className="grid place-items-end">
            <Link href={'/'}>
              <Facebook width={46} height={46} />
            </Link>
            <Link href={'/terms-and-conditions'} className="mt-4 text-sm uppercase">
              terms and conditions
            </Link>
          </div>
          <div className="grid place-items-end">
            <Link href={'/'}>
              <Instagram width={46} height={46} />
            </Link>
            <Link href={'/about'} className="mt-4 text-sm uppercase">
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterDesktop;
