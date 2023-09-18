// 入口文件
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import showMessage from "./utils/showMessage";
import "./mock";
import "./styles/global.less";
Vue.prototype.$showMessage = showMessage;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
