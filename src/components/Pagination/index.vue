<template>
    <div class="tablePagination">
        <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
        </el-pagination>
    </div>
</template>

<script>
export default {
    data () {
        return {
            PaginationData: ''
        }
    },
    name: 'Pagination',
    methods: {}
}
</script>

<style lang="less">
    @import 'index.less';
</style>
