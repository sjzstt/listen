import Vue from 'vue'
import Router from 'vue-router'
import My from '@/views/my/my'
import Indent from '@/views/my/indent/indent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indent',
      component: Indent
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
  ]
})
