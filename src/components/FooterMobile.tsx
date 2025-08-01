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
      <div className="mt-6 flex gap-3">
        <Link href={'https://www.facebook.com/profile.php?id=61574534423348'}>
          <Facebook width={47} height={47} />
        </Link>
        <Link href={'https://www.instagram.com/lumilu.eu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='}>
          <Instagram width={47} height={47} />
        </Link>
      </div>
    </div>
  );
};

export default FooterMobile;
