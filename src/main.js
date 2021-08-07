import { createApp } from 'vue'
import store from './store/store.js'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { LMap, LTileLayer,LMarker } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css"
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'

require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')















const app = createApp(App).use(router)
app.use(store)
app.use(ElementPlus)
app.use(VueAxios, axios)
app.use(VueVideoPlayer)

app.mount('#app')
