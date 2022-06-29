<template>
  <div id="app">
    <top-header-vue></top-header-vue>
    <router-view ></router-view>
    <!-- <bottom-footer-vue v-show="$route.path=='/home' || $route.path=='/'"></bottom-footer-vue> -->
    <bottom-footer-vue v-show="$route.meta.footerShow"></bottom-footer-vue>
  </div>
</template>

<script>
import BottomFooterVue from "./components/BottomFooter/BottomFooter.vue";
import TopHeaderVue from "./components/TopHeader/TopHeader.vue";

export default {
  name: "App",
  components: {
    TopHeaderVue,
    BottomFooterVue,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
