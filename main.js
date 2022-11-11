import Vue from 'vue'
import App from './App'
import { createSSRApp } from 'vue'
export function createApp() {
   const app = createSSRApp(App)
   return {
      app
   }
}
//后端api地址
// import {
// 	mapMutations,mapState
// } from 'vuex';

Vue.prototype.$unishow = "https://www.baidu.com";
const websiteUrl = "https://www.baidu.com";

// 平台号
// #ifdef APP-PLUS
Vue.prototype.$platform = 'APP-PLUS';
// #endif
// #ifdef H5
Vue.prototype.$platform = 'H5';
// #endif
// #ifdef MP-WEIXIN
Vue.prototype.$platform = 'MP-WEIXIN';
// #endif
// #ifdef MP-ALIPAY
Vue.prototype.$platform = 'MP-ALIPAY';
// #endif
// #ifdef MP-BAIDU
Vue.prototype.$platform = 'MP-BAIDU';
// #endif
// #ifdef MP-TOUTIAO
Vue.prototype.$platform = 'MP-TOUTIAO';
// #endif


// 提示
const msg = (title, duration = 3000, mask = false, icon = 'none') => {
    //统一提示方便全局修改
    if (Boolean(title) === false) {
        return;
    }
    uni.showToast({
        title,
        duration,
        mask,
        icon
    });
    setTimeout(function() {
        uni.hideToast();
    }, duration)
}

// 手机号中间四位替换成****
const phoneHandle = (tel)=>{
    // let tel = 18810399133;
    tel = "" + tel;
    let tel1 = tel.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2")
    return tel1
}

// 返回上一页
const prePage = () => {
    let pages = getCurrentPages();
    let prePage = pages[pages.length - 2];
    // #ifdef H5
    return prePage;
    // #endif
    return prePage.$vm;
}
const json = type=>{
    //模拟异步请求数据
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(Json[type]);
        }, 500)
    })
};
const promisify = api => {
    return function(options, ...params) {
        return new Promise(function(resolve, reject) {
            api(
                Object.assign({}, options, {
                    success: resolve,
                    fail: reject
                }),
                ...params
            );
        });
    };
};


// 检查有没有登录

// 深拷贝
const deepCopy = (p, c) => {
    var c = c || {};
    for (var i in p) {
        if (typeof p[i] === "object") {
            c[i] = (p[i].constructor === Array) ? [] : {};
            deepCopy(p[i], c[i])
        } else {
            c[i] = p[i]
        }
    }
    return c;
}


// 同步网络请求

const request = async (url, method = 'GET', data = {},header = {}, showMsg = true) => {

    // console.log(res,'请求数据333');

    if (url == '/pay/submit'){
        console.log(res);
    }
    return new Promise((reslove, reject)=>{
        uni.request({
            url: Vue.prototype.$unishow + url,
            method: method,
            header: header,
            data: data,
            timeout: 10000,
            success: (res) => {

                reslove(res.data)
            },
            fail: (err) => {
                console.log(err,2)
                reject(err)
            }
        });
    })

}
// 跳转判断是否登录
const navTo = (url, check = true) => {

    uni.navigateTo({
        url: url
    });
}

Vue.config.productionTip = false
Vue.prototype.$fire = new Vue();
Vue.prototype.$api = {
    msg,
    json,
    prePage,
    request,
    deepCopy,
    navTo,
    phoneHandle
};


// #ifdef MP-WEIXIN
// 微信小程序
const wechatMiniLogin = async () => {
    msg('登录中');
    let [error, loginRes] = await uni.login({
        provider: 'weixin'
    });
    if (loginRes.hasOwnProperty('code')) {
        let data = await request('/user/authSession', 'GET', {
            code: loginRes.code
        });
        if (data) {
            if (data.hasOwnProperty('userInfo') && data.userInfo.token && data.userInfo.token != '') {
                Vue.prototype.$store.commit('login', data.userInfo);
                //Vue.prototype.$store.mutations.login(data.userInfo)
            }
        }
        return true;
    } else {
        msg('登录失败');
        return false;
    }
};
Vue.prototype.$wechatMiniLogin = wechatMiniLogin;
// #endif

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
