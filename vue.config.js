const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      // 设置 less 全局变量
      less: {
        additionalData: `@import "~@/styles/var.less";`,
      },
    },
  },
});
