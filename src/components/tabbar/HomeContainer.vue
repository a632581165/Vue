<template>
  <div>
    <swiper :lunbotuList="lunbotuList" :isfull=true></swiper>
    <!-- 六宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../images/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
          <img src="../../images/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodslist">
          <img src="../../images/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="#">
          <img src="../../images/menu4.png" alt="">
          <div class="mui-media-body">留言反馈</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="#">
          <img src="../../images/menu5.png" alt="">
          <div class="mui-media-body">视频专区</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="#">
          <img src="../../images/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui'
  import swiper  from '../subcomponent/swiper.vue'
  export default {
    data() {
      return {
        lunbotuList: []
      }
    },
    created() {
      this.getLunbotu();
    },
    methods: {
      getLunbotu() {
        this.$http.get('api/getlunbo').then(result => {
          if (result.body.status == 0) {
            this.lunbotuList = result.body.message;
          } else {
            Toast('加载轮播图失败')
          }
        })
      }
    },
    components:{
      swiper
    }
  }
</script>

<style lang="scss" scoped>
  .mint-swipe {
    height: 200px;

    .mint-swipe-item {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .mui-table-view {
    background: white !important;
    border: 0 !important;

    .mui-table-view-cell {
      border: 0 !important;

      img {
        width: 60px;
        height: 60px;
      }

      .mui-media-body {
        font-size: 13px !important;
      }
    }
  }
</style>