/**
 * 公共变量
 */

// 导航菜单数据
export const navigationMenuData = [
    {
        id: 1,
        parentId: 0,
        title: '非标数据',
        icon: 'el-icon-s-order',
        name: 'nonStandardData',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    }, {
        id: 2,
        parentId: 1,
        title: '日净值、估值',
        icon: 'el-icon-s-marketing',
        name: 'dailyNetValue',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    }, {
        id: 3,
        parentId: 1,
        title: '公司追踪',
        icon: 'el-icon-s-help',
        name: 'companyTrack',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    },
    {
        id: 4,
        parentId: 1,
        title: 'SOURCING分析',
        icon: 'el-icon-s-data',
        name: 'sourcingAnalyse',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    }, {
        id: 5,
        parentId: 1,
        title: '行业分布',
        icon: 'el-icon-s-grid',
        name: 'industrialDistribution',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    }, {
        id: 6,
        parentId: 1,
        title: '资产配置',
        icon: 'el-icon-s-cooperation',
        name: 'assetManagment',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    }, {
        id: 7,
        parentId: 1,
        title: '存量产品提醒',
        icon: 'el-icon-s-opportunity',
        name: 'storageRemind',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    }, {
        id: 8,
        parentId: 0,
        title: '基金研究',
        icon: 'el-icon-data-analysis',
        name: 'fundAnalyse',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    },
    {
        id: 9,
        parentId: 8,
        title: '公募产品库',
        icon: 'el-icon-suitcase-1',
        name: 'gmLibrary',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    },
    {
        id: 10,
        parentId: 8,
        title: '私募基金池',
        icon: 'el-icon-suitcase',
        name: 'smLibrary',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    },
    {
        id: 11,
        parentId: 10,
        title: '基金分级池1-机会追踪',
        icon: 'el-icon-position',
        name: 'opportunityChase',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    }, {
        id: 12,
        parentId: 10,
        title: '基金分级池2-尽调',
        icon: 'el-icon-chat-line-square',
        name: 'dueDiligence',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    }, {
        id: 13,
        parentId: 10,
        title: '基金分级池3-投/售',
        icon: 'el-icon-set-up',
        name: 'buyAndSell',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    }, {
        id: 14,
        parentId: 8,
        title: '机构',
        icon: 'el-icon-office-building',
        name: 'institution',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    }, {
        id: 15,
        parentId: 8,
        title: '基金经理',
        icon: 'el-icon-s-custom',
        name: 'fundManager',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    }, {
        id: 16,
        parentId: 0,
        title: '尽调管理',
        icon: 'el-icon-notebook-2',
        name: 'dueDiligenceManagment',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    }, {
        id: 17,
        parentId: 0,
        title: '组合管理',
        icon: 'el-icon-pie-chart',
        name: 'combinationManagment',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    }, {
        id: 18,
        parentId: 0,
        title: '报告管理',
        icon: 'el-icon-document',
        name: 'reportManagment',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    }, {
        id: 19,
        parentId: 18,
        title: '走访报告',
        icon: 'el-icon-document-copy',
        name: 'interviewReport',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    }, {
        id: 20,
        parentId: 0,
        title: 'FOF投管',
        icon: 'el-icon-files',
        name: 'fofManagment',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    },
    {
        id: 21,
        parentId: 0,
        title: '系统管理',
        icon: 'el-icon-mouse',
        name: 'systemManagment',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    },
    {
        id: 22,
        parentId: 21,
        title: '菜单管理',
        icon: 'el-icon-menu',
        name: 'menuManagment',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    },
    {
        id: 23,
        parentId: 21,
        title: '元素管理',
        icon: 'el-icon-news',
        name: 'elementManagment',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    },
    {
        id: 24,
        parentId: 21,
        title: '用户与权限管理',
        icon: 'el-icon-turn-off',
        name: 'userAndPermission',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    },
    {
        id: 25,
        parentId: 21,
        title: '组织管理',
        icon: 'el-icon-school',
        name: 'organizationManagment',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    },
    {
        id: 26,
        parentId: 21,
        title: '接口管理',
        icon: 'el-icon-coordinate',
        name: 'apiManagment',
        createdTime: '2020-08-17 15:50:51',
        createdUser: 'admin'
    }
]

// 表格数据
export const tableData = [
    {
        date: '2016-05-02',
        name: '王小虎',
        fundName: '工银货币',
        fundCode: '481001',
        benefit: '16.66%',
        fundType: '股票型',
        address: '上海市普陀区金沙江路 1518 弄'
    }, {
        date: '2016-05-04',
        name: '王小虎',
        fundName: '工银货币',
        fundCode: '481001',
        benefit: '16.66%',
        fundType: '股票型',
        address: '上海市普陀区金沙江路 1517 弄'
    }, {
        date: '2016-05-01',
        name: '王小虎',
        fundName: '工银货币',
        fundCode: '481001',
        benefit: '16.66%',
        fundType: '股票型',
        address: '上海市普陀区金沙江路 1519 弄'
    }, {
        date: '2016-05-03',
        name: '王小虎',
        fundName: '工银货币',
        fundCode: '481001',
        benefit: '16.66%',
        fundType: '股票型',
        address: '上海市普陀区金沙江路 1516 弄'
    }, {
        date: '2016-05-03',
        name: '王小虎',
        fundName: '工银货币',
        fundCode: '481001',
        benefit: '16.66%',
        fundType: '股票型',
        address: '上海市普陀区金沙江路 1516 弄'
    }, {
        date: '2016-05-03',
        name: '王小虎',
        fundName: '工银货币',
        fundCode: '481001',
        benefit: '16.66%',
        fundType: '股票型',
        address: '上海市普陀区金沙江路 1516 弄'
    }, {
        date: '2016-05-03',
        name: '王小虎',
        fundName: '工银货币',
        fundCode: '481001',
        benefit: '16.66%',
        fundType: '股票型',
        address: '上海市普陀区金沙江路 1516 弄'
    }, {
        date: '2016-05-03',
        name: '王小虎',
        fundName: '工银货币',
        fundCode: '481001',
        benefit: '16.66%',
        fundType: '股票型',
        address: '上海市普陀区金沙江路 1516 弄'
    }, {
        date: '2016-05-03',
        name: '王小虎',
        fundName: '工银货币',
        fundCode: '481001',
        benefit: '16.66%',
        fundType: '股票型',
        address: '上海市普陀区金沙江路 1516 弄'
    }, {
        date: '2016-05-03',
        name: '王小虎',
        fundName: '工银货币',
        fundCode: '481001',
        benefit: '16.66%',
        fundType: '股票型',
        address: '上海市普陀区金沙江路 1516 弄'
    }, {
        date: '2016-05-03',
        name: '王小虎',
        fundName: '工银货币',
        fundCode: '481001',
        benefit: '16.66%',
        fundType: '股票型',
        address: '上海市普陀区金沙江路 1516 弄'
    }, {
        date: '2016-05-03',
        name: '王小虎',
        fundName: '工银货币',
        fundCode: '481001',
        benefit: '16.66%',
        fundType: '股票型',
        address: '上海市普陀区金沙江路 1516 弄'
    }
]

export const roleData = [
    {
        roleId: '001',
        roleName: '超级管理员'
    }, {
        roleId: '002',
        roleName: '管理员'
    }, {
        roleId: '003',
        roleName: '用户组1'
    }, {
        roleId: '004',
        roleName: '用户组2'
    }, {
        roleId: '005',
        roleName: '用户组3'
    }
]

export const groupUsers = [
    {
        userName: '用户1',
        userId: '0001'
    }, {
        userName: '用户2',
        userId: '0002'
    }, {
        userName: '用户3',
        userId: '0003'
    }, {
        userName: '用户4',
        userId: '0004'
    }, {
        userName: '用户5',
        userId: '0005'
    }, {
        userName: '用户2',
        userId: '0002'
    }, {
        userName: '用户3',
        userId: '0003'
    }, {
        userName: '用户4',
        userId: '0004'
    }, {
        userName: '用户5',
        userId: '0005'
    }, {
        userName: '用户2',
        userId: '0002'
    }, {
        userName: '用户3',
        userId: '0003'
    }, {
        userName: '用户4',
        userId: '0004'
    }, {
        userName: '用户5',
        userId: '0005'
    }, {
        userName: '用户2',
        userId: '0002'
    }, {
        userName: '用户3',
        userId: '0003'
    }, {
        userName: '用户4',
        userId: '0004'
    }, {
        userName: '用户5',
        userId: '0005'
    }, {
        userName: '用户2',
        userId: '0002'
    }, {
        userName: '用户3',
        userId: '0003'
    }, {
        userName: '用户4',
        userId: '0004'
    }, {
        userName: '用户5',
        userId: '0005'
    }, {
        userName: '用户2',
        userId: '0002'
    }, {
        userName: '用户3',
        userId: '0003'
    }, {
        userName: '用户4',
        userId: '0004'
    }, {
        userName: '用户5',
        userId: '0005'
    }, {
        userName: '用户2',
        userId: '0002'
    }, {
        userName: '用户3',
        userId: '0003'
    }, {
        userName: '用户4',
        userId: '0004'
    }, {
        userName: '用户5',
        userId: '0005'
    }, {
        userName: '用户2',
        userId: '0002'
    }, {
        userName: '用户3',
        userId: '0003'
    }, {
        userName: '用户4',
        userId: '0004'
    }, {
        userName: '用户5',
        userId: '0005'
    }, {
        userName: '用户2',
        userId: '0002'
    }, {
        userName: '用户3',
        userId: '0003'
    }, {
        userName: '用户4',
        userId: '0004'
    }, {
        userName: '用户5',
        userId: '0005'
    }
]
