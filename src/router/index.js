import Vue from 'vue'
import Router from 'vue-router'
import { menuRouterData } from './methods'
import Login from '../containers/login'
import Layout from '../containers/layout'
import Home from '../containers/home'
import AntDesign from '../containers/antDesign'
import ErrorPage from '../containers/errorPage'

Vue.use(Router)

console.log(menuRouterData)

// 避免重定向到当前路由报错
// const originalPush = Router.prototype.push
// Router.prototype.push = (location) => {
//     return originalPush.call(this, location).catch(err => err)
// }

/**
 * 固定的导航数据
 * alwaysShow: true
 * 如果设置为true,它将总是现在在根目录。如果不设置的话，当它只有1个子路由的时候，会把它的唯一子路由放到跟目录上来，而不显示它自己本身。
 */

export const initialRouterData = [
    {
        path: '/login',
        name: 'login',
        hidden: true,
        component: Login,
        meta: {
            title: '登录'
        }
    }, {
        path: '/',
        hidden: true,
        component: Layout,
        redirect: '/home',
        children: [
            {
                path: 'home',
                name: 'home',
                component: Home,
                meta: { title: '首页' }
            }
        ]
    }, {
        path: '/',
        hidden: true,
        component: Layout,
        children: [
            {
                path: 'antd',
                name: 'antd',
                component: AntDesign,
                meta: { title: 'antd' }
            }
        ]
    }, {
        path: '/404',
        component: ErrorPage,
        hidden: true
    }, {
        path: '*',
        redirect: '/404',
        hidden: true
    }
]

export default new Router({
    routes: [...initialRouterData, ...menuRouterData]
})
