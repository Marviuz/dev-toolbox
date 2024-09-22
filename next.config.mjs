import { withContentlayer } from 'next-contentlayer2';

await import('./src/env.mjs');

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withContentlayer(nextConfig);
