/* Axios网络请求库 */
import axios from 'axios'

import {ElMessage} from 'element-plus'
import cache from '@/plugins/cache'
import {tansParams} from '@/utils/ruoyi'
import errorCode from '@/utils/errorCode'

// axios初始化
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
const service = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 30000,
})

// 请求拦截
service.interceptors.request.use(config => {
    // get请求
    if (config.method === 'get' && config.params) {
        let url = config.url + '?' + tansParams(config.params);
        config.params = {};
        config.url = url;
    }
    // post请求
    if (config.method === 'post' || config.method === 'put') {
        const requestObj = {
            url: config.url,
            data: typeof config.data === 'object' ? JSON.stringify(config.data) : config.data,
            time: new Date().getTime()
        }
        const sessionObj = cache.session.getJSON('sessionObj')
        if (sessionObj === undefined || sessionObj === null || sessionObj === '') {
            cache.session.setJSON('sessionObj', requestObj)
        } else {
            const s_url = sessionObj.url;                
            const s_data = sessionObj.data;              
            const s_time = sessionObj.time;
            // 小于此时间（ms）视为重复提交
            const interval = 1000;
            if (s_data === requestObj.data && s_url === requestObj.url && requestObj.time - s_time < interval ) {
                const message = 'Data is being processed, please do not resubmit!';
                console.warn(`[${s_url}]: ` + message)
                return Promise.reject(new Error(message))
            } else {
                cache.session.setJSON('sessionObj', requestObj)
            }
        }
    }
    return config
}, error => {
    console.log(error)
    Promise.reject(error)
})

// 响应拦截
service.interceptors.response.use(res => {
    // 二进制数据直接返回
    if (res.request.responseType === 'blob' || res.request.responseType === 'arraybuffer') {
        return res
    }
    // 状态码
    const code = res.data.code || 200;
    // 信息
    const msg = errorCode[code] || res.data.msg || errorCode[400]
    if (code === 401) {
        // TODO 401的登出处理
        console.log("登录失败");
        return Promise.reject(new Error(errorCode[401]))
    }else if(code === 500) {
        ElMessage({
            message: msg,
            type: 'error'
        })
        return Promise.reject(new Error(msg))
    }else {
        return Promise.resolve(res.data)
    }
},error => {
    console.log(error)
    let {message} = error;
    if (message == "Network Error") {
        message = "Network Error";
    }else if (message.includes("timeout")) {
        message = "Request Timeout";
    }else if (message.includes("Request failed with status code")) {
        message = "Api " + message.substr(message.length - 3) + " error";
    }
    ElMessage({
        message: message,
        type: 'error',
        duration: 5000
    })
    return Promise.reject(error)
})


export default service