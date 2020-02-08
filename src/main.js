import Vue from 'vue'

import App from './app.vue'

//按需导入Mint-ui的header组件
import { Header } from 'mint-ui'
//导入Mint-ui的css
import 'mint-ui/lib/style.css'
Vue.component(Header.name,Header)

//导入MUI
import './lib/mui/css/mui.min.css'

var vm = new Vue({
    el: "#app",
    render: c => c(App)
})