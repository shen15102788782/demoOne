<template>
  <ul>
    <li>
      <div>
        <img src="./../assets/images/equipment/online.png" alt=""><span>{{overviewObj.OnlineCount}}</span>
      </div>
      <p>在线设备</p>
    </li>
    <li>
      <div>
        <img src="./../assets/images/equipment/fault.png" alt=""><span>{{overviewObj.FaultCount}}</span>
      </div>
      <p>故障设备</p>
    </li>
    <li>
      <div>
        <img src="./../assets/images/equipment/yw.png" alt=""><span>{{overviewObj.YunWeiCount}}</span>
      </div>
      <p>运维设备</p>
    </li>
    <li>
      <div>
        <img src="./../assets/images/equipment/offline.png" alt=""><span>{{overviewObj.OflineCount}}</span>
      </div>
      <p>离线设备</p>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "EquipOverview",
    props: {
      overviewObj: {
        default: {
          OnlineCount: 0,
          OflineCount: 0,
          FaultCount: 0,
          YunWeiCount: 0,
        }
      }
    },
    data () {
      return {

      }
    }
  }
</script>

<style scoped>

  ul{
    display: flex;
    justify-content: space-around;
  }
  li{
    align-items: center;
  }
  li span{
    font-size: 2.6rem;
    margin-left: 1rem;
    vertical-align: middle;
  }
  li:nth-child(1) span{
    color: #009e12;
  }
  li:nth-child(2) span{
    color: #cf2a28;
  }
  li:nth-child(3) span{
    color: #ffc736;
  }
  li:nth-child(4) span{
    color: #666;
  }
  li p{
    font-size: .8rem;
    color:#fff;
    width: 5.5rem;
    text-align: center;
    padding-top:1rem;
  }
</style>