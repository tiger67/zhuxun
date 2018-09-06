<template>
    <div class="label-wrapper">
        <span v-for="item in tagRspVos">{{item.tagName}}</span>
    </div>
</template>

<script>
    export default {
        props: {
            tagRspVos: Array
        }
    };
</script>

<style lang="scss">
    .label-wrapper{
        display: inline;
        span{
            display: inline-block;
            height: 28px;
            line-height: 28px;
            padding: 0 12px;
            margin-left: 20px;
            background: #f4f7fb;
            border-radius: 14px;
            vertical-align: middle;
            font-size: 14px;
            color: #aeb9cb;
        }
    }
</style>