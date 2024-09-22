import Link from 'next/link';
import { allTools } from 'contentlayer/generated';

export default function Home() {
  return (
    <main className="min-h-[calc(theme(height.svh)-theme(height.28)-1px)] py-16">
      <article className="prose mx-auto px-4 prose-a:no-underline hover:prose-a:underline">
        <h1>
          <span className="font-kode-mono text-7xl">DEV_TOOLBOX</span>{' '}
          <span className="text-xs font-light tracking-wider">by Marviuz</span>
        </h1>
        <p>Anything dev stuff I use in and out of work.</p>
        <p>
          These are only tested on <strong>Windows 10</strong>.
        </p>
        <ol>
          {allTools
            .toSorted((a, b) => Number(a.priority) - Number(b.priority))
            .map((tool) => (
              <li key={tool._id}>
                <Link href={tool.url}>{tool.title}</Link>
              </li>
            ))}
        </ol>
      </article>
    </main>
  );
}
