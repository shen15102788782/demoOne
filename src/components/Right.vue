<template>
  <!--<div :class="$store.state.IsThreeScreen ? 'col3' : 'col0'" class="manage" :style="{height: $store.state.IsThreeScreen ?(screenHeight + 'px'):0}">-->
  <div :class="{col3 : $store.state.IsThreeScreen}" class="manage" :style="{height: screenHeight + 'px'}">
    <div class="manageContent bgc">
      <Head></Head>
      <router-view class="content" :style="{minHeight: screenHeight + 'px'}"></router-view>
    </div>
    <Menu class="menu"></Menu>
    <Message v-show="$store.state.MessageContent"></Message>
  </div>
</template>

<script>
  import Head from './Head'
  import Menu from './Menu'
  import Message from './Message'
  export default {
    name: "Right",
    data () {
      return {
        screenHeight: window.innerHeight,
      }
    },
    components: {
      Head,
      Menu,
      Message,
    }
  }
</script>

<style scoped>
  .manage{
    display: -webkit-flex;
    display: flex;
    align-items: flex-start;
  }
  .content{

  }
  .manageContent{
    position: relative;
    width:100%;
    padding:0 1rem;
  }
</style>