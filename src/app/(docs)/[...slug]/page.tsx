import { getMDXComponent } from 'next-contentlayer2/hooks';
import { notFound } from 'next/navigation';
import { type Metadata } from 'next';
import { allTools } from 'contentlayer/generated';

export function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}): Metadata {
  const slug = params.slug.join('/');
  const tool = allTools.find(($tool) => $tool.slug === slug);

  if (!tool) {
    notFound();
  }

  return {
    title: `DEV_TOOLBOX | ${tool.title}`,
    description: `Simple usage guide for ${tool.title}`,
  };
}

export default function PostLayout({ params }: { params: { slug: string[] } }) {
  const slug = params.slug.join('/');
  const tool = allTools.find(($tool) => $tool.slug === slug);

  if (!tool) {
    notFound();
  }

  const Comp = getMDXComponent(tool.body.code);

  return (
    <main className="w-full max-w-prose py-16">
      <article className="prose mx-auto divide-y px-4">
        <div key={tool._id}>
          <Comp />
        </div>
      </article>
    </main>
  );
}
