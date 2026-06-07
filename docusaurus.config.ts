import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const remarkCategoryColor = require('./src/plugins/remark-category-color.js');

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'GDocs',
  tagline: 'Internal FTC772 Documentation site.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  /* future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  }, */

  // Set the production url of your site here
  url: 'https://docs.ftc772.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'GoldenDragons772', // Usually your GitHub org/user name.
  projectName: 'GDocs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  scripts: [
    'https://identity.netlify.com/v1/netlify-identity-widget.js'
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          beforeDefaultRemarkPlugins: [remarkCategoryColor],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/GoldenDragons772/GDocs/tree/main/',
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/gdocs-social-card.png',
    navbar: {
      logo: {
        alt: 'Golden Dragons Logo',
        src: '/img/logo.png',
      },
      items: [
        {
          to: '/docs/handbook',
          position: 'left',
          html: '<div style="display:flex;align-items:center;color:#FFB6C1"><svg style="width:20px;height:20px;margin-right:6px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5v-15z"/></svg>Handbook</div>',
        },
        {
          to: '/docs/mechanical',
          position: 'left',
          html: '<div style="display:flex;align-items:center;color:#B491C8"><svg style="width:20px;height:20px;margin-right:6px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>Mechanical</div>',
        },
        {
          to: '/docs/software',
          position: 'left',
          html: '<div style="display:flex;align-items:center;color:#AEC6CF"><svg style="width:20px;height:20px;margin-right:6px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>Software</div>',
        },
        {
          href: 'https://docs.ftc772.org/admin/',
          label: 'Edit Site',
          position: 'right',
          target: '_self',
        },
        {
          href: 'https://github.com/GoldenDragons772/GDocs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
        hideable: true,
      },
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Useful Links',
          items: [
            {
              label: 'Team',
              href: 'https://ftc772.org/team/',
            },
            {
              label: 'Robot',
              href: 'https://ftc772.org/robot/',
            },
            {
              label: 'Sponsors',
              href: 'https://ftc772.org/sponsor/',
            },
          ],
        },
        {
          title: 'First Robotics',
          items: [
            {
              label: 'FIRST',
              href: 'https://www.firstinspires.org/',
            },
            {
              label: 'FTC',
              href: 'https://www.firstinspires.org/robotics/ftc',
            },
            {
              label: 'INTO THE DEEP',
              href: 'https://youtu.be/ewlDPvRK4U4?si=81Au6CfuAiAtxrSC',
            },
          ],
        },
        {
          title: 'GSSM',
          items: [
            {
              label: 'Robotics',
              href: 'https://www.scgssm.org/robotics',
            },
            {
              label: 'About',
              href: 'https://www.scgssm.org/who-we-are',
            },
            {
              label: 'Contact',
              href: 'https://www.scgssm.org/contact',
            },
          ],
        },
        {
          title: 'Socials',
          items: [
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/gssm.golden.dragons/',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/@GoldenDragons772',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/GoldenDragons772',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Golden Dragons. All Rights Reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
