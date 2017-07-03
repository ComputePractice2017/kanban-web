import Vue from 'vue'
import Router from 'vue-router'
import Maindeck from '@/components/Maindeck'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Maindeck',
      component: Maindeck
    }
  ]
})
