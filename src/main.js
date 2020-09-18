import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css/normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/icons'
import './assets/iconfont/iconfont.css'
import Fragment from 'vue-fragment'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Fragment.Plugin)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: (h) => h(App)
})
