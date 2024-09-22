import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Kode_Mono as KodeMono } from 'next/font/google';

export const geist = GeistSans;
export const geistMono = GeistMono;

export const poppins = KodeMono({
  subsets: ['latin'],
  variable: '--font-kode-mono',
});
