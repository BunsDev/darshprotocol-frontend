import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Utils from './plugins/Utils'
import timeago from 'vue-timeago3'
import { ObserveVisibility } from "vue-observe-visibility";


import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(VueAxios, axios)
app.use(Utils)
app.use(timeago) 
app.directive('observe-visibility', ObserveVisibility)

app.mount('#app')
