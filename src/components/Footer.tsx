import React, { FC } from 'react';
import FooterMobile from './FooterMobile';
import FooterDesktop from './FooterDesktop';

const Footer: FC = ({}) => {
  return (
    <footer className="bg-green">
      <FooterMobile />
      <FooterDesktop />
    </footer>
  );
};

export default Footer;
