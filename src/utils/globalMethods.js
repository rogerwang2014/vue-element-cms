/**
 * 全局公用方法
 */

class GlobalMethods {
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
}

export default GlobalMethods
