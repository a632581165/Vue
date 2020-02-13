//入口文件
import Vue from 'vue'
//导入路由的包
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

//定义全局过滤器
import moment from 'moment'
Vue.filter('dateFormat',function(dataStr,patten = 'YYYY-MM-DD HH:MM:SS'){
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
    router//挂载路由对象到vm实例
})