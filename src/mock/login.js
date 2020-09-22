// import Mock from 'mockjs'
import { userMap } from './user'

function login(userInfo) {
    const { username } = JSON.parse(userInfo.body)
    return userMap[username]
}

function logout() {
    return 'success'
}

export { login, logout }
