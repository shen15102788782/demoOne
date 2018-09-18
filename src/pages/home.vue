<template>
  <div class="index">
    <Left class="bgc"></Left>
    <Middle></Middle>
    <Right></Right>
    <div class="toggleScreen">
      <button @click="toggleScreen()">切换单三屏显示</button>
    </div>
  </div>
</template>
<script>
  import Left from './../components/Left'
  import Middle from './../components/Middle'
  import Right from './../components/Right'
  export default {
    name: 'index',
    data () {
      return {
        floor: '1',
        leftNodeList:[],
        middleNodeList:[],
        rightNodeList:[]
      }
    },
    components: {
      Left,
      Middle,
      Right,
    },
    created () {
    },
    methods: {
      toggleScreen () {
        this.$store.commit('TOGGLE_SCREEN')
      }
    }
  }
</script>
<style>
  .col0 {
    width:0;
    height:0;
    overflow: hidden;
  }
  .col3{
    width:33.33%;
    float:left;
    overflow-y: auto;
  }
  .col3>img{
    width:100%;
  }
  .toggleScreen{
    position:absolute;
    top:0;
    left:0;
  }
  .line{
    padding-top:4rem;
    border-bottom:1px solid #1e2e58;
    margin-bottom:2rem;
  }
  .bgc{
    background: #040c3b;
    color:#fff;
  }
  .title {
    padding:5px 2rem 5px 1rem;
    margin-bottom: 1.2rem;
    background: linear-gradient(#1e2e58,#0A1442);
    position: relative;
  }
  .title span{
    font-size: .8rem;
    color:#90cdd2;
    margin-right: 1rem;
  }
  .title img{
    margin-right:1rem;
    vertical-align: -2px;
  }
  .title .btn-box{
    position: absolute;
    top: 0;
    right: 0;
  }
  .title .btn-box button{
    padding: 5px 10px;
    background: #4a4983;
    color:#fff;
    font-size: .8rem;
    border: none;
    margin-right:1rem;
  }
  .title .btn-box button:last-child{
    margin-right: 0;
  }

  .border{
    border:1px solid #aaa;
  }

  .b-btn-box{
    text-align: center;
    padding:2rem 0;
  }
  .b-btn-box button{
    border:1px solid #1644a6;
    color:#fff;
    font-size: .8rem;
    padding:5px 20px;
    background: transparent;
    margin:0 .9rem;
  }
  .b-btn-box button.green{
    background: #009e11;
  }

</style>
