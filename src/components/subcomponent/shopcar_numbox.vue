<template>
    <div class="mui-numbox" data-numbox-min='1' style="height:25px;">
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" :value="initcount" @change="countChanged" ref="numbox">
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.min.js'
    export default {
        mounted() {
            // 初始化数字选择框组件
            mui('.mui-numbox').numbox();
        },
        methods: {
            // 每当文本框数据被修改,立即通过事件传递给父组件(这里是传递给vuex.store里)
            countChanged() {
                this.$store.commit('updateGoodsInfo', {
                    id: this.goodsid,
                    count: this.$refs.numbox.value
                });
            }
        },
        props: ['initcount', 'goodsid']
    }
</script>

<style lang="scss" scoped>

</style>