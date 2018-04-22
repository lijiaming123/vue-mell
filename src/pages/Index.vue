<template>
	<div class="index">
	<div class="index-top">
		<!-- <el-col :span="3">
		<img src="@/assets/img/moretwo.png" height="20" width="20">
	    </el-col> -->
	    <el-col :span='20'>
		<div class="search">
			<img src="@/assets/img/search.png">
			<input type="text">
		</div>
	    </el-col>
	    <el-col :span='4'>
	    	<div style="font-size:0.3rem;white-space: nowrap;color: #fff">
	    		登录
	    	</div>
	    <div>
	    </div>
		</el-col>
	</div>
	<!-- 轮播图 -->
	<div class="index-banaer">
	<!-- <el-carousel height="20vh" class="el-carousel" arrow="always" @touchstart='one' @touchmove='two' @touchend='three'>
    <el-carousel-item v-for="item in banaerdata" :key="item" @touchstart='one' @touchmove='two' @touchend='three'>
      <img :src="item.imgurl" width="100%" height="100%">
    </el-carousel-item>
    </el-carousel> -->
    <mt-swipe :auto="4000">
    <mt-swipe-item v-for='(item,index) in banaerdata' :key="index"><img :src="item.imgurl" width="100%" height="100%"></mt-swipe-item>
    </mt-swipe>
    </div>
    <!-- 菜单图标 -->
    <div class="index-menu">
    	<div class="menu-one">
    	<div><div><img src="../assets/img/分类管理.png"></div><span>分类</span></div>
    	<div><div><img src="../assets/img/超市.png"></div><span>超市</span></div>
    	<div><div><img src="../assets/img/衣服.png"></div><span>服饰</span></div>
    	<div><div><img src="../assets/img/icon_物流管理.png"></div><span>物流</span></div>
    	<div><div><img src="../assets/img/我的收藏.png"></div><span>我的收藏</span></div>
        </div>
        <div class="menu-one">
    	<div><div><img src="../assets/img/国际货运.png"></div><span>代购</span></div>
    	<div><div><img src="../assets/img/优惠促销.png"></div><span>优惠</span></div>
    	<div><div><img src="../assets/img/钱袋.png"></div><span>赚钱</span></div>
    	<div><div><img src="../assets/img/股市 排行.png"></div><span>排行</span></div>
    	<div><div><img src="../assets/img/专题浏览_焦点.png"></div><span>浏览记录</span></div>
        </div>
    </div>
    <!-- 秒杀 -->
    <div class="index-seckill">
    	<div><img src="../assets/img/秒杀.png" height="30" width="30"><span class="seckill-date">{{date}}点场</span><span></span><span></span><span></span></div>
    </div>
    <!-- 商品列表 -->
	 <div class="index-goodlist">
	  <el-row>
		  <el-col :span="12" class="el-col"><div><img src="../assets/img/computer.png"></div>
		  	<div class="seckill-price"><span>¥4788</span></div><div><span class="oldprice">4988</span></div></el-col>
		  <el-col :span="12"><div><img src="../assets/img/computer.png"></div>
		  	<div class="seckill-price"><span>¥139</span></div><div><span class="oldprice">199</span></div></el-col>
	  </el-row>
    </div>
    <!-- 底部组件 -->
	<v-foot></v-foot>
    </div>
</template>

<script>
	import Foot from '../common/foot.vue'
	export default {
		data(){
			return{
             banaerdata:[
             {imgurl:require('@/assets/img/banaer1.jpg')},
             {imgurl:require('@/assets/img/banaer2.jpg')},
             {imgurl:require('@/assets/img/banaer3.jpg')}
             ],
             date:'',
             hours:'',
             min:'',
             second:'',
			}
		},
		created(){
            var data = new Date();
            var date = data.getHours();
            if (date>=22||date<6) {
            	this.date = 22
            }else if (date<14&&date>=6) {
            	this.date = 6
            }else if (date<22&&date>=14) {
            	this.date = 14
            };
            var min = data.getMinutes();
            var second = data.getSeconds();
		},
		components:{
			'v-foot':Foot
		},
		methods:{
			one(){
				console.log(2)
			},
            two(){
                console.log(2)
            },
            three(){
                console.log(2)
            }
		}
	}
</script>

<style lang="less" scoped>
    .index{
    	font-size: 0.3rem;
    }
    .index-top{
    	width: 100vw;
    	height: 6vh;
    	line-height: 6vh;
    	text-align: center;
    	z-index: 100;
    	background: #e43130;
    }
	.search{
		border: 0.02rem solid #ccc;
		border-radius: 10px;
		height: 4vh;
		line-height: 4vh;
		margin: 1vh;
		position: relative;
		background: #fff;
		img{
			position: absolute;
			left: 0.2rem;
			top: 1vh;
			height: 0.3rem;
			width: 0.3rem;
	    }
	    input{
	    	position: absolute;
	        left: 0.6rem;
	        top: 0px;
	        height: 4vh;
	    }
	}
	.index-banaer{
		width: 100vw;
		height: 20vh;
		position: absolute;
		top: 6vh;
	}
	.index-menu{
		margin-top: 20vh;
		background-color: #fff;
		padding-bottom: 0.2rem;
		.menu-one{
		        display: flex;
		        padding-top: 0.4rem;
		        div{
					flex: 1;
					text-align: center;
					font-size: 0.2rem;
				}
				img{
					height: 0.6rem;
					width: 0.6rem;
					margin-bottom: 0.1rem;
				}
			}
	}
	.index-seckill{
		margin-top: 0.2rem;
        height: 8vh;
        line-height: 8vh;
        background-color: #fff;
	}
	.index-seckill img{
		margin-left: 6vw;
	}
	.seckill-date{
		margin-left: 2vw;
		font-weight: bold;
	}
	.index-goodlist{
		background: #fff;
		text-align: center;
	}
	.index-goodlist img{
		width: 40vw;
		height: 20vh;
	}
	.el-col{
		border: 0.02rem solid #eee;
	}
	.seckill-price{
		color: rgb(242, 48, 48);
	}
	.oldprice{
		text-decoration: line-through;
		font-style: 0.2rem;
	}
</style>