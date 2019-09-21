import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import Materials from './views/Materials.vue'
import NotFound from './views/layouts/NotFound.vue'
import Changelog from './views/Changelog.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/materials',
      name: 'Materials',
      component: Materials
    },
    {
      path: '/changelog',
      name: 'Changelog',
      component: Changelog
    },
    {
      path: '/404',
      component: NotFound
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
