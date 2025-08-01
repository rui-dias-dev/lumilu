'use client';
import { FC, useCallback, useState } from 'react';
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from './ui/drawer';
import { Button } from './ui/button';
import MobileLink from './MobileLink';
import { Cart, Logo } from '@/assets/icons';
import Link from 'next/link';

const MobileNav: FC = () => {
  const [open, setOpen] = useState(false);

  const onOpenChange = useCallback((open: boolean) => {
    setOpen(open);
  }, []);

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <div className="flex w-full items-center justify-between px-14 lg:hidden">
        <Link href={'/shop'}>
          <Cart width={25} height={25} />
        </Link>
        <Link href={'/'}>
          <Logo width={56} height={19} />
        </Link>
        <DrawerTrigger asChild>
          <Button
            variant="ghost"
            className="hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
          >
            <div className="grid gap-[3px]">
              <div className="h-[3px] w-5 rounded-full bg-current"></div>
              <div className="h-[3px] w-5 rounded-full bg-current"></div>
              <div className="h-[3px] w-5 rounded-full bg-current"></div>
            </div>
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </DrawerTrigger>
      </div>
      <DrawerTitle></DrawerTitle>

      <DrawerContent className="h-1/2 max-h-[80svh] p-0">
        <div className="overflow-auto p-6">
          <div className="flex flex-col space-y-3">
            <MobileLink href={'/'} onOpenChange={setOpen}>
              Home
            </MobileLink>
            <MobileLink href={'/shop'} onOpenChange={setOpen}>
              Shop
            </MobileLink>
            <MobileLink href={'/about'} onOpenChange={setOpen}>
              About
            </MobileLink>
            <MobileLink href={'/contact'} onOpenChange={setOpen}>
              Contact
            </MobileLink>
            <MobileLink href={'/terms-and-conditions'} onOpenChange={setOpen}>
              Terms and Conditions
            </MobileLink>
            <MobileLink href={'/faq'} onOpenChange={setOpen}>
              FAQ
            </MobileLink>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNav;
