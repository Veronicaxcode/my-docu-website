import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/my-docu-website/__docusaurus/debug',
    component: ComponentCreator('/my-docu-website/__docusaurus/debug', 'adb'),
    exact: true
  },
  {
    path: '/my-docu-website/__docusaurus/debug/config',
    component: ComponentCreator('/my-docu-website/__docusaurus/debug/config', 'e3c'),
    exact: true
  },
  {
    path: '/my-docu-website/__docusaurus/debug/content',
    component: ComponentCreator('/my-docu-website/__docusaurus/debug/content', 'd56'),
    exact: true
  },
  {
    path: '/my-docu-website/__docusaurus/debug/globalData',
    component: ComponentCreator('/my-docu-website/__docusaurus/debug/globalData', 'd53'),
    exact: true
  },
  {
    path: '/my-docu-website/__docusaurus/debug/metadata',
    component: ComponentCreator('/my-docu-website/__docusaurus/debug/metadata', 'dd7'),
    exact: true
  },
  {
    path: '/my-docu-website/__docusaurus/debug/registry',
    component: ComponentCreator('/my-docu-website/__docusaurus/debug/registry', '29d'),
    exact: true
  },
  {
    path: '/my-docu-website/__docusaurus/debug/routes',
    component: ComponentCreator('/my-docu-website/__docusaurus/debug/routes', '3c3'),
    exact: true
  },
  {
    path: '/my-docu-website/blog',
    component: ComponentCreator('/my-docu-website/blog', 'e2a'),
    exact: true
  },
  {
    path: '/my-docu-website/blog/archive',
    component: ComponentCreator('/my-docu-website/blog/archive', '6e0'),
    exact: true
  },
  {
    path: '/my-docu-website/blog/first-blog-post',
    component: ComponentCreator('/my-docu-website/blog/first-blog-post', '899'),
    exact: true
  },
  {
    path: '/my-docu-website/blog/long-blog-post',
    component: ComponentCreator('/my-docu-website/blog/long-blog-post', 'c9d'),
    exact: true
  },
  {
    path: '/my-docu-website/blog/mdx-blog-post',
    component: ComponentCreator('/my-docu-website/blog/mdx-blog-post', '48d'),
    exact: true
  },
  {
    path: '/my-docu-website/blog/tags',
    component: ComponentCreator('/my-docu-website/blog/tags', '119'),
    exact: true
  },
  {
    path: '/my-docu-website/blog/tags/docusaurus',
    component: ComponentCreator('/my-docu-website/blog/tags/docusaurus', '2fa'),
    exact: true
  },
  {
    path: '/my-docu-website/blog/tags/facebook',
    component: ComponentCreator('/my-docu-website/blog/tags/facebook', '48f'),
    exact: true
  },
  {
    path: '/my-docu-website/blog/tags/hello',
    component: ComponentCreator('/my-docu-website/blog/tags/hello', 'dde'),
    exact: true
  },
  {
    path: '/my-docu-website/blog/tags/hola',
    component: ComponentCreator('/my-docu-website/blog/tags/hola', '88c'),
    exact: true
  },
  {
    path: '/my-docu-website/blog/welcome',
    component: ComponentCreator('/my-docu-website/blog/welcome', '230'),
    exact: true
  },
  {
    path: '/my-docu-website/markdown-page',
    component: ComponentCreator('/my-docu-website/markdown-page', '5cc'),
    exact: true
  },
  {
    path: '/my-docu-website/docs',
    component: ComponentCreator('/my-docu-website/docs', 'bfe'),
    routes: [
      {
        path: '/my-docu-website/docs/category/how-to-guides',
        component: ComponentCreator('/my-docu-website/docs/category/how-to-guides', 'ebc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/my-docu-website/docs/category/user-manuals',
        component: ComponentCreator('/my-docu-website/docs/category/user-manuals', '510'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/my-docu-website/docs/intro',
        component: ComponentCreator('/my-docu-website/docs/intro', 'd21'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/my-docu-website/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/my-docu-website/docs/tutorial-basics/congratulations', '07a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/my-docu-website/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/my-docu-website/docs/tutorial-basics/create-a-blog-post', 'bd5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/my-docu-website/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/my-docu-website/docs/tutorial-basics/create-a-document', '2da'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/my-docu-website/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/my-docu-website/docs/tutorial-basics/create-a-page', '359'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/my-docu-website/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/my-docu-website/docs/tutorial-basics/deploy-your-site', 'c00'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/my-docu-website/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/my-docu-website/docs/tutorial-basics/markdown-features', '2a8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/my-docu-website/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/my-docu-website/docs/tutorial-extras/manage-docs-versions', '5e9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/my-docu-website/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/my-docu-website/docs/tutorial-extras/translate-your-site', '2f6'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/my-docu-website/',
    component: ComponentCreator('/my-docu-website/', '8bd'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
