<template>
    <div class="shopcar-container">
        <div class="goods-list">
            <!-- 商品列表区域 -->
            <div class="mui-card" v-for="item in goodslist" :key="item.id">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <mt-switch></mt-switch>
                        <img :src="item.thumb_path" alt="">
                        <div class="info">
                            <h1>{{item.title}}</h1>
                            <p>
                                <span class="price">￥{{item.sell_price}}</span>
                                <numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox>
                                <a href="#">删除</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 结算区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import numbox from '../subcomponent/shopcar_numbox.vue'
    export default {
        data() {
            return {
                goodslist:[] //购物车商品数据
            }
        },
        created() {
            this.getGoodsList()
        },
        methods: {
            // 根据商品id获取购物车列表
            getGoodsList() {
                var idArr = [];
                this.$store.state.car.forEach(item => {
                    idArr.push(item.id);
                })
                if (idArr.length <= 0) {
                    return
                } else {
                    this.$http.get('api/goods/getshopcarlist/' + idArr.join(",")).then(result => {
                        if(result.body.status == 0){
                            this.goodslist = result.body.message;
                        }
                    })
                }
            }
        },
        components: {
            numbox
        }
    }
</script>

<style lang="scss" scoped>
    .shopcar-container {
        background: #eee;
        overflow: hidden;

        .goods-list {
            .mui-card-content-inner {
                display: flex;
                align-items: center;
            }

            img {
                width: 60px;
                height: 60px;
            }

            h1 {
                font-size: 14px;
            }

            .info {
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                .price {
                    color: red;
                    font-weight: bold;
                }
            }
        }
    }
</style>