<template>
	<div class="gooddetail">
		<van-goods-action>
		  <van-goods-action-mini-btn icon="chat" text="客服" />
		  <van-goods-action-mini-btn icon="cart" text="购物车" info="5" />
		  <van-goods-action-mini-btn icon="shop" text="店铺" />
		  <van-goods-action-big-btn text="加入购物车" />
		  <van-goods-action-big-btn text="立即购买" primary />
		</van-goods-action>
	</div>
</template>

<script>
	export default {
		data(){
			return{

			}
		},
		created(){
          this.getGooddetail();
		},
		methods:{
          getGooddetail(){
          	
          }
		}
	}
</script>

<style lang="less" scoped>
	
</style>