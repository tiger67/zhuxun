<template>
    <div>
        <el-carousel trigger="click" height="280px">
            <el-carousel-item v-for="(item,i) in items" :key="i">
                <a :href="item.link" target="_blank" class="link"><img class="banner-img" :src="item.adImg" /></a>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>

    import {slide} from '@/api/request'

    export default {
        data() {
            return {
                items: []
            }
        },
        created() {
            this.getData();
        },
        methods: {
            async getData() {
                const params = { channel: 1};
                const res = await slide(params);
                this.items = res.data;
            }
        },
        mounted() {
            
        }

    };
</script>

<style lang="scss">

    .banner-wrapper{
        .banner{
            float: left;
            width: 820px;
            height: 280px;
            background: #f2f2f2;
            
            .el-carousel__indicators{
                left: auto;
                right: 16px;
                bottom: 8px;
                transform: none;
            }
            .el-carousel__button{
                width: 20px;
                height: 3px;
            }
            .swiper-pagination-bullets{
                width: auto;
                right: 16px;
                .swiper-pagination-bullet{
                    width: 20px;
                    height: 3px;
                    border-radius: 0;
                    background: rgba(255,255,255,.3);
                }
                .swiper-pagination-bullet-active{
                    background: #fff;
                }
            }
        }
    }
</style>