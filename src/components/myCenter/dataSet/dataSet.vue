<template>
	<div class="dataSet-wrapper">
        <div class="data-li">
            <div class="left-bar">
                <img :src="imageUrl">
            </div>
            <div class="right-bar">
                <label class="fbtn3" for="uploads">更改头像</label>
                <input type="file" id="uploads" @change="upload($event)" style="display:none">
            </div>
        </div>
        <div class="data-li">
            <div class="left-bar">
                <span class="required">昵称</span>
            </div>
            <div class="right-bar" :class="{'is-error': isError}">
                <el-input v-model="nickname" placeholder="昵称" @blur="checkname" @focus="msgname=''"></el-input>
                <span class="msg">{{msgname}}</span>
            </div>
        </div>
        <div class="data-li">
            <div class="left-bar">
                <span class="required">手机</span>
            </div>
            <div class="right-bar">
                <!-- <div style="display:inline-block;"><el-input v-model="phone" placeholder="手机号码"></el-input></div> -->
                <div style="display:inline-block;"><span class="phone">{{mobile}}</span><span class="explain">已验证</span></div>
                <!-- <span class="msg">{{msgphone}}</span> -->
            </div>
        </div>
        <div class="data-li">
            <div class="left-bar">
                <span>坐标</span>
            </div>
            <div class="right-bar">
                <div class="block">
                    <el-cascader
                        :options="categoryList"
                        :props="cityprops"
                        v-model="selectedcityId"
                        @change="handleChange"
                        ref="cityWrapper">
                    </el-cascader>
                </div>
            </div>
        </div>
        <div class="data-li">
            <div class="left-bar">
                <span class="required">行业</span>
            </div>
            <div class="right-bar">
                <el-select v-model="selectedIndustry" placeholder="请选择" @change="industryChange">
                    <el-option
                      v-for="item in industryList"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id">
                    </el-option>
                </el-select>
                <span class="msg">{{msgindustry}}</span>
            </div>
        </div>
        <div class="data-li">
            <div class="left-bar" style="height: 240px; line-height: 40px;">
                <span>简介</span>
            </div>
            <div class="right-bar">
                <el-input type="textarea" v-model="desc" placeholder="介绍下自己吧（不超过200个字符）" @blur="checkdesc"></el-input>
                <span class="msg">{{msgdesc}}</span>
            </div>
        </div>
        <div class="data-li social-media">
            <div class="left-bar" style="height: 210px; padding-top: 30px;">
                <span>社交账号</span>
            </div>
            <div class="right-bar">
                <!-- <bindAccount :userData="userData" @bindStatus="bindStatus"></bindAccount> -->
                <ul>
                    <li class="media-li">
                        <weiboBind :userData="userData" @bindStatus="bindStatus"></weiboBind>
                    </li>
                    <li class="media-li">
                        <weixinBind :userData="userData" @bindStatus="bindStatus"></weixinBind>
                    </li>
                    <li class="media-li">
                        <qqBind :userData="userData" @bindStatus="bindStatus"></qqBind>
                    </li>
                </ul>
            </div>
        </div>
        <div class="data-li">
            <div class="left-bar">
                <div class="fbtn2" @click="saveData">保存</div>
            </div>
            <div class="right-bar">
                
            </div>
        </div>
        
    </div>
</template>

<script>
    import vueCropper from 'vue-cropper';
    import {singleImageUpload, city, dataIndustry, dataSet, dataSetsave} from '@/api/request';
    import bindAccount from './bindAccount';
    import weiboBind from './weiboBind';
    import weixinBind from './weixinBind';
    import qqBind from './qqBind';
    import common from '@/components/sign/common';

	export default {
        data() {
            return{
                user: JSON.parse(sessionStorage.getItem("user")),
                imageUrl: '',
                userData: {},
                nickname: '',
                mobile: '',
                desc: '',
                isError: false,
                categoryList: [],
                cityId: 0,
                cityprops: {
                    value: 'id',
                    label: 'name',
                },
                industryList: [],
                selectedIndustry: null,
                selectedcityId: [],
                selectedIndustryLabel: '',
                selectedcityLabel: '',
                msgname: '',
                msgdesc: '',
                msgindustry: '',
                headImg: ''
            }
        },
        created() {
            this.cityList();
            this.dataIndustry();
            this.getData();
        },
        methods: {
            async getAvatar(file){console.log(file);
                const res = await singleImageUpload(file);
                this.imageUrl = res.data;
                console.log(file);
            },
            async getData(){
                const res = await dataSet();
                console.log(res.data);
                this.userData = res.data;
                this.nickname = res.data.userName;
                this.imageUrl = res.data.photo;
                this.desc = res.data.introduce;
                this.mobile = res.data.mobile;
                //坐标
                const cid = res.data.cityId.toString();
                const pid = cid.slice(0, 2)+'0000';
                this.selectedcityId = [parseInt(pid), parseInt(cid)];
                //行业
                if(res.data.industryCode!=0){
                    this.selectedIndustry = res.data.industryCode;
                }
            },
            async cityList(){
                const res = await city();
                console.log(res.data);
                this.categoryList = res.data;
            },
            async dataIndustry(){
                const res = await dataIndustry();
                console.log(res.data);
                this.industryList = res.data;
            },
            async dataSave(params){
                const res = await dataSetsave(params);
                console.log(res);
                this.$message({
                    type: 'success',
                    message: res.data
                });
            },
            upload(event){
                console.log(event.target.files);
                const files = event.target.files[0];
                let fileData = new FormData();
                fileData.append("file", files);
                console.log(fileData);//true
                console.log(fileData.get("file"));

                const fileImage = fileData.get("file");
                //首先判断是否是图片
                if(!/image\/\w+/.test(fileImage.type)){
                    this.$message({
                        type: 'error',
                        message: '上传的不是图片'
                    });
                    return false;
                }
                //在此限制图片的大小
                const size = fileImage.size;  
                if( size > 3*1024*1024 ){  
                   this.$message({
                        type: 'error',
                        message: '图片不能大于3M'
                    });
                   return false;
                }
                this.getAvatar(fileData);
            },
            handleChange(value) {
                this.cityId = value[1];
                console.log(value);
            },
            industryChange(value) {
                console.log(value);
                this.checkindustry();
            },
            checkname() {
                var reg = /^[a-zA-Z0-9_\u4e00-\u9fa5]{1,32}$/;
                if(!reg.test(this.nickname)){
                    this.msgname = "昵称由汉字字母数字下划线组成，长度1~32";
                    this.isError = true;
                    return false;
                }else{
                    this.msgname = "";
                    this.isError = false;
                    return true;
                }
            },
            checkindustry() {
                if(!this.selectedIndustry){
                    this.msgindustry = "请选择行业";
                    return false;
                }else{
                    this.msgindustry = "";
                    return true;
                }
            },
            checkdesc() {
                if(this.desc.length>200){
                    this.msgdesc = "不得超过两百个字符";
                    return false;
                }else{
                    this.msgdesc = "";
                    return true;
                }
            },
            saveData() {
                if(this.checkname() && this.checkindustry() && this.checkdesc()){
                    const form = {
                        'photo': this.imageUrl,
                        'nickName': this.nickname,
                        'cityId': this.selectedcityId[1],
                        'industryCode': this.selectedIndustry,
                        'introduce': this.desc
                    };
                    this.selectedcityLabel = this.getCascaderObj(this.selectedcityId, this.categoryList)[1].name;
                    this.selectedIndustryLabel = this.getSelectObj(this.selectedIndustry, this.industryList).name;
                    const uform = {
                        'photo': this.imageUrl,
                        'nickName': this.nickname,
                        'cityName': this.selectedcityLabel,
                        'industry': this.selectedIndustryLabel,
                        'introduce': this.desc
                    };
                    this.dataSave(form);      //保存
                    common.putUser(uform);  //更改缓存的用户信息
                } 
            },
            bindStatus(val){
                console.log(val);
                if(val===1){
                    this.$router.push('/myCenter/dataSet');
                }
                this.getData();
            },
            getCascaderObj(val, opt) {
                return val.map(function (value) {
                    for (var itm of opt) {
                        if (itm.id == value) { opt = itm.children; return itm; }
                    }
                    return null;
                });
            },
            getSelectObj(val, opt){
                return this.industryList.find((item) => {
                    return item.id === val;
                });
            }
        },
        components: {
            bindAccount,
            weiboBind,
            weixinBind,
            qqBind
        }
	};
</script>

<style lang="scss">
    $system-color-black: #222;
    
    .dataSet-wrapper{
        padding: 40px 0 123px 0;

        .data-li{
            display: flex;
            align-items: center;
            margin-bottom: 30px;
            .left-bar{
                width: 120px;
                text-align: center;
                img{
                    width: 120px;
                    height: 120px;
                    border-radius: 100%;
                }
                span{
                    position: relative;
                    font-size: 14px;
                    color: #999;
                }
                .required{
                    &:before{
                        content: ' ';
                        display: inline-block;
                        position: absolute;
                        left: -16px;
                        top: 6px;
                        width: 6px;
                        height: 6px;
                        border-radius: 50%;
                        background: #F4523B;
                    }
                }
                .fbtn2{
                    font-size: 16px;
                }
            }
            .right-bar{
                flex: 1;
                margin-left: 32px;
                .fbtn3{
                    display: inline-block;
                    width: 118px;
                    height: 34px;
                    line-height: 34px;
                    border-radius: 20px;
                    text-align: center;
                    font-size: 16px;
                    color: #999;
                    border: 1px solid #ddd;
                    background: #fafafa;
                    cursor: pointer;
                }
                .input{
                    width: 220px;
                    height: 40px;
                    border: none;
                    background: #fafafa;
                    padding: 0 15px;
                    font-size: 14px;
                    color: $system-color-black;
                }
                .introduce{
                    width: 466px;
                    height: 210px;
                    padding: 14px 16px;
                    border: 1px solid #eee;
                }
                .phone{
                    font-size: 14px;
                    color: $system-color-black;
                    margin-left: 15px;
                }
                .explain{
                    font-size: 14px;
                    color: #999;
                    margin-left: 48px;
                }
                .msg{
                    display: inline-block;
                    margin-left: 15px;
                    font-size: 14px;
                    color: #f4523b;
                }
            }
        }
        .social-media{
            margin: 60px 0;
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
         
        .el-input{
            width: 250px;
        }
        .el-textarea{
            .el-textarea__inner{
                width: 500px;
                height: 240px;
            }
        }
        .is-error{
            .el-input__inner{
                border-color: #f4523b;
                background: #fff;
            }
        }
    }
</style>