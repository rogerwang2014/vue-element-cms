<template>
    <div class="navigationBar">
        <el-menu
            :default-active="defaultActiveMenu"
            :default-openeds="defaultOpendMenu"
            class="menuBar"
            mode="horizontal"
            @select="handleSelect"
        >
            <menu-tree :menu-list="menuList" />
        </el-menu>
    </div>
</template>

<script>
import { generateMenuTree } from '../../utils/common'
import MenuTree from './MenuTree'
const menuData = [
    {
        id: 1,
        parentId: 0,
        title: '非标数据',
        icon: 'el-icon-menu',
        link: '#',
        name: 'fbsj',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    }, {
        id: 2,
        parentId: 1,
        title: '日净值、估值',
        icon: 'el-icon-menu',
        link: '#',
        name: 'rjzgz',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    }, {
        id: 3,
        parentId: 1,
        title: '公司追踪',
        icon: 'el-icon-menu',
        link: '#',
        name: 'gszz',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    },
    {
        id: 4,
        parentId: 1,
        title: 'SOURCING分析',
        icon: 'el-icon-menu',
        link: '#',
        name: 'SOURCINGfx',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    }, {
        id: 5,
        parentId: 1,
        title: '行业分布',
        icon: 'el-icon-menu',
        link: '#',
        name: 'hyfb',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    }, {
        id: 6,
        parentId: 1,
        title: '资产配置',
        icon: 'el-icon-menu',
        link: '#',
        name: 'zcpz',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    }, {
        id: 7,
        parentId: 1,
        title: '存量产品提醒',
        icon: 'el-icon-menu',
        link: '#',
        name: 'clcptx',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    }, {
        id: 8,
        parentId: 0,
        title: '基金研究',
        icon: 'el-icon-menu',
        link: '#',
        name: 'jjyj',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    },
    {
        id: 9,
        parentId: 8,
        title: '公募产品库',
        icon: 'el-icon-menu',
        link: '#',
        name: 'gmcpk',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    },
    {
        id: 10,
        parentId: 8,
        title: '私募基金池',
        icon: 'el-icon-menu',
        link: '#',
        name: 'smjjc',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    },
    {
        id: 11,
        parentId: 10,
        title: '基金分级池1-机会追踪',
        icon: 'el-icon-menu',
        link: '#',
        name: 'jjfjc1jhzz',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    }, {
        id: 12,
        parentId: 10,
        title: '基金分级池2-尽调',
        icon: 'el-icon-menu',
        link: '#',
        name: 'jjfjc2jd',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    }, {
        id: 13,
        parentId: 10,
        title: '基金分级池3-投/售',
        icon: 'el-icon-menu',
        link: '#',
        name: 'jjfjc3ts',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    }, {
        id: 14,
        parentId: 8,
        title: '机构',
        icon: 'el-icon-menu',
        link: '#',
        name: 'jg',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    }, {
        id: 15,
        parentId: 8,
        title: '基金经理',
        icon: 'el-icon-menu',
        link: '#',
        name: 'jjjl',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    }, {
        id: 16,
        parentId: 0,
        title: '尽调管理',
        icon: 'el-icon-menu',
        link: '#',
        name: 'jdgl',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    }, {
        id: 17,
        parentId: 0,
        title: '组合管理',
        icon: 'el-icon-menu',
        link: '#',
        name: 'zhgl',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    }, {
        id: 18,
        parentId: 0,
        title: '报告管理',
        icon: 'el-icon-menu',
        link: '#',
        name: 'bggl',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    }, {
        id: 19,
        parentId: 18,
        title: '走访报告',
        icon: 'el-icon-menu',
        link: '#',
        name: 'zfbg',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    }, {
        id: 20,
        parentId: 0,
        title: 'FOF投管',
        icon: 'el-icon-menu',
        link: '#',
        name: 'foftg',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    },
    {
        id: 21,
        parentId: 0,
        title: '系统管理',
        icon: 'el-icon-menu',
        link: '#',
        name: 'xtgl',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    },
    {
        id: 22,
        parentId: 21,
        title: '菜单管理',
        icon: 'el-icon-menu',
        link: 'menu/list',
        name: 'menulist',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    },
    {
        id: 23,
        parentId: 21,
        title: '元素管理',
        icon: 'el-icon-menu',
        link: 'param/list',
        name: 'paramlist',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    },
    {
        id: 24,
        parentId: 21,
        title: '用户与权限管理',
        icon: 'el-icon-menu',
        link: 'user/list',
        name: 'userlist',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    },
    {
        id: 25,
        parentId: 21,
        title: '组织管理',
        icon: 'el-icon-menu',
        link: 'organization/list',
        name: 'organizationlist',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    },
    {
        id: 26,
        parentId: 21,
        title: '接口管理',
        icon: 'el-icon-menu',
        link: 'interface/list',
        name: 'interfacelist',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    }
]
console.log(generateMenuTree(menuData, 0))

export default {
    data () {
        return {
            defaultActiveMenu: '10',
            defaultOpendMenu: ['1'],
            menuList: generateMenuTree(menuData, 0)
        }
    },
    components: {
        MenuTree
    },
    name: 'Home',
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath)
        }
    }
}
</script>

<style lang="less">
    @import 'index.less';
</style>
