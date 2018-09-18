<template>
  <div id="equipmentDetail">
    <p class="line"></p>
    <div class="top">
      <div class="title">
        <img src="./../assets/images/titleIcon.png" alt=""><span>{{GatewayMac?'设备详情':'添加设备'}}</span>
      </div>
    </div>

    <!--基础信息-->
    <div class="base">
      <div class="title">
        <img src="./../assets/images/titleIcon.png" alt=""><span>基础信息</span>
      </div>
      <p>测试的东西</p>
      <div class="content">
        <div class="listItem">
                <p>
                  <span class="label">mac</span>
                  <span class="val">38fffagjlajdgjaldg</span>
                </p>
                <div class="selectBox">
                  <span class="label">分类</span>
                  <select name="">
                    <option class="option" value="">T1</option>
                    <option value="">T2</option>
                    <option value="">T3</option>
                  </select>
                </div>
                <p>
                  <span class="label">机场</span>
                  <input class="smallInput" type="text" value="">
                </p>
              </div>
        <div class="listItem">
          <p>
            <span class="label">mac</span>
            <span class="val">38fffagjlajdgjaldg</span>
          </p>
          <div class="selectBox">
            <span class="label">分类</span>
            <select name="">
              <option class="option" value="">T1</option>
              <option value="">T2</option>
              <option value="">T3</option>
            </select>
          </div>
          <p>
            <span class="label">机场</span>
            <input class="smallInput" type="text" value="">
          </p>
        </div>
        <div class="listItem">
          <p>
            <span class="label">mac</span>
            <span class="val">38fffagjlajdgjaldg</span>
          </p>
          <div class="selectBox">
            <span class="label">分类</span>
            <select name="">
              <option class="option" value="">T1</option>
              <option value="">T2</option>
              <option value="">T3</option>
            </select>
          </div>
          <p>
            <span class="label">机场</span>
            <input class="smallInput" type="text" value="">
          </p>
        </div>
        <div class="listItem">
          <p>
            <span class="label">mac</span>
            <span class="val">38fffagjlajdgjaldg</span>
          </p>
          <div class="selectBox">
            <span class="label">分类</span>
            <select name="">
              <option class="option" value="">T1</option>
              <option value="">T2</option>
              <option value="">T3</option>
            </select>
          </div>
          <p>
            <span class="label">机场</span>
            <input class="smallInput" type="text" value="">
          </p>
        </div>
      </div>
    </div>

    <!--数据信息-->
    <div class="data">
      <div class="title">
        <img src="./../assets/images/titleIcon.png" alt=""><span>数据信息</span>
      </div>
    </div>

    <!--阈值信息-->
    <div>
      <div class="title">
        <img src="./../assets/images/titleIcon.png" alt=""><span>阈值信息</span>
      </div>
    </div>

    <!--落地信息-->
    <div>
      <div class="title">
        <img src="./../assets/images/titleIcon.png" alt=""><span>落地信息</span>
      </div>
    </div>

    <!--地理信息-->
    <div>
      <div class="title">
        <img src="./../assets/images/titleIcon.png" alt=""><span>地理信息</span>
      </div>
    </div>

    <!--添加节点/分组-->
    <div>
      <ul>
        <li>
          <img src="" alt=""><span>添加节点</span>
        </li>
        <li>
          <img src="" alt=""><span>添加分组</span>
        </li>
      </ul>
    </div>

    <!--节点列表-->
    <div>
      <div class="title">
        <img src="./../assets/images/titleIcon.png" alt=""><span>节点信息</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "equipmentDetail",
    data () {
      return {
        GatewayMac: this.$route.params.id || ''
      }
    },
    created () {
      this.GatewayMac && this.GetDeviceGateWayDetailApp(this.GatewayMac)
    },
    computed: {
    },
    methods: {
      GetDeviceGateWayDetailApp (getwayMac) {
        const obj = {
          "getwayMac": getwayMac
        }
        this.$axios.post(this.rootUrl + 'GetDeviceGateWayDetailApp', {'obj': JSON.stringify(obj)})
          .then(res => {
            // 处理成功的结果
            const _result = res.data
            console.log(_result)
            // if (_result.GetDevicesListResult.RecordStatus === '1') {
            //   this.equipmentList = _result.GetDevicesListResult.RecordDetail
            // } else {
            //   alert(_result.UserLoginResult.RecordRemark)
            // }
          })
          .catch(res => {
            // 处理失败的结果
            console.log(res)
          })
      }
    },
  }
</script>

<style scoped>
  #equipmentDetail .content{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin:1rem;
  }
  #equipmentDetail .selectBox{
    height:5rem;
    margin:1rem 0;
  }
  #equipmentDetail .selectBox select{
    width: 8rem;
    margin-right: 1rem;
    font-size: .7rem;
    height: 1.6rem;
  }
  #equipmentDetail .label{
    display: inline-block;
    width:3rem;
    color:#90cdd2;
    line-height:1.6rem;
    font-size:.8rem;
  }
  #equipmentDetail .content .val{
    font-size:.7rem;
    color:#fff;
    line-height:1.6rem;
  }
  #equipmentDetail .smallInput{
    width:11.6rem;
    height:1.6rem;
    line-height:1.6rem;
    font-size:.7rem;
  }
</style>