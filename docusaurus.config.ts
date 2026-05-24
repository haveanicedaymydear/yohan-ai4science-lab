import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Yohan AI4Sci Lab',
  tagline: 'AI for Science · Deep Learning · Paper Reading · Code Reproduction',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://yohan-ai4science-lab.vercel.app',
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
          editUrl:
            'https://github.com/haveanicedaymydear/yohan-ai4science-lab/tree/main/',
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
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Yohan Lab',
      logo: {
        alt: 'Yohan Lab Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Notes',
        },
        {
          href: 'https://github.com/haveanicedaymydear/yohan-ai4science-lab',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Yohan Lab',
          items: [
            {
              label: 'Learning Notes',
              to: '/docs/intro',
            },
            {
              label: 'AI for Science',
              to: '/docs/ai-for-science/intro',
            },
            {
              label: 'Deep Learning',
              to: '/docs/deep-learning/intro',
            },
          ],
        },
        {
          title: 'Research Workflow',
          items: [
            {
              label: 'Paper Reading',
              to: '/docs/paper-reading/intro',
            },
            {
              label: 'Code Reproduction',
              to: '/docs/reproduction/intro',
            },
            {
              label: 'Projects',
              to: '/docs/projects/intro',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Scientific Agent',
              to: '/docs/scientific-agent/intro',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/haveanicedaymydear/yohan-ai4science-lab',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Yohan Lab. Built as a personal AI for Science learning archive.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
