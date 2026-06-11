const config = {
  title: 'Portfolio Tracker Docs',
  tagline: 'Public documentation for a read-only personal portfolio tracker',
  url: 'https://docs.portfolio-tracker.us',
  baseUrl: '/',
  organizationName: 'edjosephgr',
  projectName: 'portfolio-docs',
  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      es: {
        label: 'Español',
      },
    },
  },
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  themes: ['@docusaurus/theme-mermaid'],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Portfolio Tracker Docs',
      items: [
        { to: '/', label: 'Docs', position: 'left' },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/edjosephgr/portfolio-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Architecture', to: '/architecture/system-overview' },
            { label: 'Security', to: '/security/security-overview' },
            { label: 'Getting Started', to: '/guides/getting-started' },
          ],
        },
      ],
      copyright: `Copyright ${new Date().getFullYear()} Portfolio Tracker.`,
    },
  },
};

export default config;
