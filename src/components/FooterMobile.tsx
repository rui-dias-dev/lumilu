import { Facebook, Instagram, SunAndLines } from '@/assets/icons';
import React, { FC } from 'react';

const FooterMobile: FC = ({}) => {
  const thisYear = new Date().getFullYear();
  return (
    <footer className="bg-green grid place-items-center px-14 pt-9 pb-6 text-white">
      <SunAndLines width={30} height={35} />
      <p>{thisYear} Lumilu™</p>
      <p className="text-center text-[12px]">
        Sustainable yoga mats <b>Inspired by Portugal, Designed in Estonia</b>
      </p>
      <div className="flex gap-3">
        <Facebook width={24} height={24} />
        <Instagram width={24} height={24} />
      </div>
    </footer>
  );
};

export default FooterMobile;
