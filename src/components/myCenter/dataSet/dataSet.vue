<template>
	<div class="dataSet-wrapper">
        <div class="cropper-wrapper" v-if="isShowCropper" @click="showCropper">
            <div class="cropper-content">
                <div class="cropper">
                    <vueCropper ref="cropper" :img="option.img" :outputSize="option.size" :outputType="option.outputType" :autoCrop="option.autoCrop" :autoCropWidth="option.autoCropWidth" :autoCropHeight="option.autoCropHeight" :fixed="option.fixed" :fixedNumber="option.fixedNumber" :centerBox="option.centerBox"></vueCropper>
                </div>
                <div class="fbtn1 m-follow-btn" @click="finish('blob')">确定</div>
            </div>
        </div>
        <div class="data-li">
            <div class="left-bar">
                <img src="../../../assets/tou2@2x.png">
            </div>
            <div class="right-bar">
                <label class="fbtn3" for="uploads">更改头像</label>
                <input type="file" id="uploads" style="position:absolute; clip:rect(0 0 0 0);" accept="image/png, image/jpeg, image/gif, image/jpg" @change="uploadImg($event, 1)">
            </div>
        </div>
        <div class="data-li">
            <div class="left-bar">
                <span class="required">昵称</span>
            </div>
            <div class="right-bar">
                <input class="input" placeholder="昵称" v-model="nickname" @blur="checkname" @focus="msgname=''"/> 
                <span class="msg">{{msgname}}</span>
            </div>
        </div>
        <div class="data-li">
            <div class="left-bar">
                <span class="required">手机</span>
            </div>
            <div class="right-bar">
                <input class="input" placeholder="手机号码" v-model="phone" @blur="checkphone" @focus="msgphone=''"/>
                <!-- <span class="phone">135****6345</span><span class="explain">已验证</span> -->
                <span class="msg">{{msgphone}}</span>
            </div>
        </div>
        <div class="data-li">
            <div class="left-bar">
                <span>坐标</span>
            </div>
            <div class="right-bar">
                <select class="input">
                    <option :value="index" v-for="item,index in city">{{item}}</option>
                </select>
            </div>
        </div>
        <div class="data-li">
            <div class="left-bar">
                <span class="required">行业</span>
            </div>
            <div class="right-bar">
                <select class="input">
                    <option value ="volvo">Volvo</option>
                    <option value ="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
        </div>
        <div class="data-li">
            <div class="left-bar" style="height: 240px; line-height: 40px;">
                <span>简介</span>
            </div>
            <div class="right-bar">
                <textarea v-model="desc" placeholder="介绍下自己吧（不超过200个字符）" class="input introduce" @blur="checkdesc" @focus="msgdesc=''"></textarea>
                <span class="msg">{{msgdesc}}</span>
            </div>
        </div>
        <div class="data-li social-media">
            <div class="left-bar">
                <span>社交账号</span>
            </div>
            <div class="right-bar">
                <ul>
                    <li class="media-li">
                        <i class="icon-weibo"></i>
                        <span class="name"></span>
                        <span class="btn">绑定微博>></span>
                    </li>
                    <li class="media-li">
                        <i class="icon-weixin-ed"></i>
                        <span class="name">筑讯小飞侠</span>
                        <span class="btn relieve">解除绑定</span>
                    </li>
                    <li class="media-li">
                        <i class="icon-qq" style="font-size:30px;"></i>
                        <span class="name"></span>
                        <span class="btn">绑定微博>></span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="data-li">
            <div class="left-bar">
                <div class="fbtn2">保存</div>
            </div>
            <div class="right-bar">
                
            </div>
        </div>
        
    </div>
</template>

<script>
    import vueCropper from 'vue-cropper';

    const reg = /^1[0-9][0-9]{9}$/;

	export default {
        data() {
            return{
                nickname: '',
                phone: '',
                city:{
                    "sz":"宿州",
                    "cz":"滁州",
                    "la":"六安",
                    "hn":"淮南",
                },
                desc: '',
                msgname: '',
                msgphone: '',
                msgdesc: '',
                headImg: '',
                option: {
                    img: '',                //裁剪图片的地址
                    size: 1,                //裁剪生成图片的质量
                    outputType: 'png',      //裁剪生成图片的格式
                    autoCrop: true,         //是否默认生成截图框
                    autoCropWidth: 200,     //默认生成截图框宽度
                    autoCropHeight: 200,    //默认生成截图框高度
                    fixed: true,            //是否开启截图框宽高固定比例
                    fixedNumber: [1, 1],    //截图框的宽高比例
                    centerBox: true         //截图框是否被限制在图片里面
                },
                isShowCropper: false,
                fileUpload: null,
                fileinfo: {},
                fileName: '',  //本机文件地址
            }
        },
        methods: {
            showCropper() {
                this.isShowCropper = false;
            },
            checkname() {
                if(this.nickname === ''){
                    this.msgname = "昵称不能为空";
                    return false;
                }else if(this.nickname.length>10){
                    this.msgname = "昵称不能超过十个字符";
                    return false;
                }else{
                    this.msgname = "";
                    return true;
                }
            },
            checkphone() {
                // if(this.phone === ''){
                //     this.msgphone = "手机号码不能为空";
                // }
                if(!reg.test(this.phone)){
                    this.msgphone = "手机号码格式不正确";
                    return false;
                }else{
                    this.msgphone = "";
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
            uploadImg (e, num) {
                //上传图片
                console.log('uploadImg');
                // this.option.img
                var file = e.target.files[0];
                this.fileName = file.name;
                if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
                     alert('图片类型必须是.gif,jpeg,jpg,png,bmp中的一种')
                     return false
                 }
                var reader = new FileReader();
                reader.onload = (e) => {
                    let data
                    if (typeof e.target.result === 'object') {
                        // 把Array Buffer转化为blob 如果是base64不需要
                        data = window.URL.createObjectURL(new Blob([e.target.result]))
                    } else {
                        data = e.target.result
                    }
                    if (num === 1) {
                        this.option.img = data
                    } else if (num === 2) {
                        this.example2.img = data
                    }
                }
                // 转化为base64
                // reader.readAsDataURL(file)
                // 转化为blob
                reader.readAsArrayBuffer(file);
                this.isShowCropper = true;
            },
             finish(type) { 
                console.log('finish');
                let formData = new FormData();
                // 输出 
                if (type === 'blob') { 
                  this.$refs.cropper.getCropBlob((data) => { 
                    let img = window.URL.createObjectURL(data) ;
                    console.log(img);
                    this.model = true; 
                    this.modelSrc = img; 
                    formData.append("file", data, this.fileName);
                    console.log(data);
                    console.log(this.fileName);
                    console.log(formData);
                    this.isShowCropper = false;
                    // this.$http.post(Api.uploadSysHeadImg.url, formData, {contentType: false, processData: false, headers:{‘Content-Type‘: ‘application/x-www-form-urlencoded‘}})
                    // .then((response)=>{
                    //   var res = response.data;
                    //   if(res.success == 1){
                    //     $(‘#btn1‘).val(‘‘);
                    //     _this.imgFile = ‘‘;
                    //     _this.headImg = res.realPathList[0];  //完整路径
                    //     _this.uploadImgRelaPath = res.relaPathList[0];  //非完整路径
                    //     _this.$message({　　//element-ui的消息Message消息提示组件
                    //       type: ‘success‘,
                    //       message: ‘上传成功‘
                    //     });
                    //   }
                    // })
                  }) 
                } else { 
                  this.$refs.cropper.getCropData((data) => { 
                    this.model = true; 
                    this.modelSrc = data; 
                  }) 
                } 
              }, 
            // 确定裁剪图片
            onCubeImg() {
              // 获取cropper的截图的base64 数据
              this.$refs.cropper.getCropData(data => {
                this.fileinfo.url = data
                this.isShowCropper = false

               //先将显示图片地址清空，防止重复显示
                this.option.img = ''

               //将剪裁后base64的图片转化为file格式
                let file = this.convertBase64UrlToBlob(data)
                file.name = this.fileUpload.name

                //将剪裁后的图片执行上传
                this.uploadFile(file).then(res => {
                  this.form.content = res.file_id    //将上传的文件id赋值给表单from的content
                })

              })
            },
            // 将base64的图片转换为file文件
            convertBase64UrlToBlob(urlData) {
              let bytes = window.atob(urlData.split(',')[1]);//去掉url的头，并转换为byte
              //处理异常,将ascii码小于0的转换为大于0
              let ab = new ArrayBuffer(bytes.length);
              let ia = new Uint8Array(ab);
              for (var i = 0; i < bytes.length; i++) {
                ia[i] = bytes.charCodeAt(i);
              }
              return new Blob([ab], { type: 'image/jpeg' });
            }
        },
        components: {
            vueCropper
        }
	};
</script>

<style lang="scss">
    $system-color-black: #222;
    
    .dataSet-wrapper{
        padding: 40px 0 123px 0;
        .cropper-wrapper{
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,.8);
            z-index: 1000;
            text-align: center;
            .cropper-content{
                width: 500px;
                height: 420px;
                margin: 0 auto;
                margin-top: 14%;
                background: #fff;
                padding-top: 80px;
                .cropper{
                    width: 350px;
                    height: 300px;
                    margin: 0 auto;
                    
                }
                .fbtn1{
                    margin-top: 30px;
                }
            }
            
        }
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
                    line-height: 32px;
                    cursor: pointer;
                    &.relieve{
                        color: #F4523B;
                    }
                }
            }
        }
        
    }
</style>