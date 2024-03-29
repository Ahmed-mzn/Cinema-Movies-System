import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab} from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000'

createApp(App).component('fa', FontAwesomeIcon).use(store).use(router, axios).mount('#app')

