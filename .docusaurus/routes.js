import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/my-docu-website/markdown-page',
    component: ComponentCreator('/my-docu-website/markdown-page', '5cc'),
    exact: true
  },
  {
    path: '/my-docu-website/docs',
    component: ComponentCreator('/my-docu-website/docs', '8b6'),
    routes: [
      {
        path: '/my-docu-website/docs/category/tutorial---basics',
        component: ComponentCreator('/my-docu-website/docs/category/tutorial---basics', '4a8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/my-docu-website/docs/category/tutorial---extras',
        component: ComponentCreator('/my-docu-website/docs/category/tutorial---extras', '976'),
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
