<template>
	<div>
		<v-head div v-show="type==''">
			<h1 slot="title">地址管理</h1>
		</v-head>
		<v-head div v-show="type=='edit'">
			<h1 slot="title">编辑地址</h1>
		</v-head>
		<v-head div v-show="type=='add'">
			<h1 slot="title">新增地址</h1>
		</v-head>
	<van-address-list v-show="type==''"
		  v-model="chosenAddressId"
		  :list="addrlist"
		  @add="onAdd"
		  @edit="onEdit"
		/>
		<div class="addr-edit" v-show="type=='edit'">
			<van-address-edit
  :area-list="areaList"
  :search-result="searchResult"
  @change-detail="onChangeDetail"
/>
		</div>
		</div>
</template>

<script>

import Head from '@/common/head.vue';
	export default {
		components:{
			    'v-head':Head
	    },
  data() {
    return {
      type:'',
      chosenAddressId: '1',
      addrlist: [
      ],
      areaList:{},
      searchResult: []
    }
  },
  created(){
    this.axios.get('api/addr',{
	    	   	params:{
	    	   		account:'lijiaming'
	    	   	}
	    	   }).then((res) => {
	          		console.log(res.data.body)
	          		this.addrlist = res.data.body
	          		console.log(this.addrlist)
	          		}
					).catch(error => {
	          		console.log(error);
	        		});
  },
  methods: {
    onAdd() {
      this.type = 'add'
    },
    onEdit(item, index) {
      this.type = 'edit'
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
    }
  }
}
</script>

<style lang="less" scoped>
	
</style>