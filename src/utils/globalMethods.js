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
