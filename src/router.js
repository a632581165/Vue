import VueRouter from 'vue-router'

//导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemBarContainer from './components/tabbar/MemBarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopCarContainer from './components/tabbar/ShopCarContainer.vue'
import newslist from './components/news/newslist.vue'
import newsinfo from './components/news/newsinfo.vue'
import photoList from './components/photos/photoList.vue'
import photoinfo from './components/photos/photoinfo.vue'
import goodslist from './components/goods/goodslist.vue'
import goodsinfo from './components/goods/goodsinfo.vue'
import goodsDesc from './components/goods/goodsDesc.vue'
import goodsComment from './components/goods/goodsComment.vue'

var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomeContainer },
        { path: '/member', component: MemBarContainer },
        { path: '/search', component: SearchContainer },
        { path: '/shopcar', component: ShopCarContainer },
        { path: '/home/newslist', component: newslist },
        { path: '/home/newsinfo/:id', component: newsinfo },
        { path: '/home/photoList', component: photoList },
        { path: '/home/photoinfo/:id', component: photoinfo },
        { path: '/home/goodslist', component: goodslist },
        { path: '/home/goodsinfo/:id', component: goodsinfo},
        { path: '/home/goodsdesc/:id', component: goodsDesc, name: 'goodsdesc' },
        { path: '/home/goodscomment/:id',component:goodsComment ,name:'goodscomment' }
    ],
    linkActiveClass: 'mui-active'//覆盖默认的路由高亮的类

})

export default router