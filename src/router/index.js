import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//按需加载路由
const Index = resolve => require(['@/pages/Index.vue'],resolve)//首页
const Category = resolve => require(['@/pages/Category.vue'],resolve)//分类
const More = resolve => require(['@/pages/More.vue'],resolve)//更多
const Shopcar = resolve => require(['@/pages/Shopcar.vue'],resolve)//购物车
const User = resolve => require(['@/pages/User.vue'],resolve);//用户
const Login = resolve => require(['@/components/user/login.vue'],resolve);//登录
const Register = resolve => require(['@/components/user/register.vue'],resolve);//注册
const Myorder = resolve => require(['@/components/user/myorder.vue'],resolve);//我的订单
const Visitor = resolve => require(['@/components/shopcar/visitor.vue'],resolve);//未登录状态下的购物车
const Country = resolve => require(['@/components/user/country.vue'],resolve);//选择国家
const Addr = resolve => require(['@/components/user/addr.vue'],resolve);//收货地址
const Newaddr = resolve => require(['@/components/user/newaddr.vue'],resolve);//新增收货地址
const Editaddr = resolve => require(['@/components/user/editaddr.vue'],resolve);//新增收货地址

export default new Router({
  routes: [
  {
    path:'/',
    name:'首页',
    component:Index
  },{
  	path:'/category',
    name:'分类页',
    component:Category
  },{
  	path:'/more',
    name:'更多页',
    component:More
  },{
  	path:'/shopcar',
    name:'购物车页',
    component:Shopcar,
    meta: {
         requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录才能进入的
       },
  },{
  	path:'/user',
    name:'用户页',
    component:User,
    meta: {
         requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录才能进入的
       }
  },{
    path:'/login',
    name:'登录页',
    component:Login,
  },{
    path:'/register',
    name:'注册页',
    component:Register,
  },{
    path:'/country',
    name:'选择国家和地区',
    component:Country
  },{
    path:'/addr',
    name:'收货地址',
    component:Addr,
        meta: {
         requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录才能进入的
       }
  },{
    path:'/newaddr',
    name:'新增地址',
    component:Newaddr,
        meta: {
         requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录才能进入的
       }
  },{
    path:'/editaddr',
    name:'编辑地址',
    component:Editaddr,
    meta: {
         requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录才能进入的
    }
  },{
    path:'/order',
    name:'我的订单',
    component:Myorder,
    meta: {
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录才能进入的
    },
  },{
    path:'/visitorcar',
    name:'游客购物车',
    component:Visitor,
  }]
})
