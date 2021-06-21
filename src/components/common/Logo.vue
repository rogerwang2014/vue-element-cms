<template>
    <div class="cmsLogo">
        <img v-if="logo" :src="logo" class="sidebar-logo">
        <p :class="[{ slogn_login: $route.path.includes('/login') }]">后台管理系统</p>
    </div>
</template>

<script>
export default {
    props: ['logoColor'],
    data() {
        return {
            title: 'cms后台管理系统',
            link: 'www.rogerwang.site',
            logo: require(`../../assets/images/cms_logo${this.logoColor === 'white' ? '_white' : ''}.png`)
        }
    }
}
</script>

<style lang="less" scoped>
    .cmsLogo {
        height: 100%;
        display: flex;
        align-items: center;

        img {
            width: 32px;
        }

        p {
            color: #fff;
            margin-left: 8px;
            .fs(14);

            &.slogn_login {
                color: #333333;
                font-weight: bold;
                .fs(16);
                margin-right: 12px;
            }
        }
    }
</style>
