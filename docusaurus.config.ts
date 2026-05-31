import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

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
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: '/admin/',
          label: 'Edit Site',
          position: 'right',
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
