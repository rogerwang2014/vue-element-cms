<template>
    <div class="homepage-container">
        <div class="home-total">
            <div class="home-total-item" v-for="(item, index) of homeTotalData" :key="index">
                <div class="wrapper-item">
                    <p class="title">{{item.title}}</p>
                    <p class="value digital-number" ref="countup">{{item.value}}</p>
                    <color-line :id='"main"+index' :color="item.color" :optionData="item.data" width="180px"
                                height="70px"></color-line>
                </div>
            </div>
        </div>

        <el-row class="home-part1" :gutter="0">
            <el-col :span="12">
                <div class="near-six-month">
                    <div class="title">
                        <p class="title-value">平台近6个月的交易记录</p>
                    </div>
                    <div class="content" ref="near-six-month-chart">
                        <near-six-month width="100%" height="100%"></near-six-month>
                    </div>
                </div>
            </el-col>
            <el-col :span="8" class="detail-item-wrapper">
                <div class="home-detail-item" :style="{ background: item.color}" v-for="(item, index) of homeDetailItem"
                     :key="index">
                    <div class="name">{{item.name}}</div>
                    <div class="value">
                        <span class="num">{{(item.value / 10000).toFixed(2)}}</span>万
                    </div>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="rank">
                    <div class="title">
                        <p class="title-value">投资龙虎榜</p>
                    </div>
                    <div class="content" ref="rankContent">
                        <ul class="wrapper-user">
                            <li v-for="(item, index) of rankList" :key="index" class="user-item">
                                <img class="avatar" :src="item.avatar" width="35" height="35" loading="lazy" alt="">
                                <div class="user-info">
                                    <p class="name">{{item.name}}</p>
                                    <p class="value">{{item.value}}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </el-col>
        </el-row>

        <el-row class="home-part2" :gutter="0">
            <el-col :span="12">
                <div class="financing-sprinkled">
                    <div class="title">
                        <p class="title-value">投资金额及融资期限分布图示</p>
                    </div>
                    <div class="content" ref="">
                        <!-- 投资 -->
                        <div class="investment">
                            <span class="title">投资金额比例</span>
                            <investment-pie width="100%" height="50%"></investment-pie>
                            <div class="detail">
                <span class="detail-item">
                  1万元以下
                  <br>
                  33.04%
                </span>
                                <span class="detail-item">
                  1-10万
                  <br>
                  30.57%
                </span>
                                <span class="detail-item">
                  10-40万
                  <br>
                  23.08%
                </span>
                                <span class="detail-item">
                  40万以上
                  <br>
                  13.31%
                </span>
                            </div>
                        </div>
                        <!-- 融资 -->
                        <div class="financing">
                            <span class="title">融资期限</span>
                            <financing-pie width="100%" height="50%"></financing-pie>
                            <div class="detail">
                <span class="detail-item">
                  0-3个月
                  <br>
                  18.91%
                </span>
                                <span class="detail-item">
                  3-6个月
                  <br>
                  29.41%
                </span>
                                <span class="detail-item">
                  6-12个月
                  <br>
                  32.77%
                </span>
                                <span class="detail-item">
                  12个月以上
                  <br>
                  18.91%
                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </el-col>

            <el-col :span="12">
                <div class="bad-debt">
                    <div class="title">
                        <p class="title-value">平台坏账及逾期情况</p>
                    </div>
                    <div class="content">
                        <div class="bad">
                            <div class="total">
                                <div class="total1">
                                    <p>坏账金额</p>
                                    <p><span class="num">0</span>元</p>
                                </div>
                                <div class="total2">
                                    <p>坏账比例</p>
                                    <p><span class="num">0</span>%</p>
                                </div>
                            </div>
                            <div class="chart">
                                <p class="title">本平台自2015年1月上线以来无坏账</p>
                                <p class="line"></p>
                                <p class="line"></p>
                            </div>
                        </div>
                        <div class="overdue">
                            <div class="total">
                                <div class="total1">
                                    <p>逾期金额</p>
                                    <p><span class="num">0</span>元</p>
                                </div>
                                <div class="total2">
                                    <p>逾期比例</p>
                                    <p><span class="num">0</span>%</p>
                                </div>
                            </div>
                            <div class="chart">
                                <p class="title">本平台自2015年1月上线以来无逾期</p>
                                <p class="line"></p>
                                <p class="line"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import CountUp from 'countup.js'
import { getHomeTotal, getHomeDetailItem, getRank } from '../../api/homepage'
import ColorLine from '../../components/color-line'
import NearSixMonth from './near-six-month'
import BScroll from 'better-scroll'
import InvestmentPie from './investment-pie'
import FinancingPie from './financing-pie'

export default {
    components: {
        ColorLine,
        NearSixMonth,
        InvestmentPie,
        FinancingPie
    },
    data() {
        return {
            homeTotalData: [],
            homeDetailItem: [],
            rankList: [],
            numAnim: null
        }
    },
    methods: {
        initCountUp() {
            this.$nextTick(() => {
                const countupLength = this.$refs.countup.length
                let i = 0
                for (i; i < countupLength; i++) {
                    this.numAnim = new CountUp(this.$refs.countup[i], 0, this.$refs.countup[i].innerText, 2, 1.5)
                    this.numAnim.start()
                }
            })
        },
        _initScroll() {
            if (!this.scroll) {
                this.scroll = new BScroll(this.$refs.rankContent, {
                    scrollY: true,
                    click: true,
                    scrollbar: {
                        fade: false,
                        interactive: true // 1.8.0 新增
                    },
                    mouseWheel: {
                        speed: 20,
                        invert: false,
                        easeTime: 300
                    }
                })
            } else {
                this.scroll.refresh()
            }
        }
    },
    created() {
        this.$store.getters.name && this.$message({
            message: 'Welcome! ' + this.$store.getters.name,
            type: 'success'
        })
        // 获取头部hometotal
        getHomeTotal().then((resp) => {
            this.homeTotalData = resp.data
            this.initCountUp()
        }).catch(() => {
            console.log('获取home-total出现异常')
        })
        // 获取 detailItem
        getHomeDetailItem().then(resp => {
            this.homeDetailItem = resp.data
        }).catch(() => {
            console.log('获取detailItem出现异常')
        })
        // 获取投资榜
        getRank().then(resp => {
            this.rankList = resp.data
            this._initScroll()
        }).catch(() => {
            console.log('获取rankList出现异常')
        })
    }
}
</script>
<style scoped lang="less">
    @import "index";
</style>
