import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/:id',
    component: () => import(/* webpackChunkName: "chara detail" */ '../views/CharaDetail.vue'),
    children: [{
      path: '',
      name: 'character song list',
      component: () => import(/* webpackChunkName: "song list" */ '../components/SongList.vue')
    }, {
      path: 'comments',
      name: 'character comments',
      component: () => import(/* webpackChunkName: "Chara Comments" */ '../components/CharaComments.vue')
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
