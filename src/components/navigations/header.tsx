import Link from 'next/link';
import { Github } from 'lucide-react';
import { Button } from '../ui/button';
import { SearchContent } from './search-content';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto w-full px-4">
        <div className="flex h-14 items-center justify-between">
          <Link className="font-kode-mono text-4xl font-black" href="/">
            DEV_TOOLBOX
          </Link>

          <SearchContent />
          <Button asChild className="ml-4 h-9 w-9" size="icon" variant="ghost">
            <a
              href="https://github.com/Marviuz/dev-toolbox"
              rel="noreferrer noopener"
              target="_blank"
            >
              <Github className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
