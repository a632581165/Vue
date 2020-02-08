import VueRouter from 'vue-router'

//导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemBarContainer from './components/tabbar/MemBarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopCarContainer from './components/tabbar/ShopCarContainer.vue'

var router = new VueRouter({
    routes:[
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemBarContainer},
        {path:'/search',component:SearchContainer},
        {path:'/shopcar',component:ShopCarContainer}
    ],
    linkActiveClass:'mui-active'//覆盖默认的路由高亮的类

})

export default router