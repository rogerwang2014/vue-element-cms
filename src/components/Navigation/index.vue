<template>
    <div class="navigationBar">
        <el-menu
            class="menuBar"
            mode="horizontal"
            @select="handleSelect"
            :default-active="defaultActiveMenu"
        >
            <menu-tree :menu-list="menuList" />
        </el-menu>
    </div>
</template>

<script>
import { generateMenuTree, flatTree } from '../../utils/common'
import MenuTree from './MenuTree'
import { navigationMenuData } from '../../constant'
export default {
    data () {
        return {
            defaultActiveMenu: '',
            menuList: generateMenuTree(navigationMenuData, 0),
            flatMenuData: flatTree(generateMenuTree(navigationMenuData, 0))
        }
    },
    components: {
        MenuTree
    },
    name: 'Home',
    mounted () {
        this.findActiveMenu()
    },
    watch: {
        // 路由变化的时候更新导航菜单的选中状态
        $route (to) {
            this.defaultActiveMenu = ''
            this.findActiveMenu()
        }
    },
    methods: {
        handleSelect (key, keyPath) {
            console.log(key, keyPath)
        },
        findActiveMenu () { // 根据路由选中导航菜单
            this.flatMenuData.forEach((item) => {
                if ('/' + item.link === this.$router.currentRoute.path) {
                    this.defaultActiveMenu = item.id + ''
                }
            })
        }
    }
}
</script>

<style lang="less">
    @import 'index.less';
</style>
