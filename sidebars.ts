import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'AI Foundations',
      items: [
        'deep-learning/deep-learning-and-classical-ml-map',
        'deep-learning/classical-machine-learning-algorithm-map',
        'deep-learning/graph-neural-networks',
      ],
    },
    {
      type: 'category',
      label: 'AI for Science',
      items: ['ai-for-science/intro'],
    },
    {
      type: 'category',
      label: 'Reproducible Research',
      items: [
        'reproduction/template',
        'reproduction/diffdock-minimal-reproduction-log',
      ],
    },
    {
      type: 'category',
      label: 'Research Workflow',
      items: ['paper-reading/template', 'scientific-agent/intro'],
    },
    {
      type: 'category',
      label: 'Projects',
      items: ['projects/intro'],
    },
  ],
};

export default sidebars;
