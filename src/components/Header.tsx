import React, { FC } from 'react';
import MobileNav from './MobileNav';
import MainNav from './MainNav';

const Header: FC = () => {
  return (
    <header className="bg-cream sticky top-0 z-50 mt-12 w-full md:mt-14">
      <MobileNav />
      <MainNav />
    </header>
  );
};

export default Header;
