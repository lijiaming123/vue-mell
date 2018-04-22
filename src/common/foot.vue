<template>
		<div class="foot">
			<div class="foot-font">
			    <div v-for="(item,index) in footselect" @click="gotoroute(item,index)" :class="{active:activeindex == index}"><div><img :src='item.imgurl'></div><span>{{item.name}}</span></div>
		    </div>
<!-- 		      <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs> -->
		</div>
</template>

<script>
	export default {
    data() {
      return {
        footselect:[
        {
        	name:'首页',
        	imgurl:require('@/assets/img/index.png'),
        	router:'首页'
        },
        {
        	name:'分类',
            imgurl:require('@/assets/img/category.png'),
            router:'分类页'
        },
        {
        	name:'更多',
        	imgurl:require('@/assets/img/more.png'),
        	router:'更多页'
        },
        {
        	name:'购物车',
        	imgurl:require('@/assets/img/shopcar.png'),
        	router:'购物车页'
        },
        {
        	name:'我的',
        	imgurl:require('@/assets/img/user.png'),
        	router:'用户页'
        }
        ],//菜单
        activeindex:this.$store.state.activeindex,
      };
    },
    methods: {
      gotoroute(item,index){
      	this.$router.push({ 
          name: item.router
        })
      }
    }
  };
</script>

<style scoped>
	.foot{
		width: 100vw;
		height: 10vh;
		position: fixed;
        bottom: 0px;
        border-top: 1px solid #ccc;
        left: 0px;
        font-size: 0.2rem;
        box-shadow: 0 0 1px #ccc;
        z-index: 100;
        background: #fff;
	}
	.foot-font{
    	display: flex;
    	width: 100vw;
        margin-top: 2vh;
    }
    .foot-font div{
    	flex: 1;
    	text-align: center;
    }
    img{
        width: 0.4rem;
        height: 0.4rem;
    }
    .active{
    	color: red;
    }
</style>