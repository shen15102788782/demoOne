<template>
  <div class="equipmentDimming">
    <p class="line"></p>
    <div class="top">
      <div class="title">
        <img src="./../assets/images/titleIcon.png" alt=""><span>设备调光</span>
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
        <tr>
          <td>{{$route.params.id}}</td>
          <td>{{equipment.name}}</td>
          <td>{{equipment.time}}</td>
          <td>{{equipment.build}}</td>
          <td>{{equipment.floor}}</td>
          <td><img :src="require(`@/assets/images/state${equipment.state}.png`)" alt=""></td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="bottom">
      <div class="title">
        <img src="./../assets/images/titleIcon.png" alt=""><span>设备分组</span>
        <div class="btn-box">
          <button @click="showDimming()">调光</button>
          <button @click="showNodeList()">节点</button>
        </div>
      </div>
      <table>
        <thead>
        <tr>
          <th>序号</th>
          <th>分组名称</th>
          <th>节点数量</th>
          <th>方案选择</th>
          <th>当前亮度</th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="group in groupList"
            :key="group.id"
            :class="{active: groupId === group.id}"
            @click="choiceGroup(group.id)">
          <td>{{group.id}}</td>
          <td>{{group.name}}</td>
          <td>{{group.time}}</td>
          <td>{{group.build}}</td>
          <td>{{group.floor}}</td>
        </tr>
        </tbody>
      </table>
    </div>

    <NodeList v-show="nodeListShow" class="model nodeList bgc" @close="hideNodeList()"></NodeList>
    <GroupDimming v-show="groupDimmingShow" class="model nodeList bgc" @close="hideGroupDimming()"></GroupDimming>
  </div>
</template>

<script>
  import NodeList from "./../components/NodeList"
  import GroupDimming from "./../components/GroupDimming"
  export default {
    name: "equipmentDimming",
    data () {
      return {
        groupId: '',                        // 选择的分组ID
        nodeListShow: false,
        groupDimmingShow: false,
        equipment: {
          id: '006000100056',
          name: '机身隔框',
          time: '2018-09-15',
          build: 'T1',
          floor: 'F1',
          state: '1',
        },
        groupList: [
          {
            id: '1',
            name: '机身隔框',
            time: '3',
            build: '调光1号方案',
            floor: '20%',
          },
          {
            id: '2',
            name: '机身隔框',
            time: '3',
            build: '调光8号方案',
            floor: '50%',
          },
          {
            id: '3',
            name: '机身隔框',
            time: '3',
            build: '调光3号方案',
            floor: '30%',
          },
          {
            id: '4',
            name: '机身隔框',
            time: '3',
            build: '调光6号方案',
            floor: '90%',
          },
        ]
      }
    },
    components: {
      NodeList,
      GroupDimming,
    },
    methods: {
      choiceGroup (groupId) {
        this.groupId = groupId
      },

      showDimming () {
        if(!this.groupId) {
          this.$alert('请先选择分组')
          return
        }
        this.groupDimmingShow = true
      },

      showNodeList () {
        if(!this.groupId) {
          this.$alert('请先选择分组')
          return
        }
        this.nodeListShow = true
      },
      hideNodeList () {
        this.nodeListShow = false
      },
      hideGroupDimming () {
        this.groupDimmingShow = false
      },
    }
  }
</script>

<style scoped>
  .equipmentDimming{
    position: relative;
  }
  .top{
    margin-bottom: 2.6rem;
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
  .model{
    position:absolute;
    top:50%;
    left:50%;
    border: 2px solid #555E96;
    padding: 1.4rem 2rem;
    z-index: 100;
  }
  .nodeList{
    width:74.3rem;
    height:29.8rem;
    margin-left: -37.2rem;
    margin-top: -15rem;
  }

</style>