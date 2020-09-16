/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')
        .replace(/\+/g, ' ') +
      '"}'
  )
}

/**
 * 生成树结构
 * @param {Array} datas 数据集合
 * @param {Number} parentId 上级id
 */
export function generateTree(datas, parentId) {
  var list = []
  datas.forEach(n => {
    var obj = { ...n }
    if (obj.parentId === parentId) {
      const children = generateTree(datas, obj.id)
      if (children && children.length > 0) {
        obj.children = children
      }
      list.push(obj)
    }
  })
  return list
}
