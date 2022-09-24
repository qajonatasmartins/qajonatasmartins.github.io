// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'QA Jonatas Martins',
  tagline: 'QA | DEV | Tech | Nerd | Humor',
  url: 'https://qajonatasmartins.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'qajonatasmartins',
  projectName: 'qajonatasmartins.github.io',
  deploymentBranch: 'gh-pages',
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt'],
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
          // editUrl:
          //   '',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      announcementBar: {
        id: 'supportus',
        content: '🐞 Me siga nas redes sociais <a href="https://www.instagram.com/qajonatasmartins/">Instagram</a>, <a href="https://bit.ly/31SumOs">Youtube</a>, <a href="https://open.spotify.com/show/1guVcHGk4UgbZi7pvzTYds">Spotify</a> e <a href="https://twitter.com/qajonatas">Twitter</a>',
        backgroundColor: '#FDC705',
        textColor: '#100E0E',
        isCloseable: false
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Minha logo do site',
          src: 'img/logo qa svg.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'roadmap-into',
            position: 'left',
            label: 'Roadmap',
          },
          {
            type: 'doc',
            docId: 'tools-into',
            position: 'left',
            label: 'Tools',
          },
          {
            type: 'doc',
            docId: 'sites-into',
            position: 'left',
            label: 'Sites QA',
          },
          {
            href: 'https://github.com/qajonatasmartins',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Redes sociais',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/qajonatasmartins/',
              },
              {
                label: 'Youtube',
                href: 'https://bit.ly/31SumOs',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/qajonatas',
              },
              {
                label: 'Spotify',
                href: 'https://open.spotify.com/show/1guVcHGk4UgbZi7pvzTYds',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/qajonatasmartins',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} qajonatasmartins.github.io, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;