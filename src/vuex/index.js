import Vue from 'vue'
import Vuex from 'vuex'
import * as types from '../vuex/type.js'
// import mutations from './'
// import actions from './actions'
// import getters from './getters'

Vue.use(Vuex) // this.$store对象

const state = {
	activeindex : 0,//这是记住点击路由的颜色改变
	categorybigclass:[],//这是记住大类
	routerloading:false,//路由跳转动画
	addr:{},
}

const mutations = {
	['SET_ACTIVEINDEX'](state,res){
		state.activeindex = res;
	},
	['UPDATE_ROUTER_LOADING'](state,res){
		state.routerloading = res;
	},
	['EDIT_ADDR'](state,res){
		state.addr = res;
	}
}

export default new Vuex.Store({
  state, // 状态 存放
  mutations,
})