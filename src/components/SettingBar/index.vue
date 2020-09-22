<template>
    <div class="settingBarContainer">
        <QuickSearchBar />
        <i class="el-icon-bell" @click="clickFn"/>
        <i class="el-icon-phone-outline" @click="clickFn"/>
        <i class="el-icon-setting" @click="clickFn"/>
        <i class="el-icon-user" @click="clickFn"/>
    </div>
</template>

<script>
import QuickSearchBar from './QuickSearchBar'
export default {
    data () {
        return {
            breadCrumbList: ''
        }
    },
    name: 'setting-bar',
    components: {
        QuickSearchBar
    },
    methods: {
        clickFn () {
            console.log('aaa')
        }
    }
}
</script>

<style lang="less">
    @import 'index.less';
</style>
