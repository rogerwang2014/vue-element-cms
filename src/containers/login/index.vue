<template>
    <div class="login-container">
        <div class="login-header">
            <div class="login-header-wrapper">
                <Logo />
                <span>登录</span>
            </div>
        </div>
        <div class="login-panel">
            <div class="login-box">
                <div class="login-box-left" />
                <div class="login-box-right">
                    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" autocomplete="on" label-position="left">
                        <el-row class="login-box-input">
                            <el-col :span="5" />
                            <el-col :span="14" :offset="5">
                                <el-row>
                                    <el-col :span="6">
                                        <label class="title">帐号登录</label>
                                    </el-col>
                                </el-row>
                                <el-row style="margin-top:20px">
                                    <el-col :span="24">
                                        <el-form-item prop="username">
                                            <el-input
                                                ref="username"
                                                v-model="loginForm.username"
                                                placeholder="请输入帐号"
                                                size="medium"
                                            >
                                                <span slot="prefix" class="iconfont icon_mobile"></span>
                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="24">
                                        <el-form-item prop="password">
                                            <el-input
                                                ref="password"
                                                v-model="loginForm.password"
                                                placeholder="请输入密码"
                                                type="password"
                                                size="medium"
                                                @keyup.enter.native="handleLogin"
                                                @keyup.native="checkCapslock"
                                            >
                                                <span slot="prefix" class="iconfont icon_unlock"></span>
                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="24">
                                        <el-button
                                            type="primary"
                                            style="width:100%"
                                            :loading="loading"
                                            @click.native.prevent="handleLogin"
                                        >登录</el-button>
                                    </el-col>
                                </el-row>
                                <el-row class="passwordLink">
                                    <el-col :span="12">
                                        <el-link type="info" :underline="false">忘记密码？点击找回</el-link>
                                    </el-col>
                                    <el-col :span="6" :offset="6">
                                        <el-link type="primary" :underline="false">免费注册</el-link>
                                    </el-col>
                                </el-row>
                            </el-col>
                            <el-col :span="5" />
                        </el-row>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Logo from '../../components/common/Logo'
export default {
    components: {
        Logo
    },
    data() {
        const validateUsername = (rule, value, callback) => {
            // if (!validUsername(value)) {
            //   callback(new Error('Please enter the correct user name'))
            // } else {
            callback()
            // }
        }
        const validatePassword = (rule, value, callback) => {
            if (value.length < 5) {
                callback(new Error('密码长度不能小于5位'))
            } else {
                callback()
            }
        }
        return {
            loginForm: {
                username: 'admin',
                password: 'admin'
            },
            loginRules: {
                username: [{ required: true, trigger: 'blur', validator: validateUsername }],
                password: [{ required: true, trigger: 'blur', validator: validatePassword }]
            },
            capsTooltip: false,
            loading: false,
            redirect: undefined,
            otherQuery: {}
        }
    },
    watch: {
        $route: {
            handler: function(route) {
                const query = route.query
                if (query) {
                    this.redirect = query.redirect
                    this.otherQuery = this.getOtherQuery(query)
                }
            },
            immediate: true
        }
    },
    mounted() {
        if (this.loginForm.username === '') {
            this.$refs.username.focus()
        } else if (this.loginForm.password === '') {
            this.$refs.password.focus()
        }
    },
    methods: {
        checkCapslock(e) {
            const { key } = e
            this.capsTooltip = key && key.length === 1 && (key >= 'A' && key <= 'Z')
        },
        handleLogin() {
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    this.loading = true
                    this.$router.push({
                        path: '/home'
                    })
                    // this.login(this.loginForm)
                    // // this.$store.dispatch('user/login', this.loginForm)
                    //     .then(() => {
                    //         this.$router.push({
                    //             path: this.redirect || '/',
                    //             query: this.otherQuery
                    //         })
                    //         this.loading = false
                    //     })
                    //     .catch(() => {
                    //         this.loading = false
                    //     })
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        },
        getOtherQuery(query) {
            return Object.keys(query).reduce((acc, cur) => {
                if (cur !== 'redirect') {
                    acc[cur] = query[cur]
                }
                return acc
            }, {})
        }
    }
}
</script>

<style scoped lang="less">
    @import 'index.less';
</style>
