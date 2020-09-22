<template>
    <div class="antdDemo">
        <div class="antd-demo-item buttons-list">
            <a-button type="primary">
                Primary
            </a-button>
            <a-button>Default</a-button>
            <a-button type="dashed">
                Dashed
            </a-button>
            <a-button type="danger">
                Danger
            </a-button>
            <a-config-provider :auto-insert-space-in-button="false">
                <a-button type="primary">
                    按钮
                </a-button>
            </a-config-provider>
            <a-button type="primary">
                按钮
            </a-button>
            <a-button type="link">
                Link
            </a-button>
            <a-button type="primary">Button</a-button>
            <a-upload>
                <a-button> <a-icon type="upload" /> Click to Upload </a-button>
            </a-upload>
            <a-popconfirm title="Are you sure delete this task?" ok-text="Yes" cancel-text="No">
                <a-button>Confirm</a-button>
            </a-popconfirm>
        </div>
        <div class="antd-demo-item icons-list">
            <a-icon type="home" />
            <a-icon type="setting" theme="filled" />
            <a-icon type="smile" theme="outlined" />
            <a-icon type="sync" spin />
            <a-icon type="smile" :rotate="180" />
            <a-icon type="loading" />
        </div>
        <div class="antd-demo-item" style="width: 256px">
            <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
                <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
            </a-button>
            <a-menu
                :default-selected-keys="['1']"
                :default-open-keys="['sub1']"
                mode="inline"
                theme="dark"
                :inline-collapsed="collapsed"
            >
                <a-menu-item key="1">
                    <a-icon type="pie-chart" />
                    <span>Option 1</span>
                </a-menu-item>
                <a-menu-item key="2">
                    <a-icon type="desktop" />
                    <span>Option 2</span>
                </a-menu-item>
                <a-menu-item key="3">
                    <a-icon type="inbox" />
                    <span>Option 3</span>
                </a-menu-item>
                <a-sub-menu key="sub1">
                    <span slot="title"><a-icon type="mail" /><span>Navigation One</span></span>
                    <a-menu-item key="5">
                        Option 5
                    </a-menu-item>
                    <a-menu-item key="6">
                        Option 6
                    </a-menu-item>
                    <a-menu-item key="7">
                        Option 7
                    </a-menu-item>
                    <a-menu-item key="8">
                        Option 8
                    </a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub2">
                    <span slot="title"><a-icon type="appstore" /><span>Navigation Two</span></span>
                    <a-menu-item key="9">
                        Option 9
                    </a-menu-item>
                    <a-menu-item key="10">
                        Option 10
                    </a-menu-item>
                    <a-sub-menu key="sub3" title="Submenu">
                        <a-menu-item key="11">
                            Option 11
                        </a-menu-item>
                        <a-menu-item key="12">
                            Option 12
                        </a-menu-item>
                    </a-sub-menu>
                </a-sub-menu>
            </a-menu>
        </div>
        <div class="antd-demo-item">
            <a-date-picker @change="onChange" />
            <br />
            <a-month-picker placeholder="Select month" @change="onChange" />
            <br />
            <a-range-picker @change="onChange" />
            <br />
            <a-week-picker placeholder="Select week" @change="onChange" />
        </div>
        <div class="antd-demo-item">
            <div>
                <a-button @click="success">
                    Success
                </a-button>
                <a-button @click="error">
                    Error
                </a-button>
                <a-button @click="warning">
                    Warning
                </a-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'antDesign',
    data() {
        return {
            collapsed: false
        }
    },
    methods: {
        toggleCollapsed() {
            this.collapsed = !this.collapsed
        },
        onChange(date, dateString) {
            console.log(date, dateString)
        },
        success() {
            this.$message.success('This is a success message')
        },
        error() {
            this.$message.error('This is an error message')
        },
        warning() {
            this.$message.warning('This is a warning message')
        }
    }
}
</script>

<style lang="less" scoped>
    @import 'index.less';
</style>
