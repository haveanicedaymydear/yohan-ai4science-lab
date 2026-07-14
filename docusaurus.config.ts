import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Livan Zhou',
  tagline: 'AI Researcher — Developmental Agency, Governed Memory, and Multi-Agent Systems',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://yohanlab.vercel.app',
  baseUrl: '/',

  organizationName: 'haveanicedaymydear',
  projectName: 'yohan-ai4science-lab',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/haveanicedaymydear/yohan-ai4science-lab/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    metadata: [
      {
        name: 'keywords',
        content:
          'Livan Zhou, developmental agency, agent memory, multi-agent systems, responsible NLP, uncertainty-aware AI',
      },
      { name: 'author', content: 'Livan Zhou' },
    ],
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
      disableSwitch: true,
    },
    navbar: {
      title: 'Livan Zhou',
      hideOnScroll: false,
      items: [
        { to: '/#research', label: 'Research', position: 'left' },
        { to: '/#agenda', label: 'Agenda', position: 'left' },
        { to: '/#evidence', label: 'Evidence', position: 'left' },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          label: 'Notes',
          position: 'left',
        },
        {
          href: 'https://openreview.net/profile?id=%7ELiuyuehan_Zhou1',
          label: 'OpenReview',
          position: 'right',
        },
        {
          href: 'https://github.com/haveanicedaymydear',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Research',
          items: [
            { label: 'Selected Work', to: '/#research' },
            { label: 'Research Agenda', to: '/#agenda' },
            { label: 'Evidence Standard', to: '/#evidence' },
          ],
        },
        {
          title: 'Public Evidence',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/haveanicedaymydear',
            },
            {
              label: 'OpenReview',
              href: 'https://openreview.net/profile?id=%7ELiuyuehan_Zhou1',
            },
            {
              label: 'Research Notes',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'zhoulivan@gmail.com',
              href: 'mailto:zhoulivan@gmail.com',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Livan Zhou. Research portfolio and public evidence archive.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
