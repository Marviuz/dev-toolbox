import { ContentlayerLogo } from '../svg/contentlayer';
import { NextJsLogo } from '../svg/nextdotjs';
import { ShadCnLogo } from '../svg/shadcn';
import { ReactJsLogo } from '../svg/reactdotjs';
import { TailwindCssLogo } from '../svg/tailwindcss';

const BRANDS = [
  {
    Logo: ContentlayerLogo,
    name: 'Contentlayer',
    href: 'https://contentlayer.dev',
  },
  {
    Logo: NextJsLogo,
    name: 'Next.js',
    href: 'https://nextjs.org',
  },
  {
    Logo: ReactJsLogo,
    name: 'React.js',
    href: 'https://reactjs.org',
  },
  {
    Logo: TailwindCssLogo,
    name: 'Tailwind CSS',
    href: 'https://tailwindcss.com',
  },
  {
    Logo: ShadCnLogo,
    name: 'shadcn/ui',
    href: 'https://ui.shadcn.com',
  },
];

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4">
        <div className="flex h-28 items-center justify-between">
          <p>Made with ❤️ and JavaScript</p>
          <figure>
            <figcaption className="text-center font-medium">Stack</figcaption>
            <div className="mt-2">
              <ul className="flex gap-4">
                {BRANDS.map((brand) => (
                  <li key={brand.name}>
                    <a
                      href={brand.href}
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      <brand.Logo className="size-8" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </figure>
        </div>
      </div>
    </footer>
  );
}
