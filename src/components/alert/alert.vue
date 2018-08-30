<template>
	<transition name='fade'>
	  	<div class="alert" v-if="showAlert">
	  		
		    <div class="wrap">
		      	<div class="head">{{title}}</div>
			      	<div class="body">
				        <slot>
				          	<p>{{message}}</p>
				        </slot>
			      	</div>
		      	<div class="foot">
			        <div v-if="type === 'confirm'">
			          	<button class="btn-base" @click="selectBtn(1)">确定</button>
			          	<button class="btn-gray" @click="selectBtn(0)">取消</button>
			        </div>
			        <div v-else-if="type === 'inform'">
			          	<button class="btn-base" @click="selectBtn(2)">知道了</button>
			        </div>
		      	</div>
		    </div>
		    
	  	</div>
	</transition>
</template>

<script type='text/ecmascript-6'>
	export default {
	  	name: 'alert',
	  	data() {
		    return {
		      	showAlert: false,
		    };
		},
	  	props: {
		    title: {
		      	type: String,
		      	default: '提示',
		    },
		    message: {
		      	type: String,
		    },
		    type: {  // 可以有confirm, 和inform两个类型
		      	type: String,
		      	default: 'confirm',
		      	validator(value) {
		        	return value === 'confirm' || value === 'inform';
		      	},
		    },
		    sureBtn: {
		      	type: Function,
		    },
		    cancelBtn: {
		      	type: Function,
		    },
		    context: {
		      	type: Object,
		    },
	  	},
	  	methods: {
		    cancel() {
		      	if (this.cancelBtn) {
		      		console.log(this.context);
		        	this.cancelBtn.apply(this.context);
		      	}
		      	this.close();
		    },
		    sure() {
		      	if (this.sureBtn) {
		        	this.sureBtn.apply(this.context);
		      	}
		      	this.close();
		    },
		    selectBtn(type) {
		    	this.$emit('select-btn',type);
		    	document.body.style.overflow='auto';
		    	this.close();
		    },
		    show() {
		      	this.showAlert = true;
		    },
		    close() {
		      	this.showAlert = false;
		    },
		},
	};
</script>

<style scoped lang="scss">
	.alert {
		position: fixed;
	    left: 0;
	    top: 0;
	    bottom: 0;
	    right: 0;
	    z-index: 2000;
	    background-color: rgba(0, 0, 0, 0.61);
		&.fade-enter-active{
			transition: all 0.3s;	
		}
		&.fade-enter-active{
			.wrap{
				transition: transform 0.3s;
				transform: scale(0.7);
			}
		}
		&.fade-enter-to{
			.wrap{
				transform: scale(1);
			}
		}
		// &.fade-leave-active{
		// 	transition: all 0.1s;
		// }
	}
	.wrap {
		position: absolute;
		top: 50%;
		left: 50%;
		margin-left: -150px;
		margin-top: -76px;
		z-index: 1002;
		min-width: 300px;
		min-height: 152px;
		background: #fff;
		border-radius: 4px;
		
	}
	.head {
		padding: 0 80px 0 20px;
	    height: 42px;
	    line-height: 42px;
	    border-bottom: 1px solid #eee;
	    font-size: 14px;
	    color: #333;
	    overflow: hidden;
	    background-color: #F8F8F8;
	    border-radius: 2px 2px 0 0;
	}
	.body {
		position: relative;
	    padding: 20px;
	    line-height: 24px;
	    word-break: break-all;
	    overflow: hidden;
	    font-size: 14px;
	    overflow-x: hidden;
	    overflow-y: auto;
	}
	.foot {
	  	text-align: right;
	    padding: 0 15px 12px;
	    pointer-events: auto;
	    user-select: none;
	    -webkit-user-select: none;
	  	button {
	    	height: 28px;
		    line-height: 28px;
		    margin: 5px 5px 0;
		    padding: 0 15px;
		    border: 1px solid #dedede;
		    background-color: #fff;
		    color: #333;
		    border-radius: 2px;
		    font-weight: 400;
		    cursor: pointer;
		    text-decoration: none;
		    outline: none;
	    	&:last-child {
	      		margin-right: 0;
	    	}
	    	&.btn-base{
	    		border-color: #ffc81f;
    			background-color: #ffc81f;
    			&:hover{
    				background-color: #ffc81f;
    			}
	    	}
	    	&.btn-gray:hover{
	    		background-color: #fafafa;
	    	}
	  	}
	}
</style>