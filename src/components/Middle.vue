<template>
  <!--<div :class="{col3 : $store.state.IsThreeScreen}" :style="{height: screenHeight + 'px'}" class="plan bgc">-->
  <div :class="$store.state.IsThreeScreen ? 'col3' : 'col0'" :style="{height: $store.state.IsThreeScreen ?(screenHeight + 'px'):0}" class="plan bgc">
    <h1 class="top">机场平面点位图</h1>
    <div :style="{height: screenHeight - 120 + 'px'}" class="content">
      <div>
        <img src="./../assets/images/plan/T1.png" alt="" class="T1">
        <span v-for="device in deviceData" :key="device.id" :style="{left: device.left,top: device.top}">
          <img :src="require(`@/assets/images/plan/${device.type}.png`)" alt="">
        </span>
        <div class="floor">
          <div>
            某机场
          </div>
          <div>
            T1
          </div>
          <div>
            F1
          </div>
        </div>
        <ul class="tip">
          <li>
            <p><img src="./../assets/images/plan/1.png" alt=""></p><span>环幕电视</span>
          </li>
          <li>
            <p><img src="./../assets/images/plan/0.png" alt=""></p><span>灯箱</span>
          </li>
          <li>
            <p><img src="./../assets/images/plan/2.png" alt=""></p><span>展位</span>
          </li>
        </ul>
        <div class="fx">
          <img src="./../assets/images/plan/fx.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Middle",
    data () {
      return {
        screenHeight: window.innerHeight,
        deviceData: [
          {
            id: '0001',
            type: 1,          // 0:灯箱 1:环幕电视 2:展位
            left: '3.4%',
            top: '1.2%'
          },
          {
            id: '0002',
            type: 1,
            left: '3.4%',
            top: '15.2%'
          },
          {
            id: '0003',
            type: 0,
            left: '0.5%',
            top: '8.6%'
          },
          {
            id: '0004',
            type: 0,
            left: '7.4%',
            top: '8.6%'
          },
          {
            id: '0005',
            type: 1,
            left: '3.5%',
            top: '22.2%'
          },
          {
            id: '0006',
            type: 2,
            left: '4.8%',
            top: '28.2%'
          },
          {
            id: '0007',
            type: 2,
            left: '5.8%',
            top: '38%'
          },
          {
            id: '0008',
            type:2,
            left: '8%',
            top: '47.2%'
          },
          {
            id: '0009',
            type: 2,
            left: '6%',
            top: '56.5%'
          },
          {
            id: '0010',
            type: 2,
            left: '5%',
            top: '63.2%'
          },
          {
            id: '0011',
            type: 1,
            left: '3.5%',
            top: '68.2%'
          },
          {
            id: '0012',
            type: 1,
            left: '3.5%',
            top: '74.5%'
          },
          {
            id: '0013',
            type: 0,
            left: '0.5%',
            top: '81.5%'
          },
          {
            id: '0014',
            type: 0,
            left: '7.5%',
            top: '81.5%'
          },
          {
            id: '0015',
            type: 1,
            left: '3.5%',
            top: '91.5%'
          },
          {
            id: '0016',
            type: 1,
            left: '14.5%',
            top: '43.5%'
          },
          {
            id: '0017',
            type: 0,
            left: '14.5%',
            top: '53%'
          },
          {
            id: '0018',
            type: 2,
            left: '18.5%',
            top: '52%'
          },
          {
            id: '0019',
            type: 0,
            left: '22.5%',
            top: '53%'
          },
          {
            id: '0020',
            type: 0,
            left: '22.5%',
            top: '43.5%'
          },
          {
            id: '0021',
            type: 2,
            left: '27.5%',
            top: '43.5%'
          },
          {
            id: '0022',
            type: 1,
            left: '32.5%',
            top: '43.5%'
          },
          {
            id: '0023',
            type: 0,
            left: '38.5%',
            top: '43.5%'
          },
          {
            id: '0024',
            type: 2,
            left: '44.5%',
            top: '43.5%'
          },
          {
            id: '0025',
            type: 1,
            left: '50.5%',
            top: '43.5%'
          },
          {
            id: '0026',
            type: 0,
            left: '56.5%',
            top: '43.5%'
          },
          {
            id: '0027',
            type: 2,
            left: '62.5%',
            top: '43.5%'
          },
          {
            id: '0028',
            type: 1,
            left: '68.5%',
            top: '43.5%'
          },
          {
            id: '0029',
            type: 0,
            left: '74.5%',
            top: '43.5%'
          },
          {
            id: '0030',
            type: 2,
            left: '79.5%',
            top: '43.5%'
          },
          {
            id: '0031',
            type: 1,
            left: '83.5%',
            top: '43.5%'
          },
          {
            id: '0032',
            type: 0,
            left: '75.5%',
            top: '52.5%'
          },
          {
            id: '0033',
            type: 2,
            left: '79.5%',
            top: '52.5%'
          },
          {
            id: '0034',
            type: 0,
            left: '84.5%',
            top: '52.5%'
          },
          {
            id: '0035',
            type: 0,
            left: '30%',
            top: '66.5%'
          },
          {
            id: '0036',
            type: 0,
            left: '67.5%',
            top: '66.5%'
          },
          {
            id: '0037',
            type: 1,          // 0:灯箱 1:环幕电视 2:展位
            left: '93.6%',
            top: '1.2%'
          },
          {
            id: '0038',
            type: 1,
            left: '93.6%',
            top: '15.2%'
          },
          {
            id: '0039',
            type: 0,
            left: '97.5%',
            top: '8.6%'
          },
          {
            id: '0040',
            type: 0,
            left: '90.6%',
            top: '8.6%'
          },
          {
            id: '0041',
            type: 1,
            left: '93.5%',
            top: '22.2%'
          },
          {
            id: '0042',
            type: 2,
            left: '93.2%',
            top: '28.2%'
          },
          {
            id: '0043',
            type: 2,
            left: '92.2%',
            top: '38%'
          },
          {
            id: '0044',
            type:2,
            left: '90%',
            top: '47.2%'
          },
          {
            id: '0045',
            type: 2,
            left: '92%',
            top: '56.5%'
          },
          {
            id: '0046',
            type: 2,
            left: '93%',
            top: '63.2%'
          },
          {
            id: '0047',
            type: 1,
            left: '93.8%',
            top: '68.2%'
          },
          {
            id: '0048',
            type: 1,
            left: '93.8%',
            top: '74.5%'
          },
          {
            id: '0049',
            type: 0,
            left: '97.8%',
            top: '81.5%'
          },
          {
            id: '0050',
            type: 0,
            left: '90.8%',
            top: '81.5%'
          },
          {
            id: '0051',
            type: 1,
            left: '93.8%',
            top: '91.5%'
          },
       ]
      }
    },
  }
</script>

<style scoped>
  .top{
    height: 6rem;
    color: #4AADE1;
    font-size: 1.8rem;
    padding-top:1rem;
    text-align: center;
    background: url("./../assets/images/plan/line.png") no-repeat 1px 4rem;
    background-size: contain;
  }
  .content{
    background: url("../assets/images/plan/md_bg.png") no-repeat;
    background-size: contain;
    padding:2rem 4rem;
  }
  .content>div{
    position: relative;
  }
  .content>div>span{
    position: absolute;
    width:2rem;
  }
  .content>div>span img{
    max-width:100%;
  }
  .T1{
    width:100%;
  }
  .tip{
    position: absolute;
    top:20%;
    left:15%;
  }
  .tip li{
    margin-bottom: .5rem;
  }
  .tip p{
    float: left;
    width:2rem;
    height:1rem;
    margin-right:.5rem;
    text-align: center;
  }
  .tip img{
    height: 100%;
  }
  .tip span{
    font-size: .8rem;
  }
  .fx{
    position: absolute;
    top:20%;
    right:15%;
  }
  .floor{
    width:30.15rem;
    height:3.8rem;
    background: url("./../assets/images/plan/title_bg.png") no-repeat;
    position: absolute;
    top:5%;
    left:50%;
    margin-left: -15rem;
    display: flex;
    justify-content: space-around;
  }
  .floor>div{
    text-align: center;
    font-size: 1.3rem;
    line-height: 3.8rem;
    flex: 1;
  }
</style>