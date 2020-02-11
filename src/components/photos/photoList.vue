<template>
    <div>
        <!-- 顶部滑动条区域 -->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl"
                class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item',item.id == 0 ? 'mui-active' : '']" v-for="item in cates" :key="item.id">
                        {{item.title}}
                    </a>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    // 导入Mui的Js文件
    import mui from '../../lib/mui/js/mui.min.js'
    export default {
        data() {
            return {
                cates: []//所有分类的数组
            }
        },
        created() {
            this.getAllCategory();
        },
        mounted() {
            // 初始化滑动控件
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.005
            })
        },
        methods: {
            getAllCategory() {
                // 获取所有图片分类
                this.$http.get('api/getimgcategory').then(result => {
                    if (result.body.status == 0) {
                        result.body.message.unshift({
                            title: '全部',
                            id: '0'
                        });
                        this.cates = result.body.message;
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
</style>