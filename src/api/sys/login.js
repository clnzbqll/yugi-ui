import request from '@/utils/request'

// 登录
export function login() {
    return request({
        url: '/api/sys/login',
        method: 'get',
    })
}