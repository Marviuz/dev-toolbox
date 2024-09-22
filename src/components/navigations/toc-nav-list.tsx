'use client';

import { nanoid } from 'nanoid';
import { type NestedToc } from '@/lib/adapters/toc';
import { cn } from '@/lib/utils';
import { SidebarList, SidebarListItem } from '../ui/sidebar';
import { useScrollSpy } from '../ui/scroll-spy';

type TocNavListProps = {
  toc: NestedToc[] | NestedToc;
};
export function TocNavList({ toc }: TocNavListProps) {
  const activeId = useScrollSpy();

  if (Array.isArray(toc)) {
    return toc.map((t) => <TocNavList key={nanoid()} toc={t} />);
  }

  return (
    <SidebarList className={cn(toc.depth > 1 && 'pl-4')} variant="compact">
      <SidebarListItem>
        <a
          className="text-muted-foreground transition data-[active=true]:font-medium data-[active=true]:text-foreground"
          data-active={activeId === toc.url.replace('#', '')}
          href={toc.url}
        >
          {toc.value}
        </a>
      </SidebarListItem>
      {toc.$children?.map((child) => <TocNavList key={nanoid()} toc={child} />)}
    </SidebarList>
  );
}
