import { type ComponentPropsWithoutRef, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const Sidebar = forwardRef<
  HTMLElement,
  ComponentPropsWithoutRef<'aside'>
>(({ className, ...props }, ref) => {
  return (
    <aside
      className={cn(
        'sticky top-14 h-[calc(theme(height.svh)-theme(height.14))] w-full max-w-xs overflow-y-auto',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Sidebar.displayName = 'Sidebar';

export const SidebarContent = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => {
  return <div className={cn('px-4 py-16', className)} ref={ref} {...props} />;
});
SidebarContent.displayName = 'SidebarContent';

export const sidebarVariants = cva('', {
  variants: {
    variant: {
      default: 'space-y-2',
      compact: 'space-y-1',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
export const SidebarList = forwardRef<
  HTMLUListElement,
  ComponentPropsWithoutRef<'ul'> & VariantProps<typeof sidebarVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ul
      className={cn(sidebarVariants({ variant, className }))}
      ref={ref}
      {...props}
    />
  );
});
SidebarList.displayName = 'SidebarList';

export const SidebarListItem = forwardRef<
  HTMLLIElement,
  ComponentPropsWithoutRef<'li'>
>(({ className, ...props }, ref) => {
  return (
    <li
      className={cn('w-fit text-muted-foreground hover:underline', className)}
      ref={ref}
      {...props}
    />
  );
});
SidebarListItem.displayName = 'SidebarListItem';
