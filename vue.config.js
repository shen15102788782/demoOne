
module.exports = {
  // 基本路径
  baseUrl: '/',
  // 输出文件目录
  outputDir: 'dist',
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      '/agent': {
        //target: 'http://124.193.136.53:6500/LedService.svc/', //白云机场
        target: 'http://39.106.35.97:6200/LedService.svc/',
        changeOrigin: true,
        pathRewrite: {
          '^/agent': ''
        }
      }
    }
  },
  // 第三方插件配置
  pluginOptions: {
  }
}