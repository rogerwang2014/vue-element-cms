<template>
    <fragment>
        <template v-for="item in menuList">
            <el-menu-item
                v-if="!item.children"
                :key="item.id + ''"
                :index="item.id + ''"
                @click="goPage(item)"
            >
                <i :class="item.icon"></i>
                <span slot="title">{{item.title}}</span>
            </el-menu-item>
            <el-submenu v-else :index="item.id + ''" :key="item.id + ''">
                <template slot="title">
                    <i :class="item.icon"></i>
                    <span slot="title">{{item.title}}</span>
                </template>
                <menu-tree :menu-list="item.children"></menu-tree>
            </el-submenu>
        </template>
    </fragment>
</template>

<script>
export default {
    name: 'MenuTree',
    props: {
        menuList: {
            type: Array,
            default: () => []
        }
    },
    mounted () {},
    methods: {
        goPage (item) {
            this.$router.push('/' + item.link)
        }
    }
}
</script>
