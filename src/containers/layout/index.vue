<template>
    <div class="pageContainer">
        <header>
            <div>
                <Logo logoColor="white" />
                <Navigation />
                <SettingBar />
            </div>
        </header>
        <BreadCrumb />
        <div class="contentContainer">
            <transition name="fade" enter-active-class="animated fadeIn" mode="out-in">
                <keep-alive>
                    <router-view :key="key"></router-view>
                </keep-alive>
            </transition>
        </div>
    </div>
</template>

<script>
import Logo from '../../components/common/Logo'
import Navigation from '../../components/Navigation'
import BreadCrumb from '../../components/BreadCrumb'
import SettingBar from '../../components/SettingBar'

export default {
    components: {
        Logo,
        Navigation,
        BreadCrumb,
        SettingBar
    },
    data () {
        return {
            desc: '这里是右侧主界面'
        }
    },
    computed: {
        key () {
            return this.$route.path
        }
    },
    name: 'layout',
    methods: {}
}
</script>

<style lang="less">
    @import 'index.less';
</style>
