<template>
	<div class="addr">
		<v-head div>
			<h1 slot="title">新增收货地址</h1>
		</v-head>
			<van-address-edit
  :area-list="areaList"
  :search-result="searchResult"
  show-postal
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
    }
  },
  methods: {
    onChangeDetail(){

    },
    onSave(content){
    	console.log(content)
    	this.axios.post('api/addaddr',{
            account: 'lijiaming',
            name:content.name,
            tel:content.tel,
            address:content.province + content.city + content.county + content.address_detail,
            address_detail:content.address_detail,
            province : content.province,
            city: content.city,
            county : content.county,
            postal_code : content.postal_code,
            default : content.is_default,
            area_code : content.area_code
    	}).then((res) => {
    		console.log(res);
    		if (res.data.code == 200) {
    			this.$router.push({
    				path:'/addr'
    			})
}
	       })
					.catch(error => {
	          		console.log(error);
	        	});
    }
  }
}
</script>

<style lang="less" scoped>

</style>