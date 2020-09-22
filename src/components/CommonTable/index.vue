<template>
    <div class="commonTable" ref="tableContainer">
        <el-table
            :data="tableData"
            :height="tableHeight"
        >
            <el-table-column
                label="基金名称"
                prop="fundName">
            </el-table-column>
            <el-table-column
                label="基金代码"
                prop="fundCode">
            </el-table-column>
            <el-table-column
                label="基金类型"
                prop="fundType">
            </el-table-column>
            <el-table-column
                label="历史收益"
                prop="benefit">
            </el-table-column>
            <el-table-column
                label="日期"
                width="180">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="姓名"
                width="180">
                <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top">
                        <p>姓名: {{ scope.row.name }}</p>
                        <p>住址: {{ scope.row.address }}</p>
                        <div slot="reference" class="name-wrapper">
                            <el-tag size="medium">{{ scope.row.name }}</el-tag>
                        </div>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">编辑
                    </el-button>
                    <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import { tableData } from '../../constant'
export default {
    data() {
        return {
            tableHeight: 0,
            tableData
        }
    },
    mounted () {
        this.setTableHeight()
    },
    methods: {
        handleEdit(index, row) {
            console.log(index, row)
        },
        handleDelete(index, row) {
            console.log(index, row)
        },
        // 重置table高度
        resetHeight() {
            return new Promise((resolve, reject) => {
                this.tableH = 0
                resolve()
            })
        },
        // 设置table高度
        setTableHeight() {
            this.resetHeight().then(res => {
                this.tableHeight = this.$refs.tableContainer.offsetHeight
            })
        }
    }
}
</script>
<style lang="less">
    @import './index.less';
</style>
