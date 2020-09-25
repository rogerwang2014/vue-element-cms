<template>
    <div class="commonContent setPermissionPage">
        <div class="roleGroup">
            <div class="title">用户组</div>
            <el-tabs tab-position="left" @tab-click="tabClick">
                <el-tab-pane
                    v-for="item in roleData"
                    :key="item.roleId"
                    :label="item.roleId">
                    <span slot="label"><i class="el-icon-user"></i> {{item.roleName}}</span>
                </el-tab-pane>
            </el-tabs>
        </div>
        <div class="permissionWrap">
            <div class="groupMembers">
                <div class="titleBar">
                    用户组成员
                    <span class="expand">展开</span>
                </div>
                <div class="memberWrap">
                    <ul>
                        <li
                            v-for="item in groupUsers"
                            :key="item.userId"
                            :label="item.userId"
                        >{{item.userName}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { roleData, groupUsers } from '../../../constant'
export default {
    components: {},
    data () {
        return {
            roleData,
            groupUsers,
            selectRoleId: roleData[0].roleId,
            memberWrapScroll: null
        }
    },
    name: 'UserAndPermission',
    mounted () {},
    methods: {
        tabClick (tab) {
            this.selectRoleId = tab.label
            console.log(tab.label)
        }
    }
}
</script>

<style lang="less">
    @import 'index.less';
</style>
