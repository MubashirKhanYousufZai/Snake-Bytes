// Prism themes for syntax highlighting (Docusaurus v3 compatible)
import { themes as prismThemes } from 'prism-react-renderer';

/**
 * Docusaurus Configuration
 * ------------------------
 * This file defines:
 * - Site metadata
 * - Navbar & theme settings
 * - Docs behavior
 * - Syntax highlighting
 * - Footer
 *
 * @type {import('@docusaurus/types').Config}
 */
const config = {
  /* ======================================================
     SITE METADATA
     ====================================================== */
  title: '🐍 Snake Bytes',
  tagline: 'A practical crash course on Python, FastAPI & Streamlit',

  url: 'https://your-link.com', // Replace with your production URL
  baseUrl: '/',

  favicon: 'img/favicon.ico',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  /* ======================================================
     THEME CONFIGURATION
     ====================================================== */
  themeConfig: {
    navbar: {
      title: '🐍 Snake Bytes',
      items: [
        {
          type: 'doc',
          docId: 'python-basics/intro',
          label: '📘 Start Reading',
          position: 'left',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: '📚 Book',
          items: [
            { label: 'Python Basics', to: '/python-basics/intro' },
            { label: 'FastAPI', to: '/fastapi/setting-up' },
            { label: 'Streamlit', to: '/streamlit/layout-basics' },
          ],
        },
        {
          title: '🛠 Resources',
          items: [
            { label: 'Docusaurus', href: 'https://docusaurus.io' },
            { label: 'FastAPI Docs', href: 'https://fastapi.tiangolo.com' },
            { label: 'Streamlit Docs', href: 'https://docs.streamlit.io' },
          ],
        },
        {
          title: '👨‍💻 Author',
          items: [
            { label: 'Portfolio', href: 'https://mubashir-khans-portfolio.vercel.app/' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mubashir-khan-538a662bb/' },
            { label: 'GitHub', href: 'https://github.com/MubashirKhanYousufZai/' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Snake Bytes. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['python', 'bash', 'json', 'yaml'],
    },
  },

  /* ======================================================
     PRESETS
     ====================================================== */
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },

        blog: false,

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

export default config;
