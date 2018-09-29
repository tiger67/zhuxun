<template>
	<div class="bind-wrapper">
		<ul>
            <li class="media-li">
                <i class="icon-weibo"></i>
                <span class="name">{{userData.wbBindNickName}}</span>
                <a class="btn" href="javascript:;" @click="weibobind" v-if="userData.wbBindStatus===0">绑定微博>></a>
                <a class="btn relieve" href="javascript:;" v-if="userData.wbBindStatus===1" @click="delbindAuth(1)">解除绑定</a>
            </li>
            <li class="media-li">
                <i class="icon-weixin-ed"></i>
                <span class="name">{{userData.wxBindNickName}}</span>
                <a class="btn" href="javascript:;" v-if="userData.wxBindStatus===0">绑定微信>></a>
                <a class="btn relieve" href="javascript:;" v-if="userData.wxBindStatus===1" @click="delbindAuth(2)">解除绑定</a>
            </li>
            <li class="media-li">
                <i class="icon-qq" style="font-size:30px;"></i>
                <span class="name">{{userData.qqBindNickName}}</span>
                <a class="btn" href="javascript:;" v-if="userData.qqBindStatus===0"  @click="qqbind">绑定QQ>></a>
                <a class="btn relieve" href="javascript:;" v-if="userData.qqBindStatus===1" @click="delbindAuth(0)">解除绑定</a>
            </li>
        </ul>
	</div>
</template>

<script type='text/ecmascript-6'>
	import { weibobind, weiboAuth, qqbind, qqAuth, delbindAuth } from '@/api/request';

	export default {
		props: {
            userData: Object
    	},
    	data() {
    		return {
    		}
    	},
		created() {
            if(this.$route.query.authType=='qq'){
                console.log(this.$route.query.authType);
                this.qqAuth(this.$route.query.code, this.$route.query.state);
                
            }
			if(this.$route.query.code){
				console.log(this.$route.query.code);
				this.weiboAuth(this.$route.query.code);	
			}
		},
		methods: {
            async weibobind() {
                const res = await weibobind();
                console.log(res);
                window.location.href = res.data;
            },
			async weiboAuth(code) {
				const params = { 'code': code };
				const res = await weiboAuth(params);
				console.log(res);
				this.$emit('bindStatus', 1);
			},
            async qqbind() {
                const res = await qqbind();
                console.log(res);
                window.location.href = res.data;
            },
            async qqAuth(code,state) {
                const params = { 'code': code, 'state': state };
                const res = await qqAuth(params);
                console.log(res);
                this.$emit('bindStatus', 1);
            },
            async delbindAuth(id) {
                const res = await delbindAuth(id);
                console.log(res);
                this.$emit('bindStatus', 0);
            }
		}
	};
</script>

<style scoped lang="scss">
	.bind-wrapper{
		.media-li{
            width: 450px;
            padding: 24px 0;
            border-bottom: 1px dashed #ccc;
            i{
                font-size: 32px;
            }
            .name{
                font-size: 14px;
                color: #999;
                margin-left: 10px;
                line-height: 32px;
                display: inline-block;
                vertical-align: top;
            }
            .btn{
                font-size: 14px;
                color: #4285F4;
                float: right;
                cursor: pointer;
                &.relieve{
                    color: #F4523B;
                }
            }
        }
	}
</style>