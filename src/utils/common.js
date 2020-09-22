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
            const parentItem = datas.find((item) => item.id === parentId)
            obj.link = (parentItem ? (parentItem.name + '/') : '') + n.name
            const children = generateMenuTree(datas, obj.id)
            if (children && children.length > 0) {
                obj.children = children
            }
            list.push(obj)
        }
    })
    return list
}

/**
 * tree数据扁平化
 * 添加深度
 * 添加父级节点(不能添加，只能使用父节点ID，添加echart会爆栈)
 */
export const flatTree = (data, treeMap = [], depth = 0) => {
    if (!(data && data.length)) return
    depth++
    return data.reduce((acc, cur) => {
        cur.depth = depth
        acc.push(cur)
        if (cur.children && cur.children.length) {
            flatTree(cur.children, treeMap, depth)
        }
        return acc
    }, treeMap)
}
