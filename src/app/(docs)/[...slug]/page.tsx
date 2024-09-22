import { getMDXComponent } from 'next-contentlayer2/hooks';
import { notFound } from 'next/navigation';
import { allTools } from 'contentlayer/generated';

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
