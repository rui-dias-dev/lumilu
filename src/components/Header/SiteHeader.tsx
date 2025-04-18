import React, { FC } from 'react';
import MainNav from './MainNav';
import MobileNav from './MobileNav';

const SiteHeader: FC = () => {
  return (
    <header className="border-grid sticky top-0 z-50 mt-12 w-full backdrop-blur md:mt-14">
      <div className="container-wrapper">
        <div className="container flex items-center">
          <MainNav />
          <MobileNav />
          <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end"></div>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
