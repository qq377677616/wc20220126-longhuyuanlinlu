const { defineConfig } = require('@vue/cli-service')
// 配置文件别名
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  // 打包后基础文件访问路径
  publicPath: process.env.NODE_ENV === 'production' ? '' : './',
  // Babel 显式转译列表
  transpileDependencies: true,
  // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  indexPath: 'index.html',
  // build时构建文件的目录 构建时传入 --no-clean 可关闭该行为
  outputDir: 'dist',
  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码 (在生产构建时禁用 eslint-loader)
  lintOnSave: process.env.NODE_ENV !== 'production',
  // 打包是否生成 sourceMap 文件
  productionSourceMap: false,
  // webpack-dev-server 相关配置
  // devServer: {
  //   port: 8080, // 端口
  //   proxy: {
  //       '/api': {
  //           target: 'https://game.vrupup.com/sanguo/wujinwen/applet/bycy/public/index.php/', //对应自己的接口
  //           changeOrigin: true,
  //           ws: true,
  //           pathRewrite: {
  //               '^/api': ''
  //           }
  //       }
  //   }
  // },
  // 对内部的 webpack 配置（比如修改、增加Loader选项）(链式操作)
  chainWebpack: config => {
    config
    .plugin('html')
    .tap(args => {
      args[0].title= ''
      return args
    })
    config.resolve.alias
    .set('@',resolve('src'))
    .set('components',resolve('src/components'))
    .set('views',resolve('src/views'))
    .set('assets',resolve('src/assets'))
    .set('base',resolve('src/base'))
    .set('api',resolve('src/api'))
    .set('hook',resolve('src/hook'))
  },
})
