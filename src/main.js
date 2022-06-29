import Vue from 'vue'
import App from './App.vue'
import router from "./route";
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //使用路由
  router
}).$mount('#app')
