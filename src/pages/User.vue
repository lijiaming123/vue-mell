<template>
	<div class="user">
		<div>
		<v-head>
			<h1 slot="title">我的</h1>
		</v-head>
	</div>
<div class="user-card-bck">
	<div class="user-card">
		<img src="@/assets/img/boy.png">
		<ul>
			<li><span v-if="userinfo.userName">{{userinfo.userName}}</span><span v-else>{{userinfo._id}}</span></li>
			<li><span>{{userinfo.age}}</span></li>
			<li><span>会员等级：{{userinfo.level}}</span></li>
			<li><span>积分:{{userinfo.credit}}</span></li>
		</ul>
	</div>
</div>
	<div class="user-order">
		<div>
			<router-link :to="{ name: '我的订单',params: {selected:'2'}}">
			<img src="@/assets/img/obligations.png">
			<span>待付款</span>
			</router-link>
		</div>
		<div>
			<router-link :to="{ name: '我的订单',params: {selected:'4'}}">
			<img src="@/assets/img/consignment.png">
			<span>代发货</span>
			</router-link>
		</div>
		<div>
			<router-link :to="{ name: '我的订单',params: {selected:'3'}}">
			<img src="@/assets/img/dispatched.png">
			<span>待收货</span>
			</router-link>
		</div>
		<div>
			<router-link :to="{ name: '我的订单',params: {selected:'1'}}">
			<img src="@/assets/img/refund.png">
			<span>退款/售后</span>
			</router-link>
		</div>
		<div>
			<router-link :to="{ name: '我的订单',params: {selected:'1'}}">
			<img src="@/assets/img/allorder.png">
			<span>全部订单</span>
			 </router-link>
		</div>
	</div>
	<div class="user-other">
		<div><!-- <img src="@/assets/img/user-other/coupon.png"> --><span>优惠券</span><!-- <img src="@/assets/img/right.png"> --></div>
		<div><!-- <img src="@/assets/img/user-other/assets.png"> --><span>我的资产</span><!-- <img src="@/assets/img/right.png"> --></div>
		<div @click="goToaddr"><!-- <img src="@/assets/img/user-other/addr.png"> --><span>收货地址</span><!-- <img src="@/assets/img/right.png"> --></div>
		<div><!-- <img src="@/assets/img/user-other/recode.png"> --><span>浏览记录</span><!-- <img src="@/assets/img/right.png"> --></div>
		<div><!-- <img src="@/assets/img/user-other/concern.png"> --><span>我的关注</span><!-- <img src="@/assets/img/right.png"> --></div>
	</div>
	<div class="user-bottom">
		<div @click="Logoff">退出登录</div>
	</div>
	<v-foot></v-foot>
    </div>
</template>

<script>
import Head from '@/common/head.vue';
import Foot from '@/common/foot.vue';
	export default{
		data(){
			return{
               userinfo:''
			}
		},
		components:{
			    'v-head':Head,
				'v-foot':Foot,
	    },
	    mounted(){
           let user_info = sessionStorage.getItem('user_info')
      if(user_info == '' || !user_info){
        this.$router.push({
          path: '/login'
        })
        return false
      }
      this.userinfo = JSON.parse(user_info)
	    },
	    methods:{
	    	//退出登录
	    	Logoff(){
               sessionStorage.removeItem('token');
               sessionStorage.removeItem('user_info');
               this.$router.push({
               	 path: '/login'
               })
	    	},
	    	//进入收货地址
	    	goToaddr(){
	    		console.log(1)
               this.$router.push({
               	 path: '/addr'
               })
	    	},
	    }
	}
</script>

<style lang="less" scoped>
    .user{
    	font-size: 0.3rem;
    }
    .user-card-bck{
    	background: #fff;
    	padding: 2vh 0;
    }
	.user-card{
		height: 20vh;
		background: #f90000;
		border-radius: 0.2rem 0.2rem 0.2rem 0.2rem;
		width: 90vw;
		margin:0 auto;
		img{
			height: 1rem;
			width: 1rem;
			margin-top: 0.5rem;
			margin-left: 0.4rem;
			display: inline-block;
			vertical-align: top;
		}
		ul{
			vertical-align: middle;
			margin-top: 20px;
			margin-left: 0.2rem;
			display: inline-block;
		}
		li{
			background: #f90000;
			color: #fff;
		}
	}
	.user-order{
		background: #fff;
		height: 12vh;
		margin-top: 3vh;
		display: flex;
		font-size: 0.2rem;
		>div{
			flex: 1;
			text-align: center;
			height: 12vh;
		}
		img{
			width: 0.4rem;
			height: 0.4rem;
			margin-top: 3vh;
		}
		span{
			display: block;
		}
	}
	.user-other{
		margin-top: 2vh;
		background: #fff;
		>div{
			height: 0.8rem;
			line-height: 0.8rem;
			border-bottom: 1px solid #999;
		}
		div:last-child{
           border-bottom: none;
		}
		>div img:last-child{
			width: 0.6rem;
			height: 5vh;
			float: right;
			margin-right: 0.2rem;
		}
		span{
			font-size:0.3rem;
			color:#999;
			padding-left:0.2rem;
		}
	}
</style>