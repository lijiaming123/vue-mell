<template>
    <div class="visitorcar">
    <v-head>
      <h1 slot="title">购物车</h1>
    </v-head>
    	<img src="@/assets/img/shopcarimg.png"  class="visitor-img">
    	<div class="visitorcar-login">
    		<p>登录后可以查看购物车中商品</p>
    		<button @click="Gologin">登录</button>
    	</div>
    </div>
</template>

<script>
	import Head from '@/common/head.vue';
	export default {
    components: {
      'v-head': Head
    },
    methods:{
    	Gologin(){
    		this.$router.push({
    			path:"/login"
    		})
    	}
    }
  };
</script>

<style lang="less" scoped>
  .visitorcar{
  	font-size: 0.3rem;
  }
  .visitor-img{
  	width:30vw;
  	margin-left:35vw;
  	margin-top:10vh
  }
  .visitorcar-login{
  	text-align: center;
  	p{
  		font-weight: bold;
  		font-size: 0.3rem;
  	}
  	button{
  		border: 1px solid #e4393c;
  		color: #e4393c;
  		width: 1.2rem;
  		height: 0.6rem;
  		line-height: 0.6rem;
  		border-radius: 0.1rem;
  		background: #fff;
  		margin-top: 2vh;
  		font-size: 0.3rem;
  	}
  }
</style>