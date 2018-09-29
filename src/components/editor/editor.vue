<template>
    <div>
        <vHeader></vHeader>
        <div class="editor-wrapper">
            <div class="editor-content">
                <div class="operate-bar">
                    <div class="btn-bar">
                        <span>文章信息</span>
                        <div class="btn-wrapper">
                            <div class="fbtn2 write-fbtn2" @click="saveDraft" v-show="!saving">保存</div>
                            <div class="fbtn2 write-fbtn2"  v-show="saving">保存中...</div>
                            <div class="fbtn2" @click="release">发布文章</div>
                        </div>
                    </div>
                    <div class="form-bar">
                        <div class="form-item" :class="{'is-error': isError}">
                            <el-input v-model="title" placeholder="请输入文章标题" @blur="checktitle" autofocus="true"></el-input>
                            <span class="msg">{{msgtitle}}</span>
                        </div>
                        <div class="form-item">
                            <el-select v-model="circleValue" placeholder="请选择圈子分类" @change="circleChange">
                                <el-option
                                  v-for="item in circleOption"
                                  :key="item.tagId"
                                  :label="item.tagName"
                                  :value="item.tagId">
                                </el-option>
                            </el-select>
                            <el-select v-model="labelValue" placeholder="请选择标签类型" @change="labelChange">
                                <el-option
                                  v-for="item in labelOption"
                                  :key="item.tagId"
                                  :label="item.tagName"
                                  :value="item.tagId">
                                </el-option>
                            </el-select>
                            <span class="msg">{{msgtag}}</span>
                        </div>
                    </div>
                </div>
                <div class="main">
                    <div class="head">
                        <span>编辑文章</span>
                    </div>
                    <div id="toolbar" class="toolbar"></div>
                    <div id="editor" class="editor"> <!--可使用 min-height 实现编辑区域自动增加高度-->
                        
                    </div>
                </div>
            </div> 
        </div>
    </div>
</template>

<script>
    import header from '@/components/header/header';
    import Editor from 'wangeditor';
    import { getTag, addArticle, redact, singleImageUpload} from '@/api/request';

    export default {
        name: 'App',
        data () {
            return {
                title: '',
                editor: '',
                editorContent: '',
                editorUpImgUrl: 'http://xxxx',  // 编辑器插入的图片上传地址
                saving: false,
                initializeContent: '',
                circleValue: '',
                labelValue: '',
                circleOption: [],
                labelOption: [],
                msgtitle:'',
                msgtag: '',
                isError: false,
                saving: false
            }
        },
        mounted() {
            this.initEditor()
        },
        created() {
            this.getTag();

            let rID = this.$route.params.id;
            if(rID!=0){
                this.redactArticle(rID); 
            }
             
        },
        methods: {
            async getTag() {
                const res = await getTag();
                console.log(res.data);
                this.circleOption = res.data;
                console.log(this.circleOption);
            },
            forTag(id){
                const array = this.circleOption;
                let tid = 0;
                for(let i=0; i<array.length; i++){
                    for(let j=0; j<array[i].tagRspVos.length; j++){
                        tid = array[i].tagRspVos[j].tagId;
                        //console.log(tid+'--'+id)
                        if(tid==id){
                            //console.log(i+'--'+j);
                            this.circleValue = array[i].tagId;
                            //console.log(this.circleValue);
                            this.circleChange(this.circleValue);
                            this.labelValue = id;
                        }
                    }
                    
                }
            },
            circleChange(val) {
                console.log(val);
                this.labelValue = '';
                for( let i=0; i<this.circleOption.length; i++ ){
                    if(this.circleOption[i].tagId===val){
                        this.labelOption = this.circleOption[i].tagRspVos;
                    }
                } 
            },
            labelChange() {
                console.log(this.labelValue);
                this.checkTag();
            },
            checktitle() {
                var reg = /^[0-9a-zA-Z_\u4e00-\u9fa5\, \.\，\。\《\》\[\]\!\@\# \$\%\^\(\)\+\-\#\￥\&\—\、]+$/;
                if(!reg.test(this.title)){
                    this.msgtitle = "请正确填写标题";
                    this.isError = true;
                    return false;
                }else{
                    this.msgtitle = "";
                    this.isError = false;
                    return true;
                }
            },
            checkTag() {
                if(!this.circleValue||!this.labelValue){
                    this.msgtag = "请选择标签";
                    return false;
                }else{
                    this.msgtag = "";
                    return true;
                }
            },
            async initEditor () { 
                this.editor = new Editor('#toolbar', '#editor'); /* 括号里面的对应的是html里div的id */
                /* 配置菜单栏 */  
                this.editor.customConfig.menu = [
                    'head',  // 标题
                    'bold',  // 粗体
                    'fontSize',  // 字号
                    'fontName',  // 字体
                    'italic',  // 斜体
                    'underline',  // 下划线
                    'strikeThrough',  // 删除线
                    'foreColor',  // 文字颜色
                    'backColor',  // 背景颜色
                    'link',  // 插入链接
                    'list',  // 列表
                    'justify',  // 对齐方式
                    'quote',  // 引用
                    'emoticon',  // 表情
                    'image',  // 插入图片
                    'table',  // 表格
                    'code',  // 插入代码
                    'undo',  // 撤销
                    //'redo'  // 重复
                ] ;   
                this.editor.customConfig.uploadImgMaxLength = 5; /* 限制一次最多上传 5 张图片 */ 
                this.editor.customConfig.uploadImgMaxSize = 3 * 1024 * 1024; /* 将图片大小限制为 3M 默认为5M */ 
                //this.editor.config.uploadImgUrl = this.editorUpImgUrl;  // 图片上传地址

                /* 自定义图片上传（支持跨域和非跨域上传，简单操作）*/ 
                this.editor.customConfig.customUploadImg = async (files, insert) => { 
                    /* files 是 input 中选中的文件列表 */ 
                    let formData = new FormData(); 
                    formData.append('file', files[0]) ;
                    let res = await singleImageUpload(formData) ; /* 后台提供的上传图片的接口 */
                    /* insert 是编辑器自带的 获取图片 url 后，插入到编辑器的方法 上传代码返回结果之后，将图片插入到编辑器中*/ 
                    insert(res.data);
                } ;
                this.editor.customConfig.onchange = (html) => {
                  this.editorContent = html;
                  console.log('html')
                  this.saveDraft();
                    /* html 即变化之后的内容 */ 
                } ;
                this.editor.create(); /* 创建编辑器 */ 
                console.log(this.editor);
                this.editor.$textElem.html(this.initializeContent);  // 初始化内容
            },
            async redactArticle(rID){
                const params = { 'articleId': rID };
                const res = await redact(params);
                console.log(res.data);
                this.title = res.data.title;
                this.initializeContent = res.data.content;
                this.forTag(res.data.tagId);
                this.editor.$textElem.html(this.initializeContent);  // 初始化内容
            },
            async addArticle(params){
                const res = await addArticle(params);
                console.log(res);
                this.articleId = res.data;
                // this.$message({
                //     type: 'success',
                //     message: '保存成功',
                //     duration: 1000
                // });
                this.$router.push('/editor/'+ res.data);
            },
            async saveDraft() { 
                this.editorContent = this.editor.$textElem.html(); // 获取编辑器 内容区内容
                if( this.checktitle() && this.checkTag() ){
                    if(this.editor.$textElem.text()==''){
                        this.$message({
                            type: 'error',
                            message: '文章内容不能为空',
                            duration: 1000
                        });
                        return false;
                    }
                    const params = {
                        'articleId': this.$route.params.id, 
                        'title': this.title, 
                        'tagId': this.labelValue, 
                        'content': this.editorContent, 
                        'type': 0
                    };
                    console.log(params);
                    //this.saving = true;console.log(this.saving )
                    const res = await addArticle(params);
                    console.log(res);
                    if(this.$route.params.id == 0){  //写文章时id为0，保存后需替换成返回的id
                        this.$router.push('/editor/'+ res.data);
                    }
                    this.$message({
                        type: 'success',
                        message: '保存成功',
                        duration: 1000
                    });
                    //setTimeout(function(){ this.saving = false; console.log(this.saving ) },500);
                }
                
                //this.editorContent = this.editor.$txt.html();  // 获取 html 格式
                // this.editor.$txt.text();  // 获取纯文本
                // this.editor.$txt.formatText();  // 获取格式化后的纯文本
            },
            async release(){
                this.editorContent = this.editor.$textElem.html(); // 获取编辑器 内容区内容
                if( this.checktitle() && this.checkTag() ){console.log(this.editorContent)
                    if(this.editor.$textElem.text()==''){
                        this.$message({
                            type: 'error',
                            message: '文章内容不能为空',
                            duration: 1000
                        });
                        return false;
                    }
                    const _this = this;
                    const params = {
                        'articleId': this.$route.params.id, 
                        'title': this.title, 
                        'tagId': this.labelValue, 
                        'content': this.editorContent, 
                        'type': 2 
                    };
                    console.log(params);
                    const res = await addArticle(params);
                    console.log(res);
                    this.$message({
                        type: 'success',
                        message: '发布成功',
                        duration: 1000,
                        onClose: function(){
                            _this.$router.push('/myCenter/myArticles');
                        }
                    });
                }
            },
            gg() {
                this.$fetch('/api/v2/movie/top250')
                .then((response) => {
                    console.log(response)
                })
            }
        },
        components: {
            'vHeader': header
        }
    };
</script>

<style lang="scss">
    $system-color-black: #222;
    .el-select-dropdown{
        z-index: 12000!important;
    }
    .editor-wrapper{
        width: 100%;
        height: 100%;
        background: #eee;
        padding-top: 60px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        .editor-content{
            position: relative;
            width: 1200px;
            margin: 0 auto;
            padding: 30px 0;
            .operate-bar{
                height: 230px;
                background: #fff; 
                margin-bottom: 10px;
                .btn-bar{
                    font-size: 14px;
                    height: 60px;
                    line-height: 60px;
                    padding: 0 30px;
                    border-bottom: 1px solid #eee;
                    color: $system-color-black;
                    .btn-wrapper{
                        float: right;
                        .write-fbtn2{
                            width: 118px;
                            height: 34px;
                            line-height: 34px;
                            border: 1px solid #eee;
                            background: #fff;
                            margin-right: 18px;
                        }
                    }
                }
                .form-bar{
                    padding: 0 30px;
                    .form-item{
                        position: relative;
                        margin-top: 30px;
                        padding-left: 30px;
                        .el-input{
                            .el-input__inner{
                                width: 900px;
                            }
                        }
                        .el-select{
                            margin-right: 28px;
                            .el-input__inner{
                                width: 300px;
                            }
                        }
                        &:before{
                            content: ' ';
                            display: inline-block;
                            position: absolute;
                            left: 0;
                            top: 17px;
                            width: 6px;
                            height: 6px;
                            border-radius: 50%;
                            background: #F4523B;
                        }
                        .msg{
                            display: inline-block;
                            margin-left: 15px;
                            font-size: 14px;
                            color: #f4523b;
                        }
                        &.is-error{
                            .el-input__inner{
                                border-color: #f4523b;
                                background: #fff;
                            }
                        }
                    }
                }
            }
            .main{
                background: #fff;
                .head{
                    height: 60px;
                    line-height: 60px;
                    padding: 0 30px;
                    font-size:14px;
                    color: $system-color-black;
                }
                .toolbar{
                    background: #f2f2f2;
                    padding: 7px 5px;
                }
                .editor{
                    position: relative;
                    min-height: 900px;
                    .w-e-text{
                        padding: 30px 40px;
                        color: #333;
                        font-size: 16px;
                        line-height: 1.7;
                        overflow-y: auto;
                        -webkit-box-sizing: border-box;
                        box-sizing: border-box;
                    }
                    img{
                        display: block;
                        margin: 0 auto;
                    }
                }
                
            }  
        }      
    }
</style>