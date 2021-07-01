/**
 * 全局公用方法
 */

/** 作用于类的装饰器 */
function log (target) {
    target.log = (msg) => {
        console.log(msg)
    }
    return target
}

/** 作用于属性的装饰器 */
function readonly (target, name, descriptor) {
    descriptor.writable = false
    return descriptor
}

@log
class GlobalMethods {
    /** 在此处调用类属性装饰器，作用于sayHello方法 */
    @readonly
    sayHello () {
        console.log('hello ivbd!')
    }

    /**
     * 防抖
     * @param fn: {Function} 待执行函数
     * @param delay: {Number} 延迟执行的时间
     */
    static debounce (fn, delay) {
        let timer = null

        return function () {
            const context = this
            const args = arguments
            timer && clearTimeout(timer)
            timer = setTimeout(() => {
                fn.apply(context, args)
            }, delay)
        }
    }

    /**
     * 节流
     * @param fn: {Function} 待执行函数
     * @param delay: {Number} 延迟执行的时间
     * @param immediate: {Boolean} 首次触发是否立即执行
     */
    static throttle (fn, delay, immediate) {
        let canExcute = true // 是否可执行

        return function () {
            const context = this
            const args = arguments

            if (immediate) {
                immediate = false
                fn.apply(context, args)
                return
            }

            if (canExcute) {
                canExcute = false
                setTimeout(() => {
                    fn.apply(context, args)
                    canExcute = true
                }, delay)
            }
        }
    }

    /**
     * 快排
     */
    static quickSort (originalArr) {
        if (!originalArr || originalArr.length <= 1) {
            return originalArr
        }
        const arr = [...originalArr]
        const midIndex = Math.floor(arr.length / 2)
        const midNum = arr.splice(midIndex, 1)[0]
        const leftArr = []
        const rightArr = []

        arr.forEach(item => {
            if (item <= midNum) {
                leftArr.push(item)
            } else {
                rightArr.push(item)
            }
        })

        return [...GlobalMethods.quickSort(leftArr), midNum, ...GlobalMethods.quickSort(rightArr)]
    }
}

export default GlobalMethods

/**
 * 把嵌套数组转成平铺数组
 * @param data <Array>
 * @param childName <String> 子集节点的名称
 * @return newData <Array>
 */
const flatTree = (data, childName = 'children') => {
    if (!Array.isArray(data)) {
        console.warn('只支持传入数组')
        return []
    }
    return data.reduce((prev, curt) => {
        // 有子节点的话把子节点作为一级节点递归遍历
        const childs = curt[childName]?.length ? flatTree(curt[childName]) : []
        return [...prev, curt, ...childs]
    }, [])
}

const generateArr = [
    {
        id: '001',
        name: '节点1',
        children: [
            {
                id: '0011',
                name: '节点1-1',
                children: [
                    {
                        id: '00111',
                        name: '节点1-1-1'
                    }
                ]
            }
        ]
    },
    {
        id: '002',
        name: '节点2'
    }
]
console.log(flatTree(generateArr))

/**
 * 把平铺结构转成树结构
 * @param data <Array>
 * @param parentId <String> 父级id，遍历最外层的时候不用传递
 * @param <Object> { idName: 主键名称，默认id, parentIdName: 父级主键名称，默认parentId, childName: 子集名称，默认children }
 * @return newData <Array>
 */
const generateTree = (data, parentId, { idName = 'id', parentIdName = 'parentId', childName = 'children' } = {}) => {
    if (!Array.isArray(data)) {
        console.warn('只支持传入数组')
        return data
    }

    return data.reduce((prev, curt) => {
        // 子类上绑定的parentId等于父集id的时候，通过递归遍历把子集添加到父集对象上
        if (curt[parentIdName] === parentId) {
            const children = generateTree(data, curt[idName])
            if (children?.length) {
                curt[childName] = children
            }
            return [...prev, curt]
        }
        return prev
    }, [])
}

const flatArr = [
    { id: '001', name: '节点1' },
    { id: '0011', parentId: '001', name: '节点1-1' },
    { id: '00111', parentId: '0011', name: '节点1-1-1' },
    { id: '002', name: '节点2' }
]
console.log(generateTree(flatArr))
