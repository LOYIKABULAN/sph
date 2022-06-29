import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "../pages/Home";
import Search from "../pages/Search";
import Login from "../pages/Login";
import Register from "../pages/Register";

//把原来的路由的push的方法先保存一份
let originPush = VueRouter.prototype.push;

//重写push方法
//第一个参数传递push原来的参数
VueRouter.prototype.push = function (location,resolve,reject) {
    console.log(this);
    if (resolve && reject) {
        //call||apply区别：可以串改函数的上下文
        //不同点：call与apply传递参数call逗号隔开，apply方法执行，传递数组
        originPush.call(this,location,resolve,reject)
    }
    else{
        originPush.call(this,location,()=>{},()=>{})
    }

};

export default new VueRouter({
  routes: [
    {
      path: "/home",
      component: Home,
      meta: {
        footerShow: true,
      },
    },
    {
      name: "search",
      path: "/search/:keyword?",
      component: Search,
      meta: {
        footerShow: true,
      },
      //布尔值写法
      //   props:true
      //对象写法：
      //   props:{a:1,b:2},
      //函数写法:可以传递params和query参数，通过props传给路由组件,参数是$router
      props: ({ params: { keyword }, query: { k } }) => {
        return { k, keyword };
      },
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/register",
      component: Register,
    },
    //重定向到首页
    {
      path: "/*",
      component: Home,
      meta: {
        footerShow: true,
      },
    },
  ],
});
