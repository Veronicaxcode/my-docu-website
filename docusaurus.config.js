// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Meshnet docs',
  tagline: 'Meshnet is a new NordVPN feature that allows you to create a secure, private network for many devices located anywhere in the world, access them remotely, and send your online traffic through another device.',
  url: 'https://github.com/',
  baseUrl: '/my-docu-website/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'veronicaxcode', // Usually your GitHub org/user name.
  projectName: 'my-docu-website', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Veronicaxcode/my-docu-website',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Veronicaxcode/my-docu-website',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Meshnet Tutorial',
          },
          {
            href: 'https://nordvpn.com/',
            label: 'NordVPN',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'DOCS',
            items: [
              {
                label: 'Meshnet Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'NORDVPN',
            items: [
              {
                label: 'About Us',
                href: 'https://nordvpn.com/about-us/',
              },
              {
                label: 'VPN Free Trial',
                href: 'https://nordvpn.com/risk-free-vpn/',
              },
              {
                label: 'VPN Routers',
                href: 'https://nordvpn.com/flashrouters/',
              },
            ],
          },
          {
            title: 'VPN APPS',
            items: [
              {
                label: 'Windows',
                to: 'https://nordvpn.com/download/windows/',
              },
              {
                label: 'macOS',
                href: 'https://nordvpn.com/download/mac/',
              },
              {
                label: 'Linux',
                href: 'https://nordvpn.com/download/linux/',
              },
              {
                label: 'Android',
                href: 'https://nordvpn.com/download/android/',
              },
              {
                label: 'iOS: iPhone / iPad',
                href: 'https://nordvpn.com/download/ios/',
              },
              {
                label: 'Chrome',
                href: 'https://nordvpn.com/download/chrome-extension/',
              },
              {
                label: 'Firefox',
                href: 'https://nordvpn.com/download/firefox-extension/',
              },
              {
                label: 'Edge',
                href: 'https://nordvpn.com/download/edge-extension/',
              },

            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nord Security. All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

