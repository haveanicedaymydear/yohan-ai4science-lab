import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Livan Zhou',
  tagline: 'AI Researcher',
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
      title: 'Livan Zhou',
      logo: {
        alt: 'Livan Zhou Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Portfolio',
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
          title: 'Livan Zhou',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
            {
              label: 'AI Foundations',
              to: '/docs/deep-learning/deep-learning-and-classical-ml-map',
            },
            {
              label: 'AI for Science Notes',
              to: '/docs/ai-for-science/intro',
            },
          ],
        },
        {
          title: 'Research Workflow',
          items: [
            {
              label: 'Reproducible Research',
              to: '/docs/reproduction/diffdock-minimal-reproduction-log',
            },
            {
              label: 'Paper Reading',
              to: '/docs/paper-reading/template',
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
              label: 'Scientific Agent Notes',
              to: '/docs/scientific-agent/intro',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/haveanicedaymydear/yohan-ai4science-lab',
            },
          ],
        },
      ],
      copyright: `Copyright (c) ${new Date().getFullYear()} Livan Zhou. Personal AI learning portfolio.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
