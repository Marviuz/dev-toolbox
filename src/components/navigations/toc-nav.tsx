import { notFound } from 'next/navigation';
import { convertToNestedStructure, tocAdapter } from '@/lib/adapters/toc';
import { allTools } from 'contentlayer/generated';
import { Sidebar, SidebarContent } from '../ui/sidebar';
import { TocNavList } from './toc-nav-list';

type TocNavProps = {
  slug: string;
};

export function TocNav({ slug }: TocNavProps) {
  const tool = allTools.find(($tool) => $tool.slug === slug);

  if (!tool) {
    notFound();
  }

  const toc = convertToNestedStructure(tocAdapter(tool.toc));

  return (
    <Sidebar>
      <SidebarContent>
        <figure className="space-y-4">
          <figcaption className="text-lg font-semibold">
            On this page:
          </figcaption>
          <TocNavList toc={toc} />
        </figure>
      </SidebarContent>
    </Sidebar>
  );
}
