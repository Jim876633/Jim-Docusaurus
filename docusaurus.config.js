// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/oceanicNext");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Jim's notes ",
  tagline: "Jim's notes",
  url: "https://jim876633.github.io",
  baseUrl: "/Jim-Docusaurus/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon-32x32.png",
  deploymentBranch: "gh-pages",
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Jim876633", // Usually your GitHub org/user name.
  projectName: "Jim-Docusaurus", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: "	GTM-MQ3VJV3",
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateTime: true,
          routeBasePath: "/",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: "google-site-verification",
          content: "Xow6fHBMZxltxfkcAm44dklblf6FUas98iNOJ1QhcKg",
        },
      ],
      navbar: {
        title: "Jim's note",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.png",
          srcDark: "img/logo-darkmode.png",
        },
        items: [
          // {
          //     type: "doc",
          //     docId: "intro",
          //     position: "left",
          //     label: "Note",
          // },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/Jim876633",
            label: "GitHub",
            position: "right",
          },
        ],
        hideOnScroll: true,
      },
      footer: {
        style: "dark",
        links: [
          //   {
          //     title: "Docs",
          //     items: [
          //       {
          //         label: "Tutorial",
          //         to: "/docs/intro",
          //       },
          //     ],
          //   },
          {
            title: "Community",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/Jim876633",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Jim's note, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
    }),
  plugins: [],
};

module.exports = config;
