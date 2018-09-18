import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuex from 'vuex'
import axios from 'axios';
import echarts from 'echarts'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.prototype.$echarts = echarts
Vue.prototype.$axios=axios
Vue.config.productionTip = false
Vue.prototype.rootUrl = '/agent/'

Vue.use(vuex)
Vue.use(iView)

const store = new vuex.Store({
    state:{
        IsThreeScreen: false,            // 是否三屏显示
        MessageContent: '',             // 消息提示框内容
        loadingShow: false
    },
    mutations: {
        TOGGLE_SCREEN (state) {
            state.IsThreeScreen = !state.IsThreeScreen
        },
        SET_MESSAGE (state, message) {
            state.MessageContent = message
        },
    }
})

// 替换window默认的alert方法
Vue.prototype.$alert = function (content) {
  this.$store.commit('SET_MESSAGE',content)
}

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
