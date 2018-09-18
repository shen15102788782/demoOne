<template>
  <div class="menu" :style="{minHeight: screenHeight + 'px'}">
    <div class="logo">
      <img src="./../assets/images/menu/plane.png" alt="">
      <h1>机场管理系统</h1>
    </div>
    <ul>
      <!--<router-link :to="{ name: 'overview'}" active-class="active" tag="li">-->
        <!--<img src="./../assets/images/menu/home.png" alt="">-->
        <!--<span>概况</span>-->
        <!--<i></i>-->
      <!--</router-link>-->
      <router-link :to="{ name: 'equipment'}" active-class="active" tag="li">
        <img src="./../assets/images/menu/equipment.png" alt="">
        <span>设备管理</span>
        <i></i>
      </router-link>
      <router-link :to="{ name: 'message'}" active-class="active" tag="li">
        <img src="./../assets/images/menu/message.png" alt="">
        <span>消息中心</span>
        <i></i>
      </router-link>
      <router-link :to="{ name: 'fault'}" active-class="active" tag="li">
        <img src="./../assets/images/menu/fault.png" alt="">
        <span>故障管理</span>
        <i></i>
      </router-link>
      <router-link :to="{ name: 'account'}" active-class="active" tag="li">
        <img src="./../assets/images/menu/account.png" alt="">
        <span>账户管理</span>
        <i></i>
      </router-link>
      <router-link :to="{ name: 'count'}" active-class="active" tag="li">
        <img src="./../assets/images/menu/count.png" alt="">
        <span>统计管理</span>
        <i></i>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Menu",
    data () {
      return {
        screenHeight: window.innerHeight,
      }
    },
    components: {

    }

  }
</script>

<style scoped>
  .logo{
    padding-bottom:2rem;
  }
  .logo img{
    width:2.5rem;
    margin-left: 1rem;
  }
  .menu{
    padding-top: 2rem;
    flex:0 0 3.6rem;
    background: #020724;
    /*transition: all .3s;*/
  }
  .menu:hover{
    flex:0 0 8.5rem;
  }
  h1{
    width:0;
    font-size:1rem;
    height:1.6rem;
    line-height:1.6rem;
    overflow: hidden;
    color:#fff;
    text-align: center;
    margin-top:1rem;
  }
  span{
    font-size: .7rem;
    display: none;
    color:#fff;
    width:0;
  }
  ul>li{
    padding:.5rem .5rem .5rem 1.5rem;
    cursor: pointer;
    overflow: hidden;
    line-height: 1.3rem;
  }
  ul>li img{
    width: 1.2rem;
    margin-right: 1rem;
  }
  ul>li i{
    float: right;
    margin-top: .35rem;
    display: none;
  }
  ul>li:hover{
    background: #1f2436;
  }
  ul>li.active{
    background: #1f2436;
    /*cursor: default;*/
  }
  .menu:hover ul>li.active i{
    display: inline-block;
    width:10px;
    height:10px;
    border-radius: 50%;
    background: #00ffff;
  }
  .menu:hover h1{
    width:100%;
  }
  .menu:hover span{
    display: inline;
  }
</style>