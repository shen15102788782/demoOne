<template>
  <div>
    <div class="top">
      <div class="title">
        <img src="./../assets/images/titleIcon.png" alt=""><span>节点列表</span>
      </div>
    </div>
    <div class="selectBox">
      <input class="search" type="text" placeholder="请输入关键字搜索">
      <button>搜索</button>
      <select name="">
        <option value="">全部</option>
        <option value="">在线</option>
        <option value="">故障</option>
        <option value="">运维</option>
        <option value="">离线</option>
      </select>
    </div>
    <table>
      <thead>
      <tr>
        <th>名称</th>
        <th>分组</th>
        <th>节点mac</th>
        <th>安装日期</th>
        <th>质保日期</th>
        <th>版本</th>
        <th>工作状态</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(node, index) in nodeList" :key="index">
        <td>{{node.id}}</td>
        <td>{{node.name}}</td>
        <td>{{node.time}}</td>
        <td>{{node.build}}</td>
        <td>{{node.date}}</td>
        <td>{{node.floor}}</td>
        <td><img :src="require(`@/assets/images/state${node.state}.png`)" alt=""></td>
      </tr>
      </tbody>
    </table>
    <div class="b-btn-box">
      <button @click="$emit('close')">关闭</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NodeList",
    data () {
      return {
        nodeList: [
          {
            id: '1',
            name: '机身隔框',
            time: '3',
            build: '调光1号方案',
            floor: '20%',
            date: '2018-10-22',
            state: 1,
          },
          {
            id: '2',
            name: '机身隔框',
            time: '3',
            build: '调光8号方案',
            floor: '50%',
            date: '2018-10-22',
            state: 1,
          },
          {
            id: '3',
            name: '机身隔框',
            time: '3',
            build: '调光3号方案',
            floor: '30%',
            date: '2018-10-22',
            state: 1,
          },
          {
            id: '4',
            name: '机身隔框',
            time: '3',
            build: '调光6号方案',
            floor: '90%',
            date: '2018-10-22',
            state: 1,
          },
          {
            id: '5',
            name: '机身隔框',
            time: '3',
            build: '调光6号方案',
            floor: '90%',
            date: '2018-10-22',
            state: 1,
          },
        ]
      }
    }
  }
</script>

<style scoped>
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
  }
  td{
    height:2rem;
    color:#fff;
    font-size: .7rem;
    padding-left:1rem;
  }
  tbody tr:nth-child(even){
    background: #1a3a70;
  }
  .b-btn-box{
    text-align: center;
    padding:2rem 0;
  }
  .b-btn-box button{
    border:1px solid #1644a6;
    color:#fff;
    font-size: .8rem;
    padding:5px 20px;
    background: transparent;
  }
</style>