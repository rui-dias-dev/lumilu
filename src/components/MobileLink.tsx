'use client';

import Link, { LinkProps } from 'next/link';
import React, { FC } from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

const MobileLink: FC<MobileLinkProps> = ({ href, onOpenChange, className, children, ...props }) => {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn('text-[1.15rem]', className)}
      {...props}
    >
      {children}
    </Link>
  );
};

export default MobileLink;
