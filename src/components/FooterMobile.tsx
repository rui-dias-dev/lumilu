import { Facebook, Instagram, SunAndLines } from '@/assets/icons';
import Link from 'next/link';
import React, { FC } from 'react';

const FooterMobile: FC = ({}) => {
  const thisYear = new Date().getFullYear();
  return (
    <div className="grid place-items-center px-14 pt-9 pb-6 text-white md:hidden">
      <SunAndLines width={30} height={35} />
      <p>{thisYear} Lumilu™</p>
      <p className="text-center text-[12px]">
        Sustainable yoga mats{' '}
        <b>
          Inspired by Portugal,
          <br />
          Designed in Estonia
        </b>
      </p>
      <div className="flex gap-3">
        <Link href={'/'}>
          <Facebook width={24} height={24} />
        </Link>
        <Link href={'/'}>
          <Instagram width={24} height={24} />
        </Link>
      </div>
    </div>
  );
};

export default FooterMobile;
