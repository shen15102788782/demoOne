<template>
  <div class="range">
    <img v-if="icon" :src="require(`@/assets/images/state${state}.png`)" alt="">
    <span>{{rangeType.name}}</span>
    <input type="range" step="1" min="0"
           :class="rangeType.className"
           :value="value"
           :style="{backgroundSize: `${value*100/total}% 100%`}"
           :max="total">
    <b>{{value}}</b>
  </div>
</template>

<script>
  export default {
    name: "Range",
    props: {
      total: {
        default: 0
      },
      state: {
        default: 1
      },
      value: {
        default: 0
      },
      icon: {
        default: false
      },
    },

    data () {
      return {
        percent: '1100',
      }
    },
    computed: {
      rangeType () {
        switch (this.state) {
          case 1:
            return {
              name: '在线',
              className: 'online'
            };
          case 2:
            return {
              name: '异常',
              className: 'fault'
            };
          case 3:
            return {
              name: '离线',
              className: 'offline'
            };
          case 4:
            return {
              name: '运维',
              className: 'operation'
            };
        }
      }
    }
  }
</script>

<style scoped>
  .range{
    padding:.5rem;
  }
  .range img{
    margin-right:.5rem;
  }
  .range span{
    display: inline-block;
    font-size: .8rem;
    color:#7796d4;
    margin-right:.5rem;
    vertical-align: -2px;
  }
  .range b{
    float:right;
    font-size: 1rem;
    color:#fff;
    margin-right:.5rem;
  }
  input[type=range] {
    vertical-align: middle;
    -webkit-appearance: none;
    width: 56%;
    height:.8rem;
    border-radius: .4rem; /*这个属性设置使填充进度条时的图形为圆角*/
    /*background: -webkit-linear-gradient(#009E11, #009E11) no-repeat;*/
    /*background-size: 50% 100%;*/
    cursor:pointer;
    padding-left: 0;
  }
  input[type=range].online{
    background: -webkit-linear-gradient(#009E11, #009E11) no-repeat;
  }
  input[type=range].fault{
    background: -webkit-linear-gradient(#f00, #f00) no-repeat;
  }
  input[type=range].offline{
    background: -webkit-linear-gradient(#666, #666) no-repeat;
  }
  input[type=range].operation{
    background: -webkit-linear-gradient(#FDBA3A, #FDBA3A) no-repeat;
  }
  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
  }
  input[type=range]::-webkit-slider-runnable-track {
    height: .8rem;
    border-radius: .4rem; /*将轨道设为圆角的*/
    /*box-shadow: 0 1px 1px #def3f8, inset 0 .125em .125em #0d1112; !*轨道内置阴影效果*!*/
    border:1px solid rgba(199,199,199,.6);
  }
  input[type=range]:focus {
    outline: none;
  }
  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    display: none;
  }


</style>