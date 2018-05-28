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
// import { IndexList, IndexSection } from 'mint-ui';
// import { Cell } from 'mint-ui';
// import { Button } from 'mint-ui';

// Vue.component(Button.name, Button);
// Vue.component(Cell.name, Cell);
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import Vant from 'vant'
import 'vant/lib/vant-css/index.css'
Vue.use(Vant);
Vue.use(ElementUI)
// Vue.component(IndexList.name, IndexList);
// Vue.component(IndexSection.name, IndexSection);
Vue.use(MintUI)
const api = axios.create();
Vue.config.productionTip = false
axios.defaults.timeout = 5000//不能超过5秒
Vue.prototype.axios = axios//注册全局的axios
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.timeout = 5000;
api.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    store.commit('UPDATE_ROUTER_LOADING',true);
        return config;
  }, function (error) {
    // 对请求错误做些什么

  });
api.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    store.commit('UPDATE_ROUTER_LOADING',true);
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

router.beforeEach((to, from, next) => {
    store.commit('UPDATE_ROUTER_LOADING',true)
    console.log(to)
    console.log(router)
    if (to.name == '首页') {
      store.commit('SET_ACTIVEINDEX',0);
    }
    if (to.name == '分类页') {
      store.commit('SET_ACTIVEINDEX',1);
    }
    if (to.name == '更多页') {
      store.commit('SET_ACTIVEINDEX',2);
    }
    if (to.name == '购物车页') {
      store.commit('SET_ACTIVEINDEX',3);
    }
    if (to.name == '登录页'||to.name== '用户页') {
      store.commit('SET_ACTIVEINDEX',4);
    }
    if (to.meta.requireAuth) {  // 需要权限,进一步进行判断   //如果没有权限,重定向到登录页,进行登录
       if (sessionStorage.getItem('token')) {
                next()
       }else{
        if (to.name == '购物车页') {
           next({
            path: '/visitorcar'
           })
        }else{
        next({
          path: '/login',
          // query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
        })
      }
      }
    }else { //不需要权限 直接跳转
      next();
    }
})
router.afterEach((to,from,next) => {
  store.commit('UPDATE_ROUTER_LOADING',false)
});
router.onError(error => {
  console.log(error);
  store.commit('UPDATE_ROUTER_LOADING',false)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  axios,
  components: { App },
  template: '<App/>'
})
