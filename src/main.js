import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Fragment from 'vue-fragment'
import ElementUI from 'element-ui'
import './mock' // 全局 Mock 接口
import 'element-ui/lib/theme-chalk/index.css'
import './assets/iconfont/iconfont.css'
import 'animate.css' // animate动画库
import './assets/css/reset.less'
// antd相关组件
import { Button, Icon, Menu, DatePicker, Message, ConfigProvider, Popconfirm, Upload } from 'ant-design-vue'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Fragment.Plugin)

// antd组件
Vue.use(Button)
Vue.use(Icon)
Vue.use(Menu)
Vue.use(DatePicker)
Vue.use(Message)
Vue.use(ConfigProvider)
Vue.use(Popconfirm)
Vue.use(Upload)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: (h) => h(App)
})
