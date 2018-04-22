<template>
	<div class="shopcar">
		<div class="shopcar-title">
		<v-head><h1 slot="title">购物车</h1></v-head>
	    </div>
	    <div class="shopcar-list" v-for="(item,index) in shopcardata">
	    	<div class="list-shop"><img src="@/assets/img/noselect.png" v-if="item.selected == false" @click='selectall(item,index)'><img src="@/assets/img/selected.png" v-if="item.selected == true" @click='selectall(item,index)'><span>{{item.shopname}}<img src="@/assets/img/right.png"></span><span>编辑</span></div>
	    	<el-row class="list-goods" v-for="(sitem,sindex) in item.shopdetail">
		    	<el-col :span='2'>
		    		<img src="@/assets/img/noselect.png" class="goods-select" v-if="sitem.goodsselected == false" @click='selectone(index,sindex)'>
		    		<img src="@/assets/img/selected.png" class="goods-select" v-if="sitem.goodsselected == true" @click='selectone(index,sindex)'>
		    	</el-col>
		    	<el-col :span='4'>
		    		<img :src="sitem.goodsimg" class="goods-img">
		    	</el-col>
		    	<el-col :span='18'>
		    			<ul>
	<li><span>{{sitem.goodsname}}</span></li><li><span>{{sitem.goodssize}}</span><span>{{sitem.goodsnote}}</span></li><li><span>￥{{sitem.goodsprice}}</span><span>{{sitem.goodsnum}}</span></li>
</ul>
		    	</el-col>
	    	</el-row>
	    </div>
	</div>
</template>

<script>
	import Head from '@/common/head.vue';
  import { Indicator } from 'mint-ui';
		export default{
		data(){
			return{
               shopcardata:[{
               	shopname:'花尽旗舰店',
               	selected:true,
               	shopdetail:[{
               		goodsname:'FILCO定制键盘',
               		goodsimg:'',
                    goodssize:'黑色茶轴',
                    goodsnote:'侧刻官方标配',
                    goodsprice:'999',
                    goodsnum:'2',
                    goodsselected:true,
               	},{
               		goodsname:'FILCO定制键盘',
               		goodsimg:'',
                    goodssize:'黑色红轴',
                    goodsnote:'正刻套餐一',
                    goodsprice:'1599',
                    goodsnum:'1',
                    goodsselected:true,
               	},{
               		goodsname:'FILCO定制键盘',
               		goodsimg:'',
                    goodssize:'白色青轴',
                    goodsnote:'侧刻套餐二',
                    goodsprice:'899',
                    goodsnum:'1',
                    goodsselected:true,
               	}]
               },{
               	shopname:'萌动漫旗舰店',
               	selected:false,
               	shopdetail:[{
               		goodsname:"代理版Saber",
               		goodsimg:'',
                    goodssize:'大',
                    goodsnote:'现货',
                    goodsprice:'428',
                    goodsnum:'1',
                    goodsselected:false
               	}]
               },{
               	shopname:'自营旗舰店',
               	selected:false,
               	shopdetail:[{
               		goodsname:"深入浅出node.js",
               		goodsimg:'',
                    goodssize:'无',
                    goodsnote:'无',
                    goodsprice:'61.40',
                    goodsnum:'1',
                    goodsselected:false
               	}]
               }]
			}
		},
		components:{
			    'v-head':Head,
	    },
<<<<<<< HEAD
      created(){
          let shopcardata = sessionStorage.getItem('shopcardata')
          console.log(shopcardata)
          if (shopcardata != null) {
            this.shopcardata = JSON.parse(shopcardata);
          }
      },
=======
>>>>>>> 26618745b126fc5dbf4b1b56cb8228b1a0cfdf27
      methods:{
        //选择一个
        selectone(index,sindex){
          Indicator.open('加载中...');
          setTimeout(function(){
            Indicator.close();
          },1000)
           this.shopcardata[index].shopdetail[sindex].goodsselected = !this.shopcardata[index].shopdetail[sindex].goodsselected;
           var selectedarr = [];
           var truearr = [];
           for (var i = 0; i < this.shopcardata[index].shopdetail.length; i++) {
              selectedarr.push(this.shopcardata[index].shopdetail[i].goodsselected);
              truearr.push(true);
           }
           console.log(selectedarr.toString())
           if (selectedarr.toString() != truearr.toString()) {
             this.shopcardata[index].selected = false;
           }else{
             this.shopcardata[index].selected = true;
           }
<<<<<<< HEAD
           sessionStorage.setItem("shopcardata", JSON.stringify(this.shopcardata));
=======
>>>>>>> 26618745b126fc5dbf4b1b56cb8228b1a0cfdf27
        },
        //选择店铺所有
        selectall(item,index){
          Indicator.open('加载中...');
          setTimeout(function(){
            Indicator.close();
          },1000)
           this.shopcardata[index].selected = !this.shopcardata[index].selected;
           for (var i = 0; i < this.shopcardata[index].shopdetail.length; i++) {
             this.shopcardata[index].shopdetail[i].goodsselected = this.shopcardata[index].selected
           }
<<<<<<< HEAD
           sessionStorage.setItem("shopcardata", JSON.stringify(this.shopcardata));
=======
>>>>>>> 26618745b126fc5dbf4b1b56cb8228b1a0cfdf27
        }
      }
	}
</script>

<style lang="less" scoped>
    .shopcar{
    	font-size: 0.3rem;
    }
    .shopcar-title{
    	height: 8vh;
    }
	.shopcar-list{
		margin-top: 2vh;
		background: #fff;
		.list-shop{
			height: 6vh;
			line-height: 6vh;
			border-bottom: 1px solid #CCC;
			img{
				width: 0.5rem;
				height: 0.5rem;
				margin: 0 0.2rem;
			}
			span:last-child{
				float: right;
				margin-right: 0.2rem;
        font-weight: 550;
        color: red;
			}
		}
		.list-goods{
			height: 12vh;
			line-height: 12vh;
            .goods-select{
            	width: 0.4rem;
				height: 0.4rem
            }
            .goods-img{
            	width: 1rem;
            	height: 1rem;
            }
            ul{
            	position: absolute;
            	top: 0rem;
            	height: 12vh;
            	vertical-align: top;
            	li{
            		height: 0.3rem;
            	}
            	span{
            		display: inline;
                    font-size: 0.2rem;
            	}
            }
		}
	}
</style>