<template>
	<div>
		<i :class="{'icon-weibo': userData.qqBindStatus===0,'icon-weibo-ed': userData.qqBindStatus===1}"></i>
        <span class="name">{{userData.wbBindNickName}}</span>
        <a class="btn" href="javascript:;" @click="weibobind" v-if="userData.wbBindStatus===0">绑定微博>></a>
        <a class="btn relieve" href="javascript:;" v-if="userData.wbBindStatus===1" @click="delbindAuth(1)">解除绑定</a>
	</div>
</template>

<script type='text/ecmascript-6'>
	import { weibobind, weiboAuth, delbindAuth } from '@/api/request';

	export default {
		props: {
            userData: Object
    	},
    	created() {
			if(this.$route.query.state=="bind" && this.$route.query.code){
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
            async delbindAuth(id) {
                const res = await delbindAuth(id);
                console.log(res);
                this.$emit('bindStatus', 0);
            }
		}
	};
</script>

<style scoped>

</style>