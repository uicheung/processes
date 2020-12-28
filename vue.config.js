const path = require("path");

// process.env.VUE_APP_BACKURL
const vueConfig = {
  publicPath: process.env.NODE_ENV === 'production' ? '/project-name/' : '/', //由于我的项目在github上名为zm-ui,所以我的project-name为zm-ui
  lintOnSave: false,
  pages: {
    index: {
      entry: "examples/main.js", // js入口文件修改
      template: "public/index.html",
      filename: "index.html"
    }
  },
  chainWebpack: config => {
    // 重新设置目录别名
    config.resolve.alias
      .set("@", path.resolve("examples"))
      .set("~", path.resolve("packages"));
    // 使 examples及packages目录下的js文件都加入编译
    config.module
      .rule("js")
      .include.add("/packages")
      .end()
      .include.add("/examples")
      .end()
      .use("babel")
      .loader("babel-loader");
  }

}

module.exports = vueConfig
