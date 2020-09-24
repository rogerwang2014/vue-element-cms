import request from '../utils/request'

export function getHomeTotal(data) {
    return request({
        url: '/homepage/hometotal',
        method: 'post',
        data
    })
}

export function getHomeDetailItem(data) {
    return request({
        url: '/homepage/detailItem',
        method: 'post',
        data
    })
}

export function getRank(data) {
    return request({
        url: '/homepage/investmentRank',
        method: 'post',
        data
    })
}
