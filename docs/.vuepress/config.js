const pluginConfig = require('./configs/pluginsConfig');
const headConfig = require('./configs/headConfig');
const themeConfig = require('./configs/themeConfig');


module.exports = {

  // 基本设置
  base: '/',
  port: 80,
  title: 'Skydom Wiki 主页',
  head: headConfig,
  description: 'Skydom Wiki 主页',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Skydom Wiki 主页',
      description: '欢迎来到Skydom Wiki 主页'
    },
    // '/en/': {
    //   lang: 'en-US',
    //   title: 'Isletopia Wiki',
    //   description: 'Welcome to Isletopia Wiki Page'
    // }
  },

  // 插件设置
  plugins: pluginConfig,

  // 主题设置
  themeConfig: themeConfig

}