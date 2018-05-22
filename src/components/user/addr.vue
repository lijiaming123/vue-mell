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
    onEdit(item, index) {
    	console.log(item)
      this.$router.push({
      	path:'/editaddr',
      });
      this.$store.commit('EDIT_ADDR',item)
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
	.addr{

	}
</style>