'use client';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from 'react';

type LinkProps = ComponentPropsWithoutRef<typeof NextLink>;
type LinkRef = ElementRef<typeof NextLink>;

export const Link = forwardRef<LinkRef, LinkProps>((props, ref) => {
  const pathname = usePathname();

  const isActive =
    typeof props.href === 'string'
      ? props.href === pathname
      : props.href.pathname === pathname;

  return <NextLink data-active={isActive} ref={ref} {...props} />;
});
Link.displayName = NextLink.displayName;
