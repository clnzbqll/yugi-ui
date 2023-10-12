/* Element-Plus */
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

/* SVG */
import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon'

import router from './router'
import plugins from './plugins'
import store from './store'
import './permission'

import {createApp} from 'vue'
import App from './App.vue'

const app = createApp(App);

app.component('svg-icon', SvgIcon)

app.use(router)
app.use(plugins)
app.use(store)

app.use(ElementPlus)

app.mount('#app')
