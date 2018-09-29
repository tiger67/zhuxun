<template>
	<div>
        <i :class="{'icon-weixin': userData.qqBindStatus===0,'icon-weixin-ed': userData.qqBindStatus===1}"></i>
        <span class="name">{{userData.wxBindNickName}}</span>
        <a class="btn" href="javascript:;" v-if="userData.wxBindStatus===0">绑定微信>></a>
        <a class="btn relieve" href="javascript:;" v-if="userData.wxBindStatus===1" @click="delbindAuth(2)">解除绑定</a>
	</div>
</template>

<script type='text/ecmascript-6'>
	export default {
		props: {
            userData: Object
    	},
    	created() {

    	},
    	methods: {

    	}
	};
</script>

<style scoped>

</style>