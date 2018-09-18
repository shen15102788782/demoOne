<template>
  <div>
    <p class="line"></p>

    <div class="top">
      <div class="title">
        <img src="./../assets/images/titleIcon.png" alt=""><span>设备状态</span>
        <img src="./../assets/images/equipment/list.png" alt="">
        <img src="./../assets/images/equipment/pm.png" alt="">
        <div class="btn-box">
          <!--<button>添加设备</button>-->
          <router-link :to="{ name: 'equipmentDetail'}" tag="button">添加设备</router-link>
        </div>
      </div>
      <EquipOverview :overviewObj="overviewObj"></EquipOverview>
    </div>

    <div class="bottom">
      <div class="title">
        <img src="./../assets/images/titleIcon.png" alt=""><span>设备列表</span>
      </div>

      <div class="bottom-content">
        <ul>
          <li :class="{active: equipClass===1}" @click="toggleEquipClass(1)">灯箱类</li>
          <li :class="{active: equipClass===2}" @click="toggleEquipClass(2)">电子类</li>
          <li :class="{active: equipClass===3}" @click="toggleEquipClass(3)">高立柱</li>
        </ul>
        <div class="selectBox">
          <select name="">
            <option class="option" value="">T1</option>
            <option value="">T2</option>
            <option value="">T3</option>
          </select>
          <select name="">
            <option value="">B1</option>
            <option value="">F1</option>
            <option value="">F2</option>
            <option value="">F3</option>
          </select>
          <select name="">
            <option value="">全部</option>
            <option value="">在线</option>
            <option value="">故障</option>
            <option value="">运维</option>
            <option value="">离线</option>
          </select>
          <input class="search" type="text" placeholder="请输入关键字搜索">
          <button>搜索</button>
          <button class="o-btn" @click="jumpTo('/equipment/equipmentDetail/')">详情</button>
          <button class="o-btn" v-show="equipClass===1 || equipClass===2" @click="jumpTo('/equipment/equipmentControl/')">控制</button>
          <button class="o-btn" v-show="equipClass===1" @click="jumpTo('/equipment/equipmentDimming/')">调光</button>
          <button class="o-btn" v-show="equipClass===3">入侵</button>
          <button class="o-btn" v-show="equipClass===3">位移</button>
          <button class="o-btn">能耗</button>
          <button class="o-btn">重启</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>设备编号</th>
              <th>设备名称</th>
              <th>安装日期</th>
              <th>航站楼</th>
              <th>楼层</th>
              <th>工作状态</th>
            </tr>
          </thead>
          <tbody>
            <tr
                v-for="equipment in equipmentList"
                :key="equipment.id"
                :class="{active: GatewayMac === equipment.GatewayMac}"
                @click="choiceEquip(equipment.GatewayMac)">
              <td>{{equipment.DevicesNum}}</td>
              <td>{{equipment.DevicesName}}</td>
              <td>{{equipment.AnzhuangDate}}</td>
              <td>{{equipment.DeviceLocalType}}</td>
              <td>{{equipment.DeviceFloor}}</td>
              <td><img :src="require(`@/assets/images/state${equipment.DeviceStatus}.png`)" alt=""></td>

            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import EquipOverview from './../components/EquipOverview'
  export default {
    name: "equipment",
    data () {
      return {
        equipClass: 1,
        GatewayMac: '',
        equipmentList:[],
        overviewObj: {                              // 设备状态统计数据
          OnlineCount: 0,
          OflineCount: 0,
          FaultCount: 0,
          YunWeiCount: 0,
        }
      }
    },
    components: {
      EquipOverview,
    },
    created () {
      this.GetDevicesList()
      // this.GetIndexInfoAndCount()
    },
    methods: {

      // 获取设备在线离线数量
      GetIndexInfoAndCount() {
        const obj = {
          "UserNum": "001"
        }
        this.$axios.post(this.rootUrl + 'GetIndexInfoAndCount', {'obj': JSON.stringify(obj)})
          .then(res => {
            // 处理成功的结果
            const _result = res.data
            console.log(_result)
            if (_result.GetIndexInfoAndCountResult.RecordStatus === '1') {
              this.overviewObj.OnlineCount = _result.GetIndexInfoAndCountResult.RecordDetail
            } else {
              alert(_result.GetIndexInfoAndCountResult.RecordRemark)
            }
          })
          .catch(res => {
            // 处理失败的结果
            console.log(res)
          })
      },

      // 获取设备列表
      GetDevicesList () {
        const obj = {
          "UserNum": "001",   //用户编号
          "deviceNum": "",    //设备编号
          "unitNum": "",      //单位编号
          "locate": "",       //区域
          "PageIndex": 1,
          "PageSize": 50 ,
          "DeviceFloor":"0",   //1是F12是F2 3是D3   传0是全部
          "Localtype":"0",     //1是T1 2是T2 3是T3 传0是全部
          "Keywords" :"",     //搜索关键字
          "Status" :-1         //    在线设备 = 1, 全部-1        异常设备 = 2,          离线设备 = 3        运维设备=4
        }
        this.$axios.post(this.rootUrl + 'GetDevicesList', {'obj': JSON.stringify(obj)})
          .then(res => {
            // 处理成功的结果
            const _result = res.data
            console.log(_result)
            if (_result.GetDevicesListResult.RecordStatus === '1') {
              this.overviewObj.OnlineCount = _result.GetDevicesListResult.OnlineCount
              this.overviewObj.FaultCount = _result.GetDevicesListResult.FaultCount
              this.overviewObj.OflineCount = _result.GetDevicesListResult.OflineCount
              this.overviewObj.YunWeiCount = _result.GetDevicesListResult.YunWeiCount
              this.equipmentList = _result.GetDevicesListResult.RecordDetail
            } else {
              this.$alert(_result.GetDevicesListResult.RecordRemark)
            }
          })
          .catch(res => {
            // 处理失败的结果
            console.log(res)
          })
      },

      // 切换设备类型
      toggleEquipClass (equipClass) {
        this.equipClass = equipClass
      },

      // 跳转子页面
      jumpTo(path) {
        if(!this.GatewayMac){
          this.$alert('请选择需要操作的设备')
          return
        }
        this.$router.push(path+this.GatewayMac)
      },

      // 选中设备
      choiceEquip(id) {
        this.GatewayMac = id
      }
    }
  }
</script>

<style scoped>
  .top{
    margin-bottom: 1.8rem;
  }
  .bottom-content{
    padding-left:1rem;
  }
  .bottom-content ul{
    overflow: hidden;
    border-bottom: 1px solid #17388F;
    margin-bottom:1.3rem;
  }
  .bottom-content li{
    float: left;
    color:#94aeed;
    font-size: .8rem;
    width: 110px;
    height:34px;
    line-height:34px;
    text-align: center;
    transform: translateY(3px);
    cursor: pointer;
  }
  .bottom-content li.active{
    color:#fff;
    background: url("./../assets/images/equipment/bg.png");
    background-size: contain;
    cursor: default;
  }
  table{
    width:100%;
  }
  th{
    height:1.4rem;
    color:#94aeed;
    font-size: .7rem;
    padding-left:1rem;
  }
  thead tr{
    background: #17388F;
  }
  tbody tr{
    background: #0f2359;
    cursor: pointer;
  }
  td{
    height:2rem;
    color:#fff;
    font-size: .7rem;
    padding-left:1rem;
  }
  tbody tr.active,
  tbody tr:hover{
    background: #1a3a70;
  }
  tbody tr.active{
    border:1px solid #4a77f1;
  }
  .selectBox{
    margin-bottom: 1rem;
  }
  .selectBox select{
    width: 8rem;
    margin-right:1rem;
    font-size: .7rem;
    height:1.8rem;
  }
  input.search{
    height:1.8rem;
    font-size: .7rem;
    padding-left: 30px;
    background: url('./../assets/images/search.png') no-repeat 5px 11px ;
  }

  input.search+button{
    background:#4f88f7;
    border:none;
    color: #000;
    font-size: .8rem;
    height:1.8rem;
    width:3.2rem;
    margin-left: 8px;
    margin-right: 2rem;
    vertical-align: -1px;
  }

  .o-btn{
    background:#4a4983;
    border:none;
    color: #fff;
    font-size: .8rem;
    height:1.8rem;
    width:3.6rem;
    margin: 0 8px;
    cursor: pointer;
  }
</style>