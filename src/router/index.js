import Vue from 'vue'
import Router from 'vue-router'
import preview from '../components/preview/preview'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/preview',
      component: preview
    }
  ]
})
