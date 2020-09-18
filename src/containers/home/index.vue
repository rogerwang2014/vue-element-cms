<template>
    <div class="pageContainer">
        <header>
            <div>
                <Logo logoColor="white" />
                <Navigation />
            </div>
        </header>
        <div class="mainContainer"></div>
    </div>
</template>

<script>
import Logo from '../../components/common/Logo'
import Navigation from '../../components/Navigation'

export default {
    components: {
        Logo,
        Navigation
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
