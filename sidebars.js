const sidebars = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Architecture',
      items: [
        'architecture/system-overview',
        'architecture/repository-map',
        'architecture/data-flow',
        'architecture/integration-points',
        'architecture/framework-workflow',
      ],
    },
    {
      type: 'category',
      label: 'Security',
      items: [
        'security/security-overview',
        'security/data-handling',
        'security/compliance',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/getting-started',
        'guides/faq',
        'guides/glossary',
        'guides/roadmap',
      ],
    },
  ],
};

export default sidebars;
