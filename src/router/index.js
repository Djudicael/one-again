import Vue from 'vue'
import Router from 'vue-router'
import Kanban from '@/pages/Kanban'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Kanban',
      component: Kanban
    }
  ]
})