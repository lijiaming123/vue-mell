<template>
    <div>
    <v-head>
      <h1 slot="title">我的订单</h1>
    </v-head>
       <mt-navbar v-model="selected">
		  <mt-tab-item id="1">全部订单</mt-tab-item>
		  <mt-tab-item id="2">代付款</mt-tab-item>
		  <mt-tab-item id="3">待收货</mt-tab-item>
		  <mt-tab-item id="4">代发货</mt-tab-item>
		  <mt-tab-item id="5">已完成</mt-tab-item>
		</mt-navbar> 
	       <mt-tab-container v-model="selected">
	  <mt-tab-container-item id="1">
	    <mt-cell v-for="(item,index) in 10" :title="'内容 ' + item" :key="index" />
	  </mt-tab-container-item>
	  <mt-tab-container-item id="2">
	    <mt-cell v-for="(item,index) in 4" :title="'测试 ' + item" :key="index" />
	  </mt-tab-container-item>
	  <mt-tab-container-item id="3">
	    <mt-cell v-for="(item,index) in 6" :title="'选项 ' + item" :key="index" />
	  </mt-tab-container-item>
	  <mt-tab-container-item id="4">
	    <mt-cell v-for="(item,index) in 6" :title="'选项 ' + item" :key="index" />
	  </mt-tab-container-item>
	  <mt-tab-container-item id="5">
	    <mt-cell v-for="(item,index) in 6" :title="'选项 ' + item" :key="index" />
	  </mt-tab-container-item>
	</mt-tab-container>
    </div>
</template>

<script>
	import Head from '@/common/head.vue';
	export default {
    data() {
      return {
        selected: '1'
      };
    },
    components: {
      'v-head': Head
    },
    created(){
       this.selected = this.$route.params.selected
       console.log(this.selected)
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
    },
  };
</script>

<style>
</style>