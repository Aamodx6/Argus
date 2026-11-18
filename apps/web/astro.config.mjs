import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';
import { publicOrigin } from './src/lib/routes.mjs';

// https://astro.build/config
const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), 'PUBLIC_');
const apiTarget = publicOrigin(env.PUBLIC_API_URL) || 'http://localhost:3000';
const vercelSiteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : '';
export default defineConfig({
  site: publicOrigin(env.PUBLIC_SITE_URL) || vercelSiteUrl || 'http://localhost:4321',
  integrations: [sitemap({ filter: (page) => !/\/(app|dashboard|console|login|signup)\/?$/.test(new URL(page).pathname) })],
  vite: {
    server: {
      proxy: {
        '/api': {
          target: apiTarget,
          changeOrigin: true,
          xfwd: true,
        },
      },
    },
  },
});
