const sidebar = require('./sidebarConfig')

module.exports = {

  // logo: '/assets/img/logo.png',

  // 是否启用滑动特效
  smoothScroll: true,

  // I18n
  locales: {

    // 中文(默认)
    '/': {
      // 多语言下拉菜单的标题
      selectText: '选择语言',
      // 该语言在下拉菜单中的标签
      label: '简体中文',
      // Service Worker 的配置
      serviceWorker: {
        updatePopup: {
          message: "发现新内容可用.",
          buttonText: "刷新"
        }
      },
      // 当前 locale 的 algolia docsearch 选项
      algolia: {},
      nav: [
	    { text: '首页', link: '/' },
        { text: '简介', link: '/guide/introduction.html' },
        {
          text: '新玩法', items: [
            { text: '社团', link: '/NewPlay/Association.html' },
            { text: '空岛自定义合成表', link: '/NewPlay/Custom.html' },
          ]
        },
        {
          text: '玩家手册', items: [
            { text: '纯净生存', link: '/guide/survival.html' },
            { text: 'RPG', link: '/guide/RPG.html' },
            { text: '原版空岛', link: '/guide/Island.html' },
          ]
        },
      ],
      sidebar: {
        collapsable: true,
        '/guide/': sidebar,
		collapsable: true,
		'/NewPlay/': [
			'Association',
			'Custom'
		],
      },
    },

    // 英文
    // '/en/': {
    //   selectText: 'Languages',
    //   label: 'English',
    //   ariaLabel: 'Languages',
    //   editLinkText: 'Edit this page on GitHub',
    //   serviceWorker: {
    //     updatePopup: {
    //       message: "New content is available.",
    //       buttonText: "Refresh"
    //     }
    //   },
    //   algolia: {},
    //   nav: [
    //     { text: 'Introduction', link: '/en/guide/introduction.html' },
    //     { text: 'FAQ', link: '/en/guide/faq.html' },
    //     {
    //       text: 'Guide', items: [
    //         { text: 'Tutorial', link: '/en/guide/tutorial.html' },
    //         { text: 'Material', link: '/en/guide/material.html' },
    //         { text: 'Modification', link: '/en/guide/modification.html' },
    //       ]
    //     },
    //     { text: 'Home', link: 'http://isletopia.net' }
    //   ],
    //   sidebar: {
    //     collapsable: true,
    //     '/en/guide/': [
    //       'introduction',
    //       'tutorial',
    //       'material',
    //       'modification',
    //       'faq'
    //     ],
    //   },
    // }
  },

}