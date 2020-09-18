/**
 * 把平铺的菜单数据生成树结构
 * @param {Array} datas 数据集合
 * @param {Number} parentId 上级id
 */
export const generateMenuTree = (datas, parentId) => {
    var list = []
    datas.forEach(n => {
        var obj = { ...n }
        if (obj.parentId === parentId) {
            const children = generateMenuTree(datas, obj.id)
            if (children && children.length > 0) {
                obj.children = children
            }
            list.push(obj)
        }
    })
    return list
}
