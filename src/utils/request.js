import axios from 'axios'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

const service = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 30000
})

// request拦截器
service.interceptors.request.use(config => {
    console.log("执行1");
    console.log(config);
    // get请求映射params参数
    if (config.method === 'get' && config.params) {
        console.log("执行2");
        // let url = config.url + '?' + tansParams(config.params);
        // url = url.slice(0, -1);
        // config.params = {};
        // config.url = url;
    }
    return config
}, error => {
    console.log(error)
    Promise.reject(error)
})

export default service