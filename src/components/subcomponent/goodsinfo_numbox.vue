<template>
    <!-- 因为:父组件传值max给子组件,子组件获取到父组件传值之后的 :max是通过get异步请求获取到的对象设置的,
        在获取之前子组件已经挂载了这个属性,组件获取到值是空的 -->
    <!-- 所以绑定一个whtch监听这个值，最后一次捕获到的值再更新到组件 -->
    <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="numbox">
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.min.js'
    export default {
        mounted() {
            // 初始化数字选择框组件
            mui('mui-numbox').numbox();
        },
        methods: {
            // 每当文本框数据被修改,立即通过事件传递给父组件
            countChanged() {
                this.$emit('getCount', parseInt(this.$refs.numbox.value));
            }
        },
        props: ['max'],
        watch: {
            // 属性监听
            'max': function (newVal, oldVal) {
                mui(".mui-numbox").numbox().setOption("max",newVal)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>