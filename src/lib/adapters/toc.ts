import { z } from 'zod';

const tocItemSchema = z.object({
  value: z.string(),
  url: z.string(),
  depth: z.number(),
});
type TocItemSchema = z.infer<typeof tocItemSchema>;

const tocSchema = z.array(tocItemSchema);

export function tocAdapter(data: unknown) {
  return tocSchema.parse(data);
}

export type NestedToc = TocItemSchema & {
  $children?: NestedToc[];
};

export function convertToNestedStructure(data: TocItemSchema[]): NestedToc[] {
  const result: NestedToc[] = [];
  const stack: NestedToc[] = [];

  data.forEach((item) => {
    const newItem: NestedToc = structuredClone(item);

    while (
      stack.length &&
      (stack[stack.length - 1]?.depth ?? 0) >= item.depth
    ) {
      stack.pop();
    }

    if (stack.length === 0) {
      result.push(newItem);
    } else {
      const parent = stack[stack.length - 1];

      // Ensure the parent has a children array
      if (parent && !parent.$children) {
        parent.$children = [];
      }

      parent?.$children?.push(newItem);
    }

    stack.push(newItem); // Add new item to the stack
  });

  return result;
}
