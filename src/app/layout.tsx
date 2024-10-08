import '@/styles/globals.css';
import { type Metadata } from 'next';
import { geist, geistMono, poppins } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { Footer } from '@/components/navigations/footer';

export const metadata: Metadata = {
  title: 'Marviuz | DEV_TOOLBOX',
  description: 'Anything dev stuff I use in and out of work.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={cn(
        'scroll-smooth antialiased',
        geist.variable,
        poppins.variable,
        geistMono.variable,
      )}
      lang="en"
    >
      <body className="font-geist">
        {children}
        <Footer />
      </body>
    </html>
  );
}
