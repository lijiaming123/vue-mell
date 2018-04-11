import Vue from 'vue'
import Vuex from 'vuex'
// import mutations from './'
// import actions from './actions'
// import getters from './getters'

Vue.use(Vuex) // this.$store对象

const state = {
	activeindex : 0,//这是记住点击路由的颜色改变
}

export default new Vuex.Store({
  state, // 状态 存放
})