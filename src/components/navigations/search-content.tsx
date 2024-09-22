'use client';

import Fuse from 'fuse.js';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { allTools } from 'contentlayer/generated';
import { Button } from '../ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../ui/command';
import { Dialog, DialogContent, DialogTitle } from '../ui/dialog';

export function SearchContent() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const fuse = useRef(
    new Fuse(allTools, {
      shouldSort: true,
      threshold: 0.8,
      ignoreFieldNorm: true,
      ignoreLocation: true,
      keys: ['title', 'body._raw'],
    }),
  );

  const filteredTools = useMemo(() => {
    if (query) return fuse.current.search(query).map(({ item }) => item);
    return allTools.toSorted((a, b) => Number(a.priority) - Number(b.priority));
  }, [query]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((current) => !current);
      }
    };
    document.addEventListener('keydown', down);
    return () => {
      document.removeEventListener('keydown', down);
    };
  }, []);

  return (
    <>
      <Button
        className="ml-auto w-full max-w-64 items-center justify-between"
        size="sm"
        variant="outline"
        onClick={() => {
          setOpen(true);
        }}
      >
        Search...
        <kbd className="pointer-events-none flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          aria-describedby={undefined}
          className="top-40 translate-y-0 overflow-hidden p-0 shadow-lg"
        >
          <DialogTitle className="sr-only">Search</DialogTitle>
          <Command shouldFilter={false}>
            <CommandInput
              placeholder="Type a command or search..."
              value={query}
              onValueChange={setQuery}
            />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              {filteredTools.length ? (
                <CommandGroup heading="Search results...">
                  {filteredTools.map((tool) => (
                    <CommandItem
                      key={tool._id}
                      value={tool._id}
                      onSelect={() => {
                        router.push(tool.url);
                      }}
                    >
                      {tool.title}
                    </CommandItem>
                  ))}
                </CommandGroup>
              ) : null}
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  );
}
