import Vue from 'vue'
import Router from 'vue-router'
import My from '@/views/my/my'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'my',
      component: My
    }
  ]
})
