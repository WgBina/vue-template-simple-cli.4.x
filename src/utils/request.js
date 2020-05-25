import axios from 'axios';

let pendingAjax = [];
const fastClickMsg = '数据请求中，请稍后';
const CancelToken = axios.CancelToken;
const removePendingAjax = (url, type) => {
    const index = pendingAjax.findIndex(i => i.url === url);
    if (index > -1) {
        type === 'req' && pendingAjax[index].c(fastClickMsg);
        pendingAjax.splice(index, 1);
    }
};

// create an axios instance
const service = axios.create({
    // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    // timeout: 50000 // request timeout
});

// request interceptor
service.interceptors.request.use(
    config => {
        // do something before request is sent

        //防止重复请求
        const url = config.url;
        removePendingAjax(url, 'req');
        config.cancelToken = new CancelToken(c => {
            pendingAjax.push({
                url,
                c
            });
        });

        return config;
    },
    error => {
        // do something with request error
        // console.log(error) // for debug
        return Promise.reject(error);
    }
);

// response interceptor
service.interceptors.response.use(
    response => {
        // const res = response.data

        // if the custom code is not 20000, it is judged as an error.
        // if (res.code !== 20000) {
        //   Message({
        //     message: res.message || 'Error',
        //     type: 'error',
        //     duration: 5 * 1000
        //   })
        //   return Promise.reject(new Error(res.message || 'Error'))
        // } else {
        //   return res
        // }
        removePendingAjax(response.config.url, 'resp')

        return response;
    },
    error => {
        console.log('err' + error); // for debug
        // Message({
        //   message: error.message,
        //   type: 'error',
        //   duration: 5 * 1000
        // })
        return Promise.reject(error);
    }
);

export default service;
