//入口文件
import Vue from 'vue'
//导入路由的包
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'
// 导入Vuex
import Vuex from 'vuex'
Vue.use(Vuex)

//模拟本地存储
var car = JSON.parse(localStorage.getItem('car') || '[]');
var store = new Vuex.Store({
    state: {
        car: car //购物车数组;
    },
    mutations: {
        // 添加到购物车
        addToCar(state, goodsinfo) {
            var flag = false;
            state.car.some(item => {
                if (item.id == goodsinfo.id) {
                    item.count += parseInt(goodsinfo.count);
                    flag = true;
                    return true;
                }
            });
            if (!flag) {
                state.car.push(goodsinfo);
            }
            //模拟购物车，本地存储
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        // 购物车已有商品更新商品数据
        updateGoodsInfo(state, goodsinfo) {
            state.car.some(item => {
                if (item.id == goodsinfo.id) {
                    item.count = parseInt(goodsinfo.count)
                    return true
                }
            })
            localStorage.setItem('car', JSON.stringify(state.car))
        }
    },
    getters: {
        // app.vue徽标获取购物车商品总数
        getAllCount(state) {
            var c = 0;
            state.car.forEach(item => {
                c += item.count
            })
            return c;
        },
        // 获取购物车每件商品的数量分别多少
        getGoodsCount(state) {
            var o = {};
            state.car.forEach(item => {
                o[item.id] = item.count;
            })
            return o;
        }
    }
})

//定义全局过滤器
import moment from 'moment'
Vue.filter('dateFormat', function (dataStr, patten = 'YYYY-MM-DD HH:MM:SS') {
    return moment(dataStr).format(patten)
})

//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005';
//设置全局post时候表单数据格式组织形式
Vue.http.options.emulateJSON = true;

//导入App的根组件
import App from './app.vue'

//按需导入Mint-ui的header组件
// import { Header,Swipe,SwipeItem,Button } from 'mint-ui'
// //导入Mint-ui的css
// import 'mint-ui/lib/style.css'
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name,Swipe)
// Vue.component(SwipeItem.name,SwipeItem)
// Vue.component(Button.name,Button)
// // 导入懒加载
// import { Lazyload } from 'mint-ui'
// Vue.use(Lazyload)

//全局导入mint-ui
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'
// 安装缩略图插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

//导入MUI
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

var vm = new Vue({
    el: "#app",
    render: c => c(App),
    router,//挂载路由对象到vm实例
    store
})