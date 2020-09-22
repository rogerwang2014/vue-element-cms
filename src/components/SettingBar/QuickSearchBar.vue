<template>
    <div class="quickSearchBar">
        <i
            class="el-icon-search"
            v-if="!showSearchBar"
            @click="handleShowSearchBar"
        />
        <div class="searchInput" @click="(e) => e.stopPropagation()">
            <el-autocomplete
                v-model="state"
                :fetch-suggestions="querySearchAsync"
                placeholder="请输入内容"
                @select="handleSelect"
                prefix-icon="el-icon-search"
                v-if="showSearchBar"
            />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showSearchBar: false,
            dataList: [],
            state: '',
            timeout: null
        }
    },
    watch: {
        showSearchBar(value) {
            if (value) {
                console.log('addEventListener')
                document.body.addEventListener('click', this.handleCloseSearchBar)
            } else {
                console.log('removeEventListener')
                document.body.removeEventListener('click', this.handleCloseSearchBar)
            }
        }
    },
    methods: {
        loadAll() {
            return [
                { value: 'aaa', address: '长宁区新渔路144号' },
                { value: 'bbb', address: '上海市长宁区淞虹路661号' },
                { value: 'ccca', address: '上海市普陀区真北路988号创邑金沙谷6号楼113' }
            ]
        },
        querySearchAsync(queryString, cb) {
            var dataList = this.dataList
            var results = queryString ? dataList.filter(this.createStateFilter(queryString)) : dataList

            clearTimeout(this.timeout)
            this.timeout = setTimeout(() => {
                cb(results)
            }, 1000 * Math.random())
        },
        createStateFilter(queryString) {
            return (state) => {
                return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
            }
        },
        handleSelect(item) {
            console.log(item)
        },
        handleShowSearchBar(e) {
            e.stopPropagation()
            this.showSearchBar = true
        },
        handleCloseSearchBar() {
            this.showSearchBar = false
        }
    },
    mounted() {
        this.dataList = this.loadAll()
    }
}
</script>

<style lang="less">
    @import './QuickSearchBar';
</style>
