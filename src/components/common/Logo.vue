<template>
  <div class="cmsLogo">
    <img v-if="logo" :src="logo" class="sidebar-logo">
  </div>
</template>

<script>
export default {
    props: ['logoColor'],
    data() {
        return {
            title: '好买投研系统',
            link: 'www.howbuy.com',
            logo: require(`../../assets/images/cms_logo${this.logoColor === 'white' ? '_white' : ''}.png`)
        }
    }
}
</script>

<style lang="less" scoped>
    .cmsLogo{
        height: 100%;
        display: flex;
        align-items: center;
    }
</style>
