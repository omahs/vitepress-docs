export default {
  title: 'Documentation',
  description: 'API3 technical documentation',
  markdown: {
    lineNumbers: true,
    toc: ['h2', 'h3', 'h4', 'h5'],
  },
  appearance: true,
  ignoreDeadLinks: true,
  head: [
    [
      'script',
      {
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=G-D3LJ95MXN9',
      },
    ],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-D3LJ95MXN9');",
    ],
    ['link', { rel: 'stylesheet', href: '/styles/api3.css' }],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/img/small-logo.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/img/small-logo.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/img/small-logo.png',
      },
    ],
  ],
  themeConfig: {
    logo: {
      light: '/img/API3-Active.png',
      dark: '/img/api3-inactive.png',
    },
    siteTitle: 'Documentation',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/api3dao/vitepress-docs' },
      {
        icon: 'discord',
        link: 'https://discord.com/channels/758003776174030948/765618225144266793',
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present API3',
    },
    sidebar: {
      '/explore/': require('../explore/sidebar.js'),
      '/guides/': require('../guides/sidebar.js'),
      '/reference/airnode/latest/': require('../reference/airnode/latest/sidebar.js'),
      '/reference/airnode/next/': require('../reference/airnode/next/sidebar.js'),
      '/reference/airnode/v0.11/': require('../reference/airnode/v0.11/sidebar.js'),
      '/reference/ois/latest/': require('../reference/ois/latest/sidebar.js'),
      '/reference/ois/next/': require('../reference/ois/next/sidebar.js'),
      '/reference/ois/2.0/': require('../reference/ois/2.0/sidebar.js'),
      '/reference/dapis/': require('../reference/dapis/sidebar.js'),
      '/reference/qrng/': require('../reference/qrng/sidebar.js'),
      '/reference/dao-members/': require('../reference/dao-members/sidebar.js'),
      '/dev/': require('../dev/sidebar.js'),
    },
    nav: nav(),
  },
};

function nav() {
  return [
    { text: 'Home', link: '/' },
    {
      text: 'Explore',
      link: '/explore/introduction/',
      activeMatch: '/explore/.*',
    },
    { text: 'Guides', link: '/guides/', activeMatch: '/guides/.*' },
    {
      text: 'Reference',
      items: [
        { text: 'dAPIs', link: '/reference/dapis/understand/' },
        {
          text: 'Airnode',
          link: '/reference/airnode/latest/understand/',
        },
        { text: 'OIS', link: '/reference/ois/latest/' },
        { text: 'QRNG', link: '/reference/qrng/' },
        { text: 'DAO Members', link: '/reference/dao-members/' },
      ],
    },
  ];
}
