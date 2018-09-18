<template>
  <div>
    <p class="line"></p>
    <div class="top">
      <div class="title">
        <img src="./../assets/images/titleIcon.png" alt=""><span>设备控制</span>
      </div>
    </div>
    <div class="control-box border">
      <div class="control-title">
        <img src="./../assets/images/equipment/control.png" alt=""><span>控一</span>
      </div>
      <div>
        <div class="contentItem contentManual">
          <div>
            <input type="radio" name="controlType" id="manual" value="0" v-model="controlType"><label for="manual">手动开关</label>
          </div>
          <div class="manual-box">
            <span>
              <input type="radio" name="manual" :value="1" id="open" v-model="Currentonoff"><label for="open">开</label>
            </span>
            <span>
              <input type="radio"  name="manual" :value="0" id="close" v-model="Currentonoff"><label for="close">关</label>
            </span>
          </div>
          <div>
            <button class="clear">清空</button>
          </div>
        </div>
        <div class="contentItem contentAuto">
          <div>
            <input type="radio" name="controlType" id="auto" value="1" v-model="controlType"><label for="auto">自动开关</label>
          </div>
          <div class="time-box">
            <TimePicker class="timePicker" v-model="DeviceOpenTime" format="HH:mm" :clearable="false" placeholder="开启时间"></TimePicker>
            <span>开</span>
            <TimePicker class="timePicker" v-model="DeviceCloseTime" format="HH:mm" :clearable="false" placeholder="关闭时间"></TimePicker>
            <span>关</span>
          </div>
          <div>
            <button class="clear">清空</button>
          </div>
        </div>
        <div class="contentItem contentScheme">
          <div>
            <input type="radio" name="controlType" id="scheme" value="2" v-model="controlType"><label for="scheme">方案选择</label>
          </div>
          <div class="scheme-box">
            <select v-model="ProjectID" @change="GetProjectDetail">
              <option value="">请选择</option>
              <option v-for="Project in ProjectList" :value="Project.ProjectId" :key="Project.ID">{{ Project.Projectname }}</option>
            </select>
            <span v-show="schemeOpenTime1">{{schemeOpenTime1}}开</span>
            <span v-show="schemeCloseTime1">{{schemeCloseTime1}}关</span>
          </div>
          <div>
            <button class="clear">清空</button>
          </div>
        </div>
      </div>
      <div class="b-btn-box">
        <button class="green" @click="save">保存</button>
        <button @click="$router.push('/equipment')">返回</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "equipmentControl",
    data() {
      return {
        GatewayMac: this.$route.params.id,
        controlType: '',                            // 0:手动开关  1:自动开关  2:方案控制
        Currentonoff: 0,
        ProjectID: '',
        ProjectList: [],
        schemeOpenTime1: '',
        schemeCloseTime1: '',
        DeviceOpenTime: '00:00',
        DeviceCloseTime: '00:00'
      }
    },
    created () {
      this.GetDeviceOnOffDetail()
      this.GetProjectList()
    },
    methods: {
      // 获取三控状态信息
      GetDeviceOnOffDetail () {
        console.log(this.GatewayMac)
        this.$axios.post(this.rootUrl + 'GetDeviceOnOffDetail', {'obj': '{"deviceMac":"' + this.GatewayMac + '"}'})
          .then(res => {
            // 处理成功的结果
            const _result = res.data
            console.log(_result)
            if (_result.GetDeviceOnOffDetailResult.RecordStatus == 0) {
              alert(_result.GetDeviceOnOffDetailResult.RecordRemark)
              return
            }
            if (!_result.GetDeviceOnOffDetailResult.RecordDetail.length) {
              return
            }

            this.Currentonoff = _result.GetDeviceOnOffDetailResult.RecordDetail[0].Currentonoff
            // this.Currentonoff = Boolean(_result.GetDeviceOnOffDetailResult.RecordDetail[0].Currentonoff)
            this.ProjectID = _result.GetDeviceOnOffDetailResult.RecordDetail[0].ProjectID
            this.DeviceOpenTime = _result.GetDeviceOnOffDetailResult.RecordDetail[0].DeviceOpenTime
            this.DeviceCloseTime = _result.GetDeviceOnOffDetailResult.RecordDetail[0].DeviceCloseTime
          })
          .catch(res => {
            // 处理失败的结果
            console.log(res)
          })
      },

      // 获取方案列表信息
      GetProjectList () {
        this.$axios.post(this.rootUrl + 'GetProjectList', {'obj': '{"PageIndex":1,"PageSize":99999,"Coustomers":"","Type":1}'})
          .then(res => {
            // 处理成功的结果
            const _result = res.data
            console.log(_result)
            if (_result.GetProjectListResult.RecordStatus == 1) {
              this.ProjectList = _result.GetProjectListResult.RecordDetail
            } else {
              console.log(_result.GetProjectListResult.RecordRemark)
            }
          })
          .catch(res => {
            // 处理失败的结果
            console.log(res)
          })
      },

      // 获取方案详情
      GetProjectDetail () {
        console.log(this.ProjectID)
        if(!this.ProjectID){return}
        this.$axios.post(this.rootUrl + 'GetProjectDetail', {'obj': '{"Projectid":"'+this.ProjectID+'"}'})
          .then(res => {
            // 处理成功的结果
            const _result = res.data
            console.log(_result)
            if (_result.GetProjectDetailResult.RecordStatus == 1) {
              this.schemeOpenTime1 = _result.GetProjectDetailResult.RecordDetail[0].ProjectParameterList[0].Time
              this.schemeCloseTime1 = _result.GetProjectDetailResult.RecordDetail[0].ProjectParameterList[0].CloseTime
            } else {
              alert(_result.GetProjectListResult.RecordRemark)
            }
          })
          .catch(res => {
            // 处理失败的结果
            console.log(res)
          })
      },

      // 手动开关控制
      SetDeviceOnOff () {
        this.$axios.post(this.rootUrl + 'SetDeviceOnOff', {'obj': '{"DeviceMac":"' + this.GatewayMac + '","KongNum":"1","OperationType":"'+this.Currentonoff+'"}'})
          .then(res => {
            // 处理成功的结果
            const _result = res.data
            console.log(_result)
            if (_result.SetDeviceOnOffResult.RecordStatus != 1) {
              this.$alert(_result.SetDeviceOnOffResult.RecordRemark)
            }
          })
          .catch(res => {
            // 处理失败的结果
            console.log(res)
          })
      },

      // 定时开关控制
      EditDeviceGateWayOn (type) {

        let OpenTime = ''
        let CloseTime = ''
        // type:    0:自动调光  1:方案调光
        if (!type) {
          // 自动调光
          this.ProjectID = ''
          OpenTime = this.DeviceOpenTime
          CloseTime = this.DeviceCloseTime
        } else if (!this.ProjectID) {
          // 自动调光单没有选择方案ID
          this.$alert('请选择方案')
          return
        } else {
          OpenTime = this.schemeOpenTime1
          CloseTime = this.schemeCloseTime1
        }

        this.$axios.post(this.rootUrl + 'EditDeviceGateWayOn', {
          'obj': `{"DeviceMac":"${this.GatewayMac}","Deviceopentime1":"${OpenTime}","Deviceclosetime1":"${CloseTime}","Deviceopentime2":"","Deviceopentime3":"","Deviceclosetime2":"","Deviceclosetime3":"","ProjectID":"${this.ProjectID}","ProjectIDB":"","ProjectIDC":"","open_device_sunset":"0","open_device_sunsetB":"0","open_device_sunsetC":"0"}`
        })
          .then(res => {
            // 处理成功的结果
            const _result = res.data
            console.log(_result)
            this.$alert(_result.EditDeviceGateWayOnResult.RecordRemark)
          })
          .catch(res => {
            // 处理失败的结果
            console.log(res)
          })
      },

      // 保存
      save() {
        console.log(this.controlType)
        if (!this.controlType) {
          this.$alert('请勾选控制类型')
          return
        }
        switch (this.controlType) {
          case '0':
            this.SetDeviceOnOff()
            break
          case '1':
            this.EditDeviceGateWayOn(0)
            break
          case '2':
            this.EditDeviceGateWayOn(1)
            break
        }
        // this.$router.push('/equipment')
      }
    },
  }
</script>

<style scoped>
  .control-box{
    padding:2rem;
  }
  .control-title{
    font-size: 1.4rem;
    color: #90cdd2;
    margin-bottom: 5rem;
  }
  .control-title>img{
    margin-right: 1rem;
  }
  .contentItem{
    margin-bottom: 3rem;
  }
  .contentItem>div{
    float:left;
  }
  .contentItem>div:nth-child(1){
    font-size:.9rem;
    width:30%;
  }
  .contentItem>div:nth-child(2){
    width:40%;
  }
  .contentItem>div:nth-child(3){
    width:30%;
  }
  .contentItem select{
    width:10rem;
    height:1.6rem;
    font-size: .8rem;
    background-position-x: 98%;
    margin-bottom: 1rem;
    margin-right: 2rem;
  }
  .manual-box label{
    padding: 0 4rem 0 .5rem;
    font-size: 1rem;
  }

  .time-box>span{
    margin: 0 2rem 0 1rem;
    font-size: 1rem;
    vertical-align: -3px;
  }
  .scheme-box span{
    margin:0 1rem;
    font-size: 1rem;
  }
  .clear{
    float: right;
    background:#4a4983;
    border:none;
    color: #fff;
    font-size: .8rem;
    height:1.6rem;
    width:3.6rem;
    margin: 0 8px;
    cursor: pointer;
  }
</style>