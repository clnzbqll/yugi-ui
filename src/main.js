/* Element-Plus */
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

import router from './router'
import plugins from './plugins'
import store from './store'
import './permission'

import {createApp} from 'vue'
import App from './App.vue'

const app = createApp(App);

app.use(router)
app.use(plugins)
app.use(store)

app.use(ElementPlus)

app.mount('#app')
