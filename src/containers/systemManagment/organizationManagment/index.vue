<template>
    <div class="commonContent" ref="tableContainer">
        <common-table />
        <Pagination />
    </div>
</template>

<script>
import CommonTable from '../../../components/CommonTable'
import Pagination from '../../../components/Pagination'

export default {
    components: {
        CommonTable,
        Pagination
    },
    data () {
        return {}
    },
    name: 'OrganizationManagment'
}
</script>

<style scoped lang="less">
    @import 'index.less';
</style>
