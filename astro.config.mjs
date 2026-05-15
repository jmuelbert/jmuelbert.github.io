// @ts-check

import mdx from '@astrojs/mdx';
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jmuelbert.github.io',
  integrations: [
    starlight({
      title: 'jmuelbert',
      logo: {
        light: './src/assets/light-logo.svg',
        dark: './src/assets/dark-logo.svg',
        replacesTitle: true,
        alt: 'jmuelbert Logo',
      },
      defaultLocale: 'root',
      locales: {
        root: { label: 'English', lang: 'en' },
        de: { label: 'Deutsch', lang: 'de' },
        es: { label: 'Español', lang: 'es' },
      },
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/jmuelbert' }],
      sidebar: [
        {
          label: 'Knowledge Base',
          items: [{ label: 'Introduction', link: '/intro/' }],
        },
        {
          label: 'Project: Standards',
          items: [{ autogenerate: { directory: 'standards' } }],
        },
        {
          label: 'Project: Workflow',
          items: [{ autogenerate: { directory: 'workflow' } }],
        },
      ],
      credits: true,
      lastUpdated: true,
      components: {
        Footer: './src/components/Footer.astro',
      },
    }),
    mdx(),
  ],
});
