<template>
    <div class="breadCrumbContainer">
        <div>
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>一级菜单</el-breadcrumb-item>
                <el-breadcrumb-item>二级菜单</el-breadcrumb-item>
                <el-breadcrumb-item>三级菜单</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            breadCrumbList: ''
        }
    },
    name: 'BreadCrumb',
    methods: {}
}
</script>

<style lang="less">
    @import 'index.less';
</style>
