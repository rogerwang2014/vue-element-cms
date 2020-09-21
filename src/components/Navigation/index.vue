<template>
    <div class="navigationBar">
        <el-menu
            :default-active="defaultActiveMenu"
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
import { navigationMenuData } from '../../constant'
console.log(generateMenuTree(navigationMenuData, 0))

export default {
    data () {
        return {
            defaultActiveMenu: '',
            menuList: generateMenuTree(navigationMenuData, 0)
        }
    },
    components: {
        MenuTree
    },
    name: 'Home',
    mounted () {
        const menuList = this.menuList
        if (menuList[0].children && menuList[0].children.length > 0) {
            this.defaultActiveMenu = menuList[0].children[0].id + ''
        } else {
            this.defaultActiveMenu = menuList[0].id + ''
        }
    },
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
