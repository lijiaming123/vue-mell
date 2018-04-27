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
				<li v-for="(item,index) in category" :class="{asideactive:activeindex==index,asideli:activeindex!=index}" @click="Getdetail(index)">{{item.bigclassname}}</li>
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
				category:this.$store.state.categorybigclass,
				activeindex:0,
			}
		},
		created(){
            this.getBigclass();
		},
		methods:{
			//获取大类
			getBigclass(){
               if (this.category.length > 0) {
               	  return
               }else{
           this.axios.get('api/bigclass').then((res) => {
	          		console.log(res.data)
	          		this.$store.state.categorybigclass = res.data.body
	          		}
					).catch(error => {
	          		console.log(error);
	        		});
				}
			},
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
		overflow-y: scroll;
	    height: 83vh;
	}
	.category-aside{
		width: 30vw;
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