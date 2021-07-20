import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Protegida from '../views/Protegida.vue'

Vue.use(VueRouter)

function guardRoute(to, from, next){

  var isAuthenticated= true;

  if(isAuthenticated) {
    next();
  }else{
    next('/about');
  }

}

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/protegida',
    name: 'Protegida',
    beforeEnter : guardRoute,
    component: Protegida
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
