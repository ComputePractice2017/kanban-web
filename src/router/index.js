import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Kanban from '@/components/Kanban'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/kanban',
      name: 'Kanban',
      component: Kanban
    }
  ]
})
