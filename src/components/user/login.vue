<template>
	<div>
	<v-header></v-header>
	<v-foot></v-foot>
    </div>
</template>

<script>
	import Foot from '../../common/foot.vue';
	import Header from './user_header.vue'
	export default{
		components:{
			'v-foot':Foot,
			'v-header':Header
		},
		data(){
			return{

			}
		},
	}
</script>

<style>
	
</style>