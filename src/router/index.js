import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/home'
import Choose from '../views/choose/choose'
import Find from '../views/find/find'
import Listen from '../views/listen/listen'
import My from '../views/my/my'
// import HelloWorld from '@/components/HelloWorld'
import Course from '../views/choose/course/course'
import Lu from '../views/choose/course/lu'
import One from '../views/choose/course/one'
import Person from '../views/choose/course/person'
import Practive from '../views/choose/course/practive'
import Spacing from '../views/choose/course/spacing'
import Two from '../views/choose/course/two'
import All from '../views/choose/course/course/all'
import Maths from '../views/choose/course/course/math'
import Chinese from '../views/choose/course/course/chinese'
import English from '../views/choose/course/course/english'
import Physical from '../views/choose/course/course/physical'
import Historys from '../views/choose/course/course/history'
import Artical from '../views/choose/course/course/artical'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"home"
    },{
      path:'/home',
      component:Home,
      name:"home",
      children:[
        {
          path:'',
          redirect:"choose",
        },{
          path:'choose',
          name:'choose',
          component:Choose,
          children:[
            {
              path:"",
              redirect:"course"
            },{
              path:"course",
              component:Course,
              children:[
                {
                  path:"",
                  redirect:"all"
                },{
                  path:"all",
                  component:All
                },{
                  path:"math",
                  component:Maths
                },{
                  path:"english",
                  component:English
                },{
                  path:"chinese",
                  component:Chinese
                },{
                  path:"history",
                  component:Historys
                },{
                  path:"physical",
                  component:Physical
                },{
                  path:"artical",
                  component:Artical
                }
              ]
            },{
              path:"lu",
              component:Lu
            },{
              path:"one",
              component:One
            },{
              path:"person",
              component:Person
            },{
              path:"practive",
              component:Practive
            },{
              path:"spacing",
              component:Spacing
            },{
              path:"two",
              component:Two
            }
          ]
        },{
          path:'listen',
          component:Listen
        },{
          path:'find',
          component:Find
        },{
          path:'my',
          component:My
        }
      ]
    }
  ]
})
