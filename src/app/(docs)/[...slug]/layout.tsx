import { DocsNav } from '@/components/navigations/docs-nav';
import { Header } from '@/components/navigations/header';
import { TocNav } from '@/components/navigations/toc-nav';
import { ScrollSpyProvider } from '@/components/ui/scroll-spy';

export default function DocsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    slug: string[];
  };
}) {
  return (
    <ScrollSpyProvider>
      <Header />
      <div className="flex justify-center">
        <DocsNav />
        {children}
        <TocNav slug={params.slug.join('/')} />
      </div>
    </ScrollSpyProvider>
  );
}
