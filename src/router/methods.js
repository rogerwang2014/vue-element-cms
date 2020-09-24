import Layout from '../containers/layout'
import { generateMenuTree } from '../utils/common'
import { navigationMenuData } from '../constant'

// 遍历菜单数据生成导航菜单
export const menuRouterData = (() => {
    const menuData = generateMenuTree(navigationMenuData, 0)
    const getRouterByMenu = (data) => {
        data.forEach((item) => {
            item.hidden = true
            item.path = '/' + item.link
            item.meta = { title: item.title }
            if (item.children) {
                item.component = Layout
                item.redirect = '/' + item.children[0].link
                getRouterByMenu(item.children)
            } else {
                item.component = () => import('../containers/' + item.link)
            }
        })
        return data
    }
    return getRouterByMenu(menuData) || []
})()
