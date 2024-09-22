import { env } from './src/env.mjs';

const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: `${protocol}://${env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`,
  generateRobotsTxt: true,
};

export default config;
