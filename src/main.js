import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "font-awesome/css/font-awesome.min.css";
import "vue2-animate/dist/vue2-animate.min.css";
import VueSocialSharing from 'vue-social-sharing'
import Meta from 'vue-meta';

Vue.use(Meta);
Vue.use(VueSocialSharing);
Vue.component(
  "VueFontawesome",
  require("vue-fontawesome-icon/VueFontawesome.vue").default
);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
