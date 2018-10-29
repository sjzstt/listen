import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Setting from '@/views/my/setting/setting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'setting',
      component: Setting
    }
  ]
})
