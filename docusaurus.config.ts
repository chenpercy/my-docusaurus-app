import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Percy's Blog",
  tagline: 'Thoughts on tech, music, and games.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'algolia-site-verification',
        content: '036393887874BEDB',
      },
    },
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'tech',
        routeBasePath: 'tech',
        path: './tech',
        showReadingTime: true,
        feedOptions: {type: ['rss', 'atom'], xslt: true},
        onUntruncatedBlogPosts: 'ignore',
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'music',
        routeBasePath: 'music',
        path: './music',
        showReadingTime: true,
        feedOptions: {type: ['rss', 'atom'], xslt: true},
        onUntruncatedBlogPosts: 'ignore',
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'game',
        routeBasePath: 'game',
        path: './game',
        showReadingTime: true,
        feedOptions: {type: ['rss', 'atom'], xslt: true},
        onUntruncatedBlogPosts: 'ignore',
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'play',
        routeBasePath: 'play',
        path: './play',
        showReadingTime: true,
        feedOptions: {type: ['rss', 'atom'], xslt: true},
        onUntruncatedBlogPosts: 'ignore',
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Percy's Blog",
      logo: {
        alt: "Percy's Blog Logo",
        src: 'img/logo.svg',
      },
      items: [
        {to: '/tech', label: 'Tech', position: 'left'},
        {to: '/music', label: 'Music', position: 'left'},
        {to: '/game', label: 'Game', position: 'left'},
        {to: '/play', label: 'Play', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Topics',
          items: [
            {label: 'Tech', to: '/tech'},
            {label: 'Music', to: '/music'},
            {label: 'Game', to: '/game'},
            {label: 'Play', to: '/play'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Percy Chen. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
