<template>
	<div class="addr">
		<v-head div>
			<h1 slot="title">编辑收货地址</h1>
		</v-head>
			<van-address-edit
  :area-list="areaList"
  :search-result="searchResult"
  show-postal
  show-delete
  :address-info="address"
  show-set-default
  show-search-result
  @save="onSave"
  @change-detail="onChangeDetail"
/>
	</div>
</template>

<script>
import addrlist from '../../../static/area.js';
import Head from '@/common/head.vue';
	export default {
		components:{
			    'v-head':Head
	    },
  data() {
    return {
    	searchResult: [],
    	areaList:addrlist,
    	address:this.$store.state.addr
    }
  },
  created(){
  		console.log(this.$store.state.addr)
  },
  methods: {
    onChangeDetail(){

    },
    onSave(content){
      this.axios.post('/api/editaddr',{
      	account:'lijiaming',
      	_id:this.address._id
      }).then((res) => {
      	console.log(res)
      }).catch(error => {
	          		console.log(error);
	        	});
    }
  }
}
</script>

<style lang="less" scoped>

</style>