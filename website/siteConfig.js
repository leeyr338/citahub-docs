/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const baseUrl = '/'

const siteConfig = {
  title: 'CITAHub Docs', // Title for your website.
  tagline: 'Documents of CITAHub',
  url: 'https://docs.citahub.com/', // Your website URL
  baseUrl, // Base URL for your project */
  customDocsPath: 'docs/',
  docsUrl: '',
  cname: 'docs.citahub.com',
  projectName: 'citahub-docs',
  organizationName: 'cryptape',
  editUrl: 'https://github.com/cryptape/edit/master/docs/',
  headerLinks: [{
      page: 'community',
      label: 'Community',
    },
    // {
    //   search: true,
    // },
    {
      language: true,
    },
  ],

  headerIcon: 'img/citahub_logo.svg',
  footerIcon: 'img/citahub_logo.svg',
  favicon: 'img/citahub_logo.png',

  colors: {
    primaryColor: '#231719',
    secondaryColor: '#595656',
  },

  translationRecruitingLink: 'https://crowdin.com/project/citahub-docs',

  copyright: `Copyright © ${new Date().getFullYear()} Cryptape`,

  highlight: {
    theme: 'default',
  },
  stylesheets: [
    // 'https://cdn.jsdelivr.net/npm/instantsearch.css@7/themes/algolia-min.css',

    baseUrl + 'css/search.css',
  ],

  scripts: [
    'https://buttons.github.io/buttons.js',
    baseUrl + 'javascript/index.js',
    baseUrl + 'javascript/search.js',
    'https://cdn.jsdelivr.net/npm/algoliasearch@3.32.0/dist/algoliasearchLite.min.js',
    'https://cdn.jsdelivr.net/npm/instantsearch.js@3.0.0'
  ],

  onPageNav: 'separate',
  docsSideNavCollapsible: true,

  cleanUrl: true,

  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',

  enableUpdateBy: true,

  enableUpdateTime: true,

  scrollToTop: true,
  // algolia: {
  //   appId: 'K49G7V3FTS',
  //   apiKey: '3b32efa6eb6511b7508c87df5c011d29',
  //   indexName: 'citahub-docs',
  //   placeholder: 'Search',
  //   algoliaOptions: {
  //     facetFilters: ['zh-CN', 'next'],
  //   },
  // },
}

module.exports = siteConfig
