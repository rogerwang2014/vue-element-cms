// import axios from 'axios'
import jsonp from '@/common/jsonp'
// import { isDev } from '../../utils'

// 获取当前运行环境
// const isDev = getEnviroument()

export function getImage() {
    // 正在热映
    const url = 'https://douban.uieee.com/v2/movie/in_theaters'
    // 即将上映
    const url2 = 'https://douban.uieee.com/v2/movie/coming_soon'
    const option = {
        param: 'callback'
    }
    const data = {
        start: 0, // 数据的开始项
        count: 10, // 单页条数
        city: '深圳' // 城市
    }
    return Promise.all([jsonp(url, data, option), jsonp(url2, data, option)])
}
