<template>
  <div class="head">
    <div>
      <img src="./../assets/images/user.png" alt=""><span>Admin</span>
    </div>
    <div>
      <img src="./../assets/images/quit.png" alt=""><span>退出</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Head"
  }
</script>

<style scoped>

  .head{
    position: absolute;
    top:0;
    right:0;
  }
  .head div{
    display: inline-block;
    line-height: 4rem;
    padding-right: 1rem;
    color: #fff;
    /*cursor: pointer;*/
  }
  .head div span{
    padding-left: .5rem;
    font-size: .8rem;
    vertical-align: middle;
  }
</style>