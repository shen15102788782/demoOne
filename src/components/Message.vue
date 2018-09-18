<template>
  <div class="message">
    <p>{{$store.state.MessageContent}}</p>
    <div>
      <button @click="clearMessageContent()">确定</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Message",
    methods: {
      clearMessageContent () {
        this.$store.commit('SET_MESSAGE','')
      }
    }
  }
</script>

<style scoped>
  .message{
    width:15rem;
    height:8rem;
    position: absolute;
    top:30%;
    left:50%;
    margin-left:-7.5rem;
    border:1px solid #fff;
    border-radius: 6px;
    background: #0F2358;
    z-index: 1000;
  }
  .message p{
    text-align: center;
    padding-top:2.5rem;
    font-size: .9rem;
    width:100%;
    height:5.5rem;
    color:#fff;
  }
  .message div{
    text-align: center;
  }
  .message div button{
    font-size: .7rem;
    color:#fff;
    background: #5896FD;
    border: none;
    padding:5px 1rem;
  }

</style>