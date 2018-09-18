<template>
  <!--<div :class="{col3 : $store.state.IsThreeScreen}" :style="{height: screenHeight + 'px'}">-->
  <div :class="$store.state.IsThreeScreen ? 'col3' : 'col0'" :style="{height: $store.state.IsThreeScreen ?(screenHeight + 'px'):0}">
    <p class="line"></p>
    <div class="overview-top">
      <div class="lf chartOne">
        <div class="title">
          <img src="./../assets/images/titleIcon.png" alt=""><span>设备状态</span>
        </div>
        <div class="overview-top-content chart" id="chartOne"></div>
      </div>
      <div class="lf chartTwo">
        <div class="title">
          <img src="./../assets/images/titleIcon.png" alt=""><span>设备状态</span>
        </div>
        <div class="overview-top-content border chart" id="chartTwo">
          <h2>总计 <span>1200</span></h2>
          <Range :icon="true" :total="1200" :state="1" :value="1100"></Range>
          <Range :icon="true" :total="1200" :state="2" :value="50"></Range>
          <Range :icon="true" :total="1200" :state="3" :value="30"></Range>
          <Range :icon="true" :total="1200" :state="4" :value="20"></Range>
        </div>
      </div>
      <div class="lf chartThree">
        <div class="title">
          <img src="./../assets/images/titleIcon.png" alt=""><span>灯箱类</span>
        </div>
        <div class="overview-top-content border chart">
          <h2>总计 <span>1200</span></h2>
          <Range :icon="false" :total="1200" :state="1" :value="1100"></Range>
          <Range :icon="false" :total="1200" :state="2" :value="50"></Range>
          <Range :icon="false" :total="1200" :state="3" :value="30"></Range>
          <Range :icon="false" :total="1200" :state="4" :value="20"></Range>
        </div>
      </div>
      <div class="lf chartFour">
        <div class="title">
          <img src="./../assets/images/titleIcon.png" alt=""><span>电子类</span>
        </div>
        <div class="overview-top-content border chart">
          <h2>总计 <span>1200</span></h2>
          <Range :icon="false" :total="1200" :state="1" :value="1100"></Range>
          <Range :icon="false" :total="1200" :state="2" :value="50"></Range>
          <Range :icon="false" :total="1200" :state="3" :value="30"></Range>
          <Range :icon="false" :total="1200" :state="4" :value="20"></Range>
        </div>
      </div>
      <div class="lf chartFive">
        <div class="title">
          <img src="./../assets/images/titleIcon.png" alt=""><span>高立柱</span>
        </div>
        <div class="overview-top-content border chart">
          <h2>总计 <span>1200</span></h2>
          <Range :icon="false" :total="1200" :state="1" :value="1100"></Range>
          <Range :icon="false" :total="1200" :state="2" :value="50"></Range>
          <Range :icon="false" :total="1200" :state="3" :value="30"></Range>
          <Range :icon="false" :total="1200" :state="4" :value="20"></Range>
        </div>
      </div>
    </div>

    <div class="overview-middle">
      <!--能耗报表-->
      <div class="energy">
        <div class="title">
          <img src="./../assets/images/titleIcon.png" alt=""><span>能耗报表</span>
        </div>
        <div class="energyCharts">
          <div id="energyChartOne"></div>
          <div id="energyChartTwo"></div>
        </div>
      </div>

      <!--待办事项-->
      <div class="needed">
        <div class="title">
          <img src="./../assets/images/titleIcon.png" alt=""><span>待办事项</span>
        </div>
        <div class="border">
          <table>
            <tr>
              <td>工程申请</td>
              <td>项目需要进行维修运维维护开启</td>
              <td>2018-09-20</td>
              <td>查看</td>
            </tr>
            <tr>
              <td>工程申请</td>
              <td>项目需要进行维修运维维护开启</td>
              <td>2018-09-20</td>
              <td>查看</td>
            </tr>
            <tr>
              <td>工程申请</td>
              <td>项目需要进行维修运维维护开启</td>
              <td>2018-09-20</td>
              <td>查看</td>
            </tr>
            <tr>
              <td>工程申请</td>
              <td>项目需要进行维修运维维护开启</td>
              <td>2018-09-20</td>
              <td>查看</td>
            </tr>
          </table>
        </div>
      </div>

    </div>

    <div class="overview-bottom">
      <div class="title">
        <img src="./../assets/images/titleIcon.png" alt=""><span>故障报警</span>
      </div>

      <div class="bottom-content">
        <div class="fault-box">
          <div class="fault">
            <div class="fault-top">
              <div>
                <h3>灯箱类</h3>
                <p>运行正常</p>
              </div>
              <div>
                <img src="./../assets/images/equipment/dx.png" alt="">
              </div>
            </div>
            <ul>
              <li>
                <span>sdn112233456</span>
                <b>30%</b>
                <em>亮度至</em>
              </li>
              <li>
                <span>sdn112233456</span>
                <b>30%</b>
                <em>亮度至</em>
              </li>
            </ul>
          </div>
          <div class="fault">
            <div class="fault-top">
              <div>
                <h3>电子类</h3>
                <p>运行正常</p>
              </div>
              <div>
                <img src="./../assets/images/equipment/dz.png" alt="">
              </div>
            </div>
            <ul>
              <li>
                <span>sdn112233456</span>
                <b>30%</b>
                <em>亮度至</em>
              </li>
              <li>
                <span>sdn112233456</span>
                <b>30%</b>
                <em>亮度至</em>
              </li>
            </ul>
          </div>
          <div class="fault">
            <div class="fault-top">
              <div>
                <h3>高立柱</h3>
                <p>运行正常</p>
              </div>
              <div>
                <img src="./../assets/images/equipment/glz.png" alt="">
              </div>
            </div>
            <ul>
              <li>
                <span>sdn112233456</span>
                <b>30%</b>
                <em>亮度至</em>
              </li>
              <li>
                <span>sdn112233456</span>
                <b>30%</b>
                <em>亮度至</em>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <EquipOverview :overviewObj="overviewObj"></EquipOverview>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Range from './Range'
  import EquipOverview from './EquipOverview'
  export default {
    name: "Left",
    data () {
      return {
        screenHeight: window.innerHeight,
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
      Range,
    },
    mounted(){
      this.drawEquipmentStateOne();
      this.drawEnergyChartOne();
      this.drawEnergyChartTwo();
    },
    methods: {
      drawEquipmentStateOne(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('chartOne'))
        let option = {
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          calculable : true,
          series : [
            {
              name:'设备状态',
              type:'pie',
              radius : ['20%','75%'],
              center : ['50%', '50%'],
              roseType : 'radius',
              x: '50%',               // for funnel
              max: 40,                // for funnel
              sort : 'ascending',     // for funnel
              data:[
                {value:12, name:'在线',itemStyle:{color: '#009E11'}},
                {value:15, name:'故障',itemStyle:{color: '#f00'}},
                {value:10, name:'离线',itemStyle:{color: '#666'}},
                {value:20, name:'运维',itemStyle:{color: '#FDBA3A'}},
              ]
            }
          ]
        };

        // 绘制图表
        myChart.setOption(option);
      },
      drawEnergyChartOne(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('energyChartOne'))
        let option = {
          color: ['#08b3b3'],
          title: {
            // text: '每日能耗(近一月)'
          },
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '10px',
            containLabel: true
          },
          xAxis : [
            {
              type : 'category',
              axisLabel : {
                color: '#fff'
              },
              splitLine: {
                lineStyle: {
                  color: '#0F1843'
                }
              },
              // data : TotalTime,
              data : ['2017-04-01','2017-04-02','2017-04-03','2017-04-04','2017-04-05','2017-04-06','2017-04-07','2017-04-08','2017-04-09','2017-04-10','2017-04-11','2017-04-12','2017-04-13','2017-04-14','2017-04-15','2017-04-16','2017-04-17','2017-04-18','2017-04-19','2017-04-20','2017-04-21','2017-04-22','2017-04-23','2017-04-24','2017-04-25','2017-04-26','2017-04-27','2017-04-28','2017-04-29','2017-4-30'],
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis : [
            {
              type : 'value',
              axisLabel : {
                color: '#fff'
              },
              splitLine: {
                lineStyle: {
                  color: '#0F1843'
                }
              }
            }
          ],
          series : [
            {
              name:'能耗',
              type:'bar',
              barWidth: '60%',
              // data:TotalEnergy
              data:[10,15,8,14,30,10,15,8,14,30,10,15,8,14,30,10,15,8,14,30,10,15,1,14,30,10,15,45,14,2]
            }
          ]
        };

        // 绘制图表
        myChart.setOption(option);
      },
      drawEnergyChartTwo(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('energyChartTwo'))
        let option = {
          title : {
            // text: '标题',
            // subtext: '二级标题'
          },
          tooltip : {
            trigger: 'axis'
          },
          calculable : true,
          grid: {
            left: '5%',
            right: '4%',
            bottom: '3%',
            top: '10px',
            containLabel: true
          },
          xAxis : [
            {
              type : 'category',
              axisLabel : {
                color: '#fff'
              },
              splitLine: {
                lineStyle: {
                  color: '#0F1843'
                }
              },
              boundaryGap : false,
              data : ['2017-04-01','2017-04-02','2017-04-03','2017-04-04','2017-04-05','2017-04-06','2017-04-07','2017-04-08','2017-04-09','2017-04-10','2017-04-11','2017-04-12','2017-04-13','2017-04-14','2017-04-15','2017-04-16','2017-04-17','2017-04-18','2017-04-19','2017-04-20','2017-04-21','2017-04-22','2017-04-23','2017-04-24','2017-04-25','2017-04-26','2017-04-27','2017-04-28','2017-04-29','2017-4-30'],
            }
          ],
          yAxis : [
            {
              type : 'value',
              axisLabel : {
                color: '#fff'
              },
              splitLine: {
                lineStyle: {
                  color: '#0F1843'
                }
              },
            }
          ],
          series : [
            {
              name:'能耗',
              type:'line',
              smooth:false,
              itemStyle: {
                color: 'rgba(200,81,158,.5)',
              },
              areaStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0, color: 'rgba(200,81,158,1)' // 0% 处的颜色
                  }, {
                    offset: 1, color: 'rgba(200,81,158,.1)' // 100% 处的颜色
                  }],
                }
              },
              data:[40,55,58,44,30,50,15,18,14,30,10,15,18,14,30,10,15,8,14,30,10,15,1,14,30,10,15,45,14,2]
            }
          ]
        };

        // 绘制图表
        myChart.setOption(option);
      },
    }

  }
</script>

<style scoped>
  .overview-top{
    margin-bottom: 2rem;
  }
  .overview-top>div{
    margin:0 1%;
  }
  .overview-top-content h2{
    font-size: 1rem;
    color:#bbd2ff;
    text-align: center;
  }
  .overview-top-content h2 span{
    font-size: 2rem;
    color:#fff;
  }
  .chartOne,
  .chartTwo{
    width:21%;
  }
  .chartThree,
  .chartFour,
  .chartFive{
    width:16%;
  }
  .chart{
    width:100%;
    height:12rem;
  }
  .overview-middle,.overview-bottom{
    padding:0 1rem 2rem;
  }
  .overview-middle>div{
    float: left;
  }
  .energy{
    width:45%;
    margin-right: 2%;
  }
  .energyCharts>div{
    width:50%;
    float: left;
    height:8rem;
  }
  .needed{
    width:53%;
  }
  .needed table{
    width:100%;
    color:#7796d4;
    background: #171F4B;
  }
  .needed table tr{
    height:1.8rem;
    font-size: .7rem;
    text-align: center;
  }
  .bottom-content>div{
    float: left;
    width:50%;
    padding-bottom: 1rem;
  }
  .fault-box{
    display:flex;
    justify-content: space-between;
    padding-left: 1rem;
  }
  .fault{
    width:30%;
  }
  .fault-top{
    padding-left:.5rem;
    margin-bottom: 1rem;
  }
  .fault-top h3{
    font-size: .8rem;
    color:#fff;
    margin-bottom: .5rem;
  }
  .fault-top p{
    font-size: .7rem;
    color:#fff;
  }
  .fault-top{
    display: flex;
  }
  .fault-top>div:first-child{
    flex:3;
  }
  .fault-top>div:last-child{
    flex:2;
    text-align: right;
  }
  .fault ul li{
    width:100%;
    background: #23365F;
    margin-bottom: .5rem;
    height:1.5rem;
    line-height:1.5rem;
    padding:0 .5rem;
  }
  .fault ul li em{
    font-size: .65rem;
    margin-right: .5rem;
    float:right;
  }
  .fault ul li b{
    font-size: .9rem;
    color:#fbb03b;
    float: right;
  }
</style>