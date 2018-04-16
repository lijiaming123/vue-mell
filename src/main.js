// The Vue build version to load with the `import` command
//这是注册全局
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import store from '@/vuex/index'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(ElementUI)
Vue.use(MintUI)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  console.log(to)
    console.log(router)
    if (to.meta.requireAuth) {  // 需要权限,进一步进行判断   //如果没有权限,重定向到登录页,进行登录
        next({
          path: '/login',
          // query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
        })
    }
    else { //不需要权限 直接跳转
      next();
    }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
