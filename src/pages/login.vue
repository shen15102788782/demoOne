<template>
  <div class="login">
    <div class="login-box" :class="{three : $store.state.IsThreeScreen}" :style="{height: screenHeight -40 +'px'}">
      <div class="login-form">
        <h1>用户登录</h1>
        <div>
          <div class="user">
            <input type="text" placeholder="输入账号" v-model="userName">
          </div>
          <div class="password">
            <input type="password" placeholder="输入密码" v-model="password">
          </div>
          <span>修改密码</span>
        </div>
        <button @click="login">登录</button>
      </div>
    </div>
    <Message v-show="$store.state.MessageContent"></Message>
  </div>
</template>
<script>
  import Message from './../components/Message'
  export default {
    name: 'login',
    data () {
      return {
        type: 0,                                      // 0:用户登录 1:修改密码
        screenHeight: window.innerHeight,
        userName: '',
        password: ''
      }
    },
    components: {
      Message,
    },
    methods:{

      // 登录
      login () {
        if(!this.userName){
          this.$alert('请输入用户名')
          return
        }
        if(!this.password){
          this.$alert('请输入密码')
          return
        }
        this.$axios.post(this.rootUrl + 'UserLogin', {'obj': '{"UserName":"'+this.userName+'","PassWord":"'+this.password+'"}'})
          .then(res => {
            // 处理成功的结果
            const _result = res.data
            console.log(_result)
            if (_result.UserLoginResult.RecordStatus == 1) {
              window.sessionStorage.setItem('UserNum', _result.UserLoginResult.RecordDetail[0].UserNum)
              window.sessionStorage.setItem('UserName', _result.UserLoginResult.RecordDetail[0].UserName)
              window.sessionStorage.setItem('UserType', _result.UserLoginResult.RecordDetail[0].UserType)
              // this.$store.commit('initUser')
              this.$router.push('/home')
            } else {
              this.$alert(_result.UserLoginResult.RecordRemark)
            }
          })
          .catch(res => {
            // 处理失败的结果
            console.log(res)
            this.$alert('网络异常');
          })
      },
    },
    computed:{
    }
  }
</script>
<style scoped>
  .login{
    width:100%;
    background: url("./../assets/images/login/login_bg.png");
    background-size: contain;
  }
  .login-box{
    width:1200px;
    margin:40px auto 0;
    background: url("./../assets/images/login/login.png") no-repeat;
    background-size: contain;
  }
  .three.login-box{
    /*width:30%;*/
    /*left:50%;*/
    /*margin-left: -15%;*/
  }
  .login-form{
    margin:13% auto 0;
    width:40%;
    text-align: center;
  }
  .login-form h1{
    color:#fff;
    font-size: 26px;
    margin-bottom:15px;
  }
  .login-form input{
    font-size: 20px;
    padding-left:50px;
    height:40px;
    border-color: transparent;
    border-bottom: 1px solid #ddd;
    width:60%;
  }
  .user input{
    background: url("./../assets/images/login/user.png") no-repeat 6px 10px;
    background-size: 20px;
    margin-bottom: 1rem;
  }
  .password input{
    background: url("./../assets/images/login/password.png") no-repeat 6px 10px;
    background-size: 20px;
    margin-bottom: .5rem;
  }
  .login-form>div{
    margin-bottom: 1rem;
  }
  .login-form span{
    float:right;
    font-size: 14px;
    color:#fff;
    margin-right:21%;
    cursor: pointer;
  }
  .login-form button {
    font-size: 18px;
    color: #ffffff;
    border:none;
    width:60%;
    height:38px;
    border-radius: 6px;
    background-color: rgba(0,161,206,.5);
  }
</style>
