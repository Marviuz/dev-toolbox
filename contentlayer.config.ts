import { defineDocumentType, makeSource } from 'contentlayer2/source-files';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { rehypePrettyCode } from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import type * as unist from 'unist';
import { visit } from 'unist-util-visit';
import type * as mdast from 'mdast';
import GithubSlugger from 'github-slugger';
import { toString } from 'mdast-util-to-string';
import { remark } from 'remark';
import { type VFile } from 'vfile';
import { nanoid } from 'nanoid';
import rehypeCodeTitles from 'rehype-code-titles';

export const Tool = defineDocumentType(() => ({
  name: 'Tool',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    priority: {
      type: 'string',
      default: '9999',
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath,
    },
    filePath: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFilePath,
    },
    toc: {
      type: 'list',
      resolve: (doc) => extractTocHeadings(doc.body.raw),
    },
  },
}));

export default makeSource({
  contentDirPath: 'src/content',
  documentTypes: [Tool],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      rehypeCodeTitles,
      [rehypePrettyCode, { theme: 'poimandres' }],
    ],
  },
});

export type TocItem = {
  _id: string;
  value: string;
  url: string;
  depth: number;
};

export type Toc = TocItem[];

function remarkTocHeadings() {
  return (tree: unist.Parent, file: VFile) => {
    const slugger = new GithubSlugger();
    const toc: Toc = [];
    visit(tree, 'heading', (node: mdast.Heading) => {
      const textContent = toString(node);
      toc.push({
        _id: nanoid(),
        value: textContent,
        url: `#${slugger.slug(textContent)}`,
        depth: node.depth,
      });
    });
    file.data.toc = toc;
  };
}

async function extractTocHeadings(markdown: string): Promise<Toc> {
  const vfile = await remark().use(remarkTocHeadings).process(markdown);
  return vfile.data.toc as Toc;
}
