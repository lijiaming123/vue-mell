<template>
	<div class="head">
	    <img src="@/assets/img/back.png" @click="$router.go(-1)">
	    <slot name="title"></slot>
	</div>
</template>

<script>
	
</script>

<style lang="less" scoped>
	.head{
		width: 100vw;
		background-color: rgb(246,248,250);
		height: 8vh;
		line-height: 8vh;
		text-align: center;
		/*position: absolute;
		top: 0;*/
		font-size: 0.3rem;
		border-bottom: 0.02rem solid #CCC;
		img{
		margin-left: 3vw;
		margin-top: 2vh;
		height: 4vh;
		width: 8vw;
		float: left;
		}
	}
</style>