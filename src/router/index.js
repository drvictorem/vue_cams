import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/store.js'

const routes = [
  {
    path: '/',
    name: 'authorization',

    component: () => import( '../views/Authorization.vue'),
    props: true
  },
  {
    path: '/map',
    name: 'page_map',
    props: true,
    meta: {
        requiresAuth: true
     },
    component: () => import( '../views/Map.vue')
  },
  {
    path: '/add',
    name: 'add',
    meta: {
        requiresAuth: true
     },
    component: () => import( '../views/AddNewCameras.vue')
  },
  {
    path: '/search',
    name: 'search_cam',
    meta: {
        requiresAuth: true
     },
    component: () => import( '../views/Search.vue'),
    props: true
},

]

const router = createRouter({
  history: createWebHistory('cams_viewer'),
  routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record =>
        record.meta.requiresAuth)) {

        let status = JSON.parse(localStorage.getItem('authStatus'))
        if (status == 'success'){
          // console.log(this.$store.getters('getUser'))


            next()
            return
        }
        store.dispatch('incorrectLogin',{})
        next('/')
    }
    else {
            next()
        }
    }
)


export default router
