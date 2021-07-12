/**
 * 一、接口请求结果的处理
 */

/**
 * 模拟接口请求（接口请求支持promise的前提下）
 * @param key 模块参数
 */
function fakeQuery (key) {
    return new Promise((resolve, reject) => {
        const responseDuration = Math.random().toFixed(2) * 1000
        setTimeout(() => {
            resolve(`after ${responseDuration} ms, ${key} responsed: some data`)
        }, responseDuration)
    })
}

/**
 * 链式调用（假设有三个接口part1, part2, part3是串行调用关系）
 */
!async function withChain () {
    // 不使用async写法（伪代码），嵌套着写还是有种回调地狱的感觉
    // fakeQuery('part1').then(...fakeQuery('part2').then(...fakeQuery('part3').then(...)))

    // 搭配async实现
    const part1 = await fakeQuery('part1')
    // 使用part1的响应结果作为参数
    const part2 = await fakeQuery('part2')
    // 使用part2的响应结果作为参数
    const part3 = await fakeQuery('part3')
    console.log({
        part1,
        part2,
        part3
    })
    /**
     * 打印：
     * {
     *      part1: 'after 840 ms, part1 responsed: some data',
     *      part2: 'after 90 ms, part2 responsed: some data',
     *      part3: 'after 280 ms, part3 responsed: some data'
     *  }
     */
}()

/**
 * 链式和异步混合（假设有三个接口part1, part2, part3, 等part1响应之后才调用其他接口）
 */
!async function maybeChain () {
    const part1 = await fakeQuery('part1')

    Promise.all([
        fakeQuery('part2 after part1'),
        fakeQuery('part3 after part1')
    ])

    // Promise.all需要捕获异常，不然中间某个方法的
}()

/**
 * 某面试题：第一秒打印1，第二秒打印2， 第三秒打印3
 */
function log (num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(num)
            resolve()
        }, 1000)
    })
}

!async function logChain () {
    await log(1)
    await log(2)
    await log(3)
}()
