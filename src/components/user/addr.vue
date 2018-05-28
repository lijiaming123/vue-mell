<template>
	<div class="addr">
		<v-head div>
			<h1 slot="title">地址管理</h1>
		</v-head>
	<van-address-list
		  v-model="chosenAddressId"
		  :list="addrlist"
		  @add="onAdd"
		  @edit="onEdit"
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
      chosenAddressId: 1,
      addrlist: [],
      areaList:addrlist,
      searchResult: []
    }
  },
  created(){
    this.axios.get('api/addr',{
	    	   	params:{
	    	   		account:'lijiaming'
	    	   	}
	    	    }).then((res) => {
	          		console.log(res.data.body);
	          		this.addrlist = res.data.body;
	          		for (var i = 0; i < this.addrlist.length; i++) {
	          			this.addrlist[i].id = this.addrlist[i]._id;
	          		}
	          		this.chosenAddressId = this.addrlist[0]._id;
	          		console.log(this.addrlist);
	          		}
					).catch(error => {
	          		console.log(error);
	        	});
  },
  methods: {
    onAdd() {
      this.$router.push({
      	path:'/newaddr'
      })
    },
    //编辑
    onEdit(item, index) {
    	console.log(item)
      this.$router.push({
      	path:'/editaddr/' + item._id,
      });
      this.$store.commit('EDIT_ADDR',item)
    },
  }
}
</script>

<style lang="less" scoped>
	.addr{

	}
</style>