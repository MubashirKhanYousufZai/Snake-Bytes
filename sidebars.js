/**
 * Sidebars configuration for Docusaurus
 *
 * This file controls:
 * - Left sidebar structure
 * - Order of chapters
 * - Grouping of topics
 *
 * Docs folder structure expected:
 *
 * docs/
 * ├── python-basics/
 * │   ├── intro.md
 * │   ├── types-and-logic.md
 * │
 * ├── fastapi/
 * │   ├── setting-up.md
 * │   ├── pydantic-models.md
 * │
 * ├── streamlit/
 * │   ├── layout-basics.md
 * │   ├── state-management.md
 * │
 * └── full-stack/
 *     └── connecting-the-dots.md
 */

const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: '🐍 Python Basics',
      collapsed: false,
      items: [
        'python-basics/intro',
        'python-basics/types-and-logic',
      ],
    },

    {
      type: 'category',
      label: '⚡ FastAPI',
      collapsed: false,
      items: [
        'fastapi/setting-up',
        'fastapi/pydantic-models',
      ],
    },

    {
      type: 'category',
      label: '🎨 Streamlit',
      collapsed: false,
      items: [
        'streamlit/layout-basics',
        'streamlit/state-management',
      ],
    },

    {
      type: 'category',
      label: '🔗 Full-Stack Integration',
      collapsed: false,
      items: [
        'full-stack/connecting-the-dots',
      ],
    },
  ],
};

module.exports = sidebars;
