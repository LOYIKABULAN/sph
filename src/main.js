import Vue from 'vue'
import App from './App.vue'
import router from "./route";
Vue.config.productionTip = false
import TypeNav from "./pages/Home/TypeNav";
Vue.component(TypeNav.name, TypeNav)
new Vue({
  render: h => h(App),
  //使用路由
  router
}).$mount('#app')
