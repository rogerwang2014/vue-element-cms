/**
 * 全局公用方法
 */

class GlobalMethods {
    /** 防抖 */
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

    /** 节流 */
    static throttle (fn, delay) {
        let timer = null
        let startTime = new Date().getTime()

        return function () {
            const context = this
            const args = arguments
            const currentTime = new Date().getTime()
            const remainning = delay - (currentTime - startTime)
            clearTimeout(timer)
            if (remainning <= 0) {
                fn.apply(context, args)
                startTime = new Date().getTime()
            } else {
                timer = setTimeout(fn, remainning)
            }
        }
    }
}

export default GlobalMethods
