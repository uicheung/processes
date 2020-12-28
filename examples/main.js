import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import ZmUI from 'v-processes'

Vue.use(ZmUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
