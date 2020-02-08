//入口文件
import Vue from 'vue'
//导入路由的包
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

//导入App的根组件
import App from './app.vue'

//按需导入Mint-ui的header组件
import { Header,Swipe,SwipeItem } from 'mint-ui'
//导入Mint-ui的css
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)

//导入MUI
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

var vm = new Vue({
    el: "#app",
    render: c => c(App),
    router//挂载路由对象到vm实例
})