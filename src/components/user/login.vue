	<template>
		<div class="login">
			<!-- 解决退出登录点击返回问题 -->
		<div class="login-top">
	    <img src="@/assets/img/back.png" @click="$router.push({
	    	path:'/'
	    })">
	    <slot name="title">登录</slot>
	    </div>
		<div class="login-content">
			<div class="login-keyword" v-if='msgshow == false'>
				<div>
				<!-- <img src="../../assets/img/account.png" height="20" width="20">
				<input type="" name="" placeholder="用户名/邮箱/手机号" v-model='account'>
				<img src="../../assets/img/clear.png" height="20" width="20" class="clear" v-if="account!=''"> -->
				<van-field
				    v-model="account"
				    label="账号"
				    icon="clear"
				    placeholder="请输入账号"
				    required
				    @click-icon="account = ''"
				  />
			    </div>
			</div>
			<div class="login-keyword" v-if='msgshow == false'>
				<div>
				<!-- <img src="../../assets/img/password.png" height="20" width="20">
				<input type="password" name="" placeholder="请输入密码" v-model='password'>
				<img src="../../assets/img/clear.png" height="20" width="20" class="clear" v-if="password!=''"> -->
				<van-field
				    v-model="password"
				    type="password"
				    label="密码"
				    icon="clear"
				    placeholder="请输入密码"
				    required
				    @click-icon="password = ''"
				  />
			    </div>
			</div>
			<div class="login-keyword" v-if='msgshow == true'>
				<div>
				<!-- <img src="../../assets/img/phone.png" height="20" width="20">
				<input type="" name="" placeholder="请输入手机号" v-model='msgphone' class="phone-input">
				<img src="../../assets/img/clear.png" height="20" width="20" class="clear" v-if="msgphone != ''">
				<span class="phone-code" @click='Getcode'>获取验证码</span> -->
				<van-field
				    center
				    v-model="msgphone"
				    left-icon="phone"
				    placeholder="请输入手机号码"
				    icon="clear"
				    @click-icon="msgphone = ''"
				  >
				    <van-button slot="button" size="small" type="primary">发送验证码</van-button>
				  </van-field>
			    </div>
			</div>
			<div class="login-keyword" v-if='msgshow == true'>
				<!-- <div>
				<img src="../../assets/img/message.png" height="20" width="20">
				<input type="" name="" placeholder="请输入短信验证码" v-model='msgpassword'>
				<img src="../../assets/img/clear.png" height="20" width="20" class="clear" v-if="msgpassword != ''">
			    </div> -->
			      <van-field
					    v-model="msgpassword"
					    icon="clear"
					    placeholder="请输入收到的短信验证码"
					    @click-icon="msgpassword = ''"
					  />
			</div>
			<p class="tip">{{tip}}</p>
			<div class="login-register">
				<span @click="$router.push({'path':'/register'})">免费注册</span>
				<span>忘记密码</span>
			</div>
			<div class="login-sure" @click='Login'>
				<span>登 录</span>
			</div>
			<div class="login-message" @click='msgLogin' v-if='msgshow==false'>
				<span>短信验证码登录</span>
			</div>
			<div class="login-message" @click='commonLogin' v-if='msgshow==true'>
				<span>账号密码登录</span>
			</div>
		</div>
		<v-foot></v-foot>
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
	             account:'',
	             password:'',
	             msgpassword:'',
	             msgphone:'',
	             msgshow:false,
	             tip:''//登录提示
				}
			},
			methods:{
				//登录
				Login(){
					if (this.account == ''||this.password=='') {
						Toast({
  							message: '请输入账号或密码',
						});
						return
					}
	              this.axios.get('api/user/login',{
	          		params:{
	            	account:this.account,
	            	password:this.password
	          		}
	        		}).then((res) => {
	          		console.log(res.data)
                    if (res.data.code == '200') {
                    	sessionStorage.setItem("token", res.data.body._id);
            			sessionStorage.setItem("user_info", JSON.stringify(res.data.body));
		               setTimeout(()=>{
			              this.$router.replace({
			                path: 'user'
			              })
            			},1000);
                    }else{
                        this.tip = res.data.msg;
                        setTimeout(()=>{
			              this.tip = ''
			            },2000)
                    }
	          		}
					).catch(error => {
	          		console.log(error);
	        		});
					},
					//短信验证码登录
				msgLogin(){
					this.msgshow = true;
				},
				//账号密码登录
				commonLogin(){
					this.msgshow = false;
				},
				//获取短信验证码
				Getcode(){
				},
			}
		}
		</script>

		<style lang="less" scoped>
	    .login{
	    	font-size: 0.3rem;
	    }
	    .login-top{
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
		.login-content{
			margin-top: 20vh;
		}
		.login-keyword{
			height: 10vh;
			line-height: 10vh;
		}
		.login-keyword div{
			width: 80vw;
			margin: 0 auto;
		}
		.phone-input{
			width:38vw !important;
			display: inline-block;
		}
		.phone-code{
			display: inline-block;
			width: 22vw;
			font-size: 0.24rem;
			text-align: center;
		}
		.tip{
			color:#f90000;
			margin-left: 15vw;
		}
		.login-keyword input{
			border-bottom: 0.02rem solid black;
			width: 60vw;
			font-size: 0.28rem;
		}
		.clear{
			width: 0.3rem; 
			height: 0.3rem; 
			margin: -0.02rem 0 0 -0.4rem; 
	        border-bottom: 0.02rem solid black;
	        width: 60vw;
	        font-size: 0.28rem;
		}
		.clear{
		    width: 0.3rem; 
		    height: 0.3rem; 
		    margin: -0.02rem 0 0 -0.4rem; 
		}
		.login-register,.login-sure,.login-message{
			width: 80vw;
			margin: 0 auto;
		}
		.login-register{
			font-size: 0.24rem;
		}
		.login-register span:last-child{
			float: right;
	        float: right;
		}
		.login-sure{
			height: 6vh;
			line-height: 6vh;
			text-align: center;
			background-color: #ccc;
			opacity: 0.5;
			margin-top: 2vh;
			color: black;
		}
		.login-message{
			height: 6vh;
			line-height: 6vh;
			text-align: center;
			border: 1px solid red;
			opacity: 0.5;
			margin-top: 1vh;
			color: red;
		}
		</style>