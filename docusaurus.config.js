// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");
const lightCodeTheme = themes.oceanicNext;
const darkCodeTheme = themes.dracula;
require("dotenv").config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Jim's notes ",
  tagline: "Jim's notes",
  url: "https://jimhuang.dev",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "/img/favicon-32x32.png",
  deploymentBranch: "gh-pages",
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Jim876633", // Usually your GitHub org/user name.
  projectName: "Jim-Docusaurus", // Usually your repo name.

  customFields: {
    env: process.env,
  },

  future: {
    experimental_faster: true,
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hant-TW",
    locales: ["zh-Hant-TW"],
    localeConfigs: {
      "zh-Hant-TW": {
        label: "繁體中文",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: "G-PW7J7LMHR0",
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
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true,
        },
      },
      metadata: [
        {
          name: "google-site-verification",
          content: "Xow6fHBMZxltxfkcAm44dklblf6FUas98iNOJ1QhcKg",
        },
        {
          name: "Jim's Blog",
          content: "Jim docusaurus blog",
        },
        {
          name: "robots",
          content: "max-image-preview:large",
        },
      ],
      navbar: {
        title: "Jim's note",
        logo: {
          alt: "Jim's logo",
          src: "img/logo-small.png",
          srcDark: "img/logo-darkmode-small.png",
        },
        items: [
          // {
          //   type: "doc",
          //   docId: "intro",
          //   position: "left",
          //   label: "Note",
          // },
          {
            type: "docSidebar",
            sidebarId: "interview",
            position: "left",
            label: "📚 Frontend Q&A",
          },
          {
            href: "/tags",
            label: "📌 Tag",
            position: "right",
          },
          { to: "/changelog", label: "⏳ Changelog", position: "right" },
          {
            href: "https://github.com/Jim876633",
            className: "header-github-link",
            position: "right",
            "aria-label": "GitHub repository",
            title: "GitHub",
          },
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          // }
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
          // {
          //   title: "Community",
          //   items: [
          //     {
          //       label: "GitHub",
          //       href: "https://github.com/Jim876633",
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Jim's note, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["bash", "json", "css", "scss", "python"],
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      algolia: {
        apiKey: process.env.API_KEY,
        indexName: "Jim-Docusaurus",
        appId: process.env.APPLICATION_ID,
      },
      zoom: {
        selector: `img:not([alt="Jim's logo"])`,
        config: {
          margin: 60,
        },
      },
    }),
  plugins: [
    "docusaurus-plugin-sass",
    "image-zoom",
    "docusaurus-plugin-get-docs-create-date",
    "./src/plugins/tailwind-config.js",
  ],
};

module.exports = config;
