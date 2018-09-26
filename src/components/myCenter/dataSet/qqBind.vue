<template>
	<div>
		<i :class="{'icon-qq': userData.qqBindStatus===0,'icon-qq-ed': userData.qqBindStatus===1}" style="font-size:30px;"></i>
        <span class="name">{{userData.qqBindNickName}}</span>
        <a class="btn" href="javascript:;" v-if="userData.qqBindStatus===0"  @click="qqbind">绑定QQ>></a>
        <a class="btn relieve" href="javascript:;" v-if="userData.qqBindStatus===1" @click="delbindAuth(0)">解除绑定</a>
	</div>
</template>

<script type='text/ecmascript-6'>
	import { qqbind, qqAuth, delbindAuth } from '@/api/request';

	export default {
		props: {
            userData: Object
    	},
    	created() {
            if(this.$route.query.code && this.$route.query.state!="bind"){
                console.log(this.$route.query.code);
                this.qqAuth(this.$route.query.code, this.$route.query.state);
                
            }
		},
		methods: {
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

<style scoped>

</style>