<template>
    <div>
        <!-- 顶部滑动条区域 -->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl"
                class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a @tap="getPhotoListByCateId(item.id)"
                        :class="['mui-control-item',item.id == 0 ? 'mui-active' : '']" v-for="item in cates"
                        :key="item.id">
                        {{item.title}}
                    </a>
                </div>
            </div>

        </div>
        <!-- 图片列表区域 -->
        <ul class="photo-list">
            <router-link :to="'/home/photoinfo/' + item.id" tag="li" v-for="item in list" :key="item.id">
                <img v-lazy="item.img_url" src="" alt="">
                <div class="info">
                    <h1 class="infotitle">{{item.title}}</h1>
                    <div class="infobody">{{item.zhaiyao}}</div>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
    // 导入Mui的Js文件
    import mui from '../../lib/mui/js/mui.min.js'
    export default {
        data() {
            return {
                cates: [],//所有分类的数组
                list: []//图片列表数组
            }
        },
        created() {
            this.getAllCategory();
            // 默认进入页面请求第一页数据
            this.getPhotoListByCateId(0)
        },
        mounted() {
            // 初始化滑动控件
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.005
            })
        },
        methods: {
            // 获取所有图片分类
            getAllCategory() {
                this.$http.get('api/getimgcategory').then(result => {
                    if (result.body.status == 0) {
                        result.body.message.unshift({
                            title: '全部',
                            id: '0'
                        });
                        this.cates = result.body.message;
                    }
                })
            },
            // 获取图片列表信息
            getPhotoListByCateId(cateId) {
                // 根据分类ID获取图片列表
                this.$http.get('api/getimages/' + cateId).then(result => {
                    if (result.body.status == 0) {
                        this.list = result.body.message;
                    }
                })
            }
        }
    }

</script>

<style lang="scss" scoped>
    * {
        touch-action: pan-y;
    }

    .photo-list {
        padding: 10px;
        margin: 0;
        padding-bottom: 0;

        li {
            list-style: none;
            background: #ccc;
            text-align: center;
            margin-bottom: 10px;
            box-shadow: 0 0 9px #999;
            position: relative;

            img[lazy=loading] {
                width: 40px;
                height: 300px;
                margin: auto;
            }

            img {
                width: 100%;
                vertical-align: middle;
            }

            .info {
                color: white;
                position: absolute;
                bottom: 0px;
                background:rgba(0,0,0,.4);
                max-height:84px;
                .infotitle {
                    text-align: left;
                    font-size: 14px;
                }

                .infobody {
                    font-size: 13px;
                }
            }
        }
    }
</style>