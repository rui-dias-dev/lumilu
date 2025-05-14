import React, { FC } from 'react';
import MobileNav from './MobileNav';
import MainNav from './MainNav';

const Header: FC = () => {
  return (
    <header className="bg-cream sticky top-0 z-50 w-full py-6 md:pt-14">
      <MobileNav />
      <MainNav />
    </header>
  );
};

export default Header;
