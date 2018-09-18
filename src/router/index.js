import Vue from 'vue'
import Router from 'vue-router'
import login from './../pages/login'
import home from './../pages/home'
import overview from './../pages/overview'
import equipment from './../pages/equipment'
import account from './../pages/account'
import count from './../pages/count'
import fault from './../pages/fault'
import message from './../pages/message'
import equipmentControl from './../pages/equipmentControl'
import equipmentDetail from './../pages/equipmentDetail'
import equipmentDimming from './../pages/equipmentDimming'

Vue.use(Router)

export default new Router({
  //mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'login'
    },
    {
      path: '/login',
      name:'login',
      component: login
    },
    {
      path: '/home',
      name:'home',
      component: home,
  
      children:[
        {
          path: '/',
          redirect: '/equipment'
        },
        {
          path: '/overview',
          name:'overview',
          component: overview
        },
        {
          path: '/equipment',
          name:'equipment',
          component: equipment
        },
        {
          path: '/equipment/equipmentControl/:id',
          name:'equipmentControl',
          component: equipmentControl
        },
        {
          path: '/equipment/equipmentDetail/:id?',
          name:'equipmentDetail',
          component: equipmentDetail
        },
        {
          path: '/equipment/equipmentDimming/:id',
          name:'equipmentDimming',
          component: equipmentDimming
        },
        {
          path: '/fault',
          name:'fault',
          component: fault
        },
        {
          path: '/message',
          name:'message',
          component: message
        },
        {
          path: '/account',
          name:'account',
          component: account
        },
        {
          path: '/count',
          name:'count',
          component: count
        },
      ]
    }
  ]
})
