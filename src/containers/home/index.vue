<template>
    <div class="pageContainer">
        <header>
            <div>
                <Logo logoColor="white" />
                <Navigation />
            </div>
        </header>
        <BreadCrumb />
        <div class="contentContainer">
            <div class="content" ref="tableContainer">
                <NonStandardData />
                <Pagination />
            </div>
        </div>
    </div>
</template>

<script>
import Logo from '../../components/common/Logo'
import Navigation from '../../components/Navigation'
import BreadCrumb from '../../components/BreadCrumb'
import NonStandardData from '../nonStandardedData'
import Pagination from '../../components/Pagination'

export default {
    components: {
        Logo,
        Navigation,
        NonStandardData,
        BreadCrumb,
        Pagination
    },
    data () {
        return {
            activeIndex: '1',
            activeIndex2: '1'
        }
    },
    name: 'Home',
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath)
        }
    }
}
</script>

<style scoped lang="less">
    @import 'index.less';
</style>
