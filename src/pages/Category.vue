<template>
	<div>
		<div class="category-top">
			<img src="../assets/img/back.png" height="20" width="20">
			<div class="search">
			<img src="@/assets/img/search.png" width="15" height="15">
			<input type="text">
		    </div>
			<img src="../assets/img/moreandmore.png" height="20" width="20">
		</div>
		<!-- category-->
		<div>
			<!-- 左边栏 -->
			<div class="outer-container">
			<ul class="category-aside">
				<li v-for="(item,index) in category" :class="{asideactive:activeindex==index,asideli:activeindex!=index}" @click="Getdetail(index)">{{item.name}}</li>
			</ul>
		    </div>
		</div>
	<v-foot></v-foot>
    </div>
</template>

<script>
	import Foot from '../common/foot.vue'
	export default {
		components:{
			'v-foot':Foot
		},
		data(){
			return{
				category:[
                {name:'手机数码',detail:[]},
                {name:'家用电器',detail:[]},
                {name:'电脑办公',detail:[]},
                {name:'日常生活',detail:[]},
                {name:'汽车用品',detail:[]},
                {name:'鞋子服装',detail:[]},
                {name:'手机数码',detail:[]},
                {name:'家用电器',detail:[]},
                {name:'电脑办公',detail:[]},
                {name:'日常生活',detail:[]},
                {name:'汽车用品',detail:[]},
                {name:'鞋子服装',detail:[]},
                {name:'手机数码',detail:[]},
                {name:'家用电器',detail:[]},
                {name:'电脑办公',detail:[]},
                {name:'日常生活',detail:[]},
                {name:'汽车用品',detail:[]},
                {name:'鞋子服装',detail:[]},
				],
				activeindex:0,
			}
		},
		methods:{
			Getdetail(index){
               this.activeindex = index;
			}
		}
	}
</script>

<style>
	.category-top{
		height: 6vh;
	}
	.outer-container{
		position: relative;
		overflow: hidden;
		width: 30vw;
	    height: 87.5vh;
	}
	.category-aside{
		width: 30vw;
		height: 87.5vh;
		overflow-y: scroll;
		overflow-x: hidden;
		position: absolute;
		left: 0;
		background: #f8f8f8;
	}
	.category-aside li{
        text-align: center;
        height: 6vh;
		line-height: 6vh;
		font-size: 14px;
	}
	.asideli{
		background: #f8f8f8;
	}
	.asideactive{
		background: #fff;
	}
</style>