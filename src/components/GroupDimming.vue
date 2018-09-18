<template>
  <div>
    <div class="title">
      <img src="./../assets/images/titleIcon.png" alt=""><span>分组调光</span>
    </div>
    <div class="content">

      <div class="contentItem contentTop">
        <div>
          <span>序号:{{group.id}}</span>
        </div>
        <div>
          <span>分组名称:{{group.name}}</span>
        </div>
        <div></div>
      </div>

      <div class="contentItem contentManual">
        <div>
          <input type="checkbox" id="manual"><label for="manual">手动调光</label>
        </div>
        <div>
          <select v-model="percent">
            <option v-for="p in percentData" :value="p" :key="p">{{p}}%</option>
          </select>
          <div>
            <input ref="range" v-model="percent" type="range" min="0" max="100" step="1">
          </div>
        </div>
        <div>
          <button class="clear">清空</button>
        </div>
      </div>

      <div class="contentItem contentAuto">
        <div>
          <input type="checkbox" id="auto"><label for="auto">方案调光</label>
        </div>
        <div>
          <div>
            <select>
              <option value="">第一号方案</option>
              <option value="">第二号方案</option>
              <option value="">第三号方案</option>
              <option value="">第四号方案</option>
            </select>
            <ul>
              <li>
                <span>09:00</span><b>30%</b>
              </li>
              <li>
                <span>09:00</span><b>30%</b>
              </li>
              <li>
                <span>09:00</span><b>30%</b>
              </li>
              <li>
                <span>09:00</span><b>30%</b>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <button class="clear">清空</button>
        </div>
      </div>
    </div>
    <div class="b-btn-box">
      <button class="green" @click="$emit('close')">保存</button>
      <button @click="$emit('close')">返回</button>
    </div>
    <p class="tip">注:手动调光与方案调光两种调光手段,同时只能勾选生效一种</p>
  </div>
</template>

<script>
  export default {
    name: "GroupDimming",
    data() {
      return {
        percent: 50,
        group: {
          id: '00001',
          name: '第一个分组'
        }
      }
    },
    methods: {
    },
    computed: {
      percentData () {
        let dataList = []
        for (let i = 0; i <= 100; i++) {
          dataList.push(i)
        }
        return dataList
      },
    },
    watch: {
      percent () {
        this.$refs.range.style.backgroundSize = this.percent + '% 100%'
      }
    }
  }
</script>

<style scoped>
  .content{
    padding:2.6rem 2rem 0;
  }
  .contentItem{
    margin-bottom: 3rem;
  }
  .contentItem>div{
    float:left;
  }
  .contentItem>div:first-child{
    font-size:.9rem;
  }

  input[type="checkbox"]{
    border-radius: 3px;
    height: .9rem;
    width: .9rem;
    margin-right: 5px;
  }
  .contentItem>div:nth-child(1){
    width:30%;
  }
  .contentItem>div:nth-child(2){
    width:40%;
  }
  .contentItem>div:nth-child(3){
    width:30%;
  }
  .contentItem select{
    width:100%;
    height:1.6rem;
    font-size: .8rem;
    background-position-x: 98%;
    margin-bottom: 1rem;
  }
  .contentTop>div{
    min-height:1px;
    font-size: .8rem;
    color:#fff;
  }
  .contentAuto ul{
    display: flex;
    justify-content: space-between;
  }
  .contentAuto li{
    flex: 1;
    display: flex;
    justify-content: space-around;
    border-right:1px solid #ddd;
  }
  .contentAuto li:last-child {
    border:none;
  }
  .contentAuto li span{
    color: #326ad6;
    font-size: .8rem;
    font-weight: bold;
  }
  .contentAuto li b{
    color: #75dae9;
    font-size: .8rem;
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
  .tip{
    position: absolute;
    bottom:1rem;
    right:5rem;
  }
</style>