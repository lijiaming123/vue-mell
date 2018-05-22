<template>
	<div class="register">
		<v-header>
			<h1 slot="title">注册</h1>
		</v-header>
    <div class="phoneinput">
      <div @click="$router.push({path:'/country'})">+{{selectphone}}</div>
      <input type="" name="" v-model="mobilephone">
      <img src="@/assets/img/delete.png" v-if="mobilephone!=''" @click="clearphone">
    </div>
    <div class="register-password">
      <input type="" name="" placeholder="请输入密码" v-model="password">
    </div>
    <div class="register-ensure">
      <mt-button type="danger" class="button" @click="registerEnsure">确定注册</mt-button>
    </div>
    <!-- <v-foot></v-foot> -->
	</div>
</template>

<script>
    	import Foot from '@/common/foot.vue';
		import Header from '@/common/head.vue';
    import { Toast } from 'mint-ui';
	export default{
        components:{
				'v-foot':Foot,
				'v-header':Header
			},
		data(){
           return{
              selectphone:'86',
              phoneshow:false,
              mobilephone:'',
              password:'',
           }
		},
       methods:{
         toCountry(){
             
         },
         //清除手机号
         clearphone(){
             this.mobilephone = ''
         },
         //确定注册
         registerEnsure(){
             if (this.mobilephone == '') {
                Toast({
                  message: '请输入账号',
                  position: 'center',
                  duration: 1000
                });
             }
             this.axios.post('api/user/register',{
                account:this.mobilephone,
                password:this.password
              }).then((res) => {
                console.log(res.data)
                }
          ).catch(error => {
                console.log(error);
              });
         },
       }
		}
</script>

<style lang="less" scoped>
  .register{
  	font-size: 0.3rem;
  }
  .active{
    background: #ccc;
    opacity: 0.5;
    -webkit-opacity:0.5;
  }
  .phoneinput{
    width: 80vw;
    margin: 0 auto;
    background: #fff;
    margin-top: 5vh;
    div{
      display: inline-block;
      width: 1.2rem;
      height: 0.8rem;
      border-right: 1px solid #ccc;
      text-align: center;
      line-height: 0.8rem;
    }
    input{
      font-size: 0.4rem;
      width: 3rem;
      height: 0.8rem;
      margin-left: 0.2rem;
      line-height: 0.8rem;
    }
    img{
      width: 0.4rem;
      height: 0.4rem;
    }
  }
  .register-ensure{
      margin-top: 5vh;
      text-align: center;
      .button{
        width: 80vw;
      }
  }
   .register-password{
     width: 80vw;
     margin: 0 auto;
     margin-top: 1vh;
     background: #fff;
     height: 0.8rem;
     input{
      width: 80vw;
      height: 0.8rem;
      line-height: 0.8rem;
      background: #fff;
      text-indent: 0.2rem;
     }
   }
   .country{
    position: absolute;
    top: 8vh;
    width: 100vw;
   }
</style>
