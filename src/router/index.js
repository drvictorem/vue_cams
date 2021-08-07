import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/store.js'

const routes = [
  {
    path: '/',
    name: 'first',

    component: () => import( '../views/Home.vue'),
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
        if (store.getters.getStatus == 'success'){
            
            next()
            return
        }
        next('/')
    }else {
            next()
        }
    }
)


export default router
