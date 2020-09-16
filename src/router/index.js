import Vue from 'vue'
import Router from 'vue-router'

import Login from '../containers/login'
import Home from '../containers/home'

Vue.use(Router)

/**
 * alwaysShow: true
 * 如果设置为true,它将总是现在在根目录。如果不设置的话，当它只有1个子路由的时候，
 * 会把它的唯一子路由放到跟目录上来，而不显示它自己本身。
 */

export const constantRouterMap = [
    {
        path: '/login',
        name: 'login',
        hidden: true,
        component: Login,
        meta: {
            title: '登录'
        }
    },
    {
        path: '/',
        hidden: true,
        component: Home,
        redirect: '/home',
        children: [
            {
                path: 'home',
                name: 'home',
                component: Home,
                meta: { title: '首页' }
            }
        ]
    }
]

export default new Router({
    routes: constantRouterMap
})
