<template>
  <div id="app">
    <router-view v-loading="$store.state.routerloading"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,body,#app{
  -webkit-tap-highlight-color:rgba(0,0,0,0);
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  background: #f6f6f6;
  font-size: 0.3rem;
}

body,
dd,
dl,
dt,
fieldset,
form,
h1,
h2,
h3,
h4,
h5,
h6,
html,
img,
legend,
li,
ol,
p,
ul {
    margin: 0;
    padding: 0;
    -moz-user-select:none;-webkit-user-select:none;
    -webkit-tap-highlight-color:transparent;
}

button,
fieldset,
img,
input {
    border: none;
    padding: 0;
    margin: 0;
    outline-style: none;
}

ul,li {
  background-color: #ffffff;
}
ol,
ul {
    list-style: none;
}
li{
   margin: 0;
    padding: 0;
}
input {
    padding-top: 0;
    padding-bottom: 0;
    font-family: "SimSun", "宋体";
}
input:-webkit-autofill, 
 textarea:-webkit-autofill, 
 select:-webkit-autofill { 
       -webkit-box-shadow: 0 0 0 1000px#f6f6f6 inset; 
}
 input[type=text]:focus, input[type=password]:focus, textarea:focus {
      -webkit-box-shadow: 0 0 0 1000px #f6f6f6 inset; 
}
input,
select {
    vertical-align: middle;
}

input,
select,
textarea {
    font-size: 12px;
    margin: 0;
}
textarea {
    resize: none;
}

/*防止拖动*/
img {
    border: 0;
    vertical-align: middle;
}

/*  去掉图片低测默认的3像素空白缝隙*/
table {
    border-collapse: collapse;
}
//去斜体
i {
  font-style:normal
}
body {
    font-family: PingFangSC-Light,helvetica,'Heiti SC';
    color: #666;
    background: #fff;
}

a {
    color: #666;
    text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    text-decoration: none;
    font-weight: normal;
    font-size: 100%;
    font-family: PingFangSC-Light,helvetica,'Heiti SC';
}
.ac {
    text-align: center;
}
</style>
