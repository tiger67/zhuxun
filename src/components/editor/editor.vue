<template>
    <div class="editor-wrapper">
        <p class="save" v-show="!saving">已保存</p>
        <p class="save" v-show="saving">保存中...</p>
        <div class="content">
            <input type="text" class="title new" value="2018-08-29"/>
            <div id="toolbar" class="toolbar"></div>
            <div class="operate-bar">
                <span @click="getContent"><i class="icon-save"></i></span>
                <span v-show="!saving"><i class="icon-release"></i>发布文章</span>
                <span v-show="saving">保存中...</span>
            </div>
            <div class="main">
                <div id="editor" class="editor"> <!--可使用 min-height 实现编辑区域自动增加高度-->
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Editor from 'wangeditor'

    export default {
        name: 'App',
        data () {
            return {
                editor: '',
                editorContent: '',
                editorUpImgUrl: 'http://xxxx',  // 编辑器插入的图片上传地址
                saving: false,
                initializeContent: '<p>要初始化的内容</p><p>hahaha</p>'
            }
        },
        mounted() {
            this.initEditor()
        },
        methods: {
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
                    'redo'  // 重复
                ] ;   
                this.editor.customConfig.uploadImgMaxLength = 5; /* 限制一次最多上传 5 张图片 */ 
                this.editor.customConfig.uploadImgMaxSize = 3 * 1024 * 1024; /* 将图片大小限制为 3M 默认为5M */ 
                //this.editor.config.uploadImgUrl = this.editorUpImgUrl;  // 图片上传地址

                /* 自定义图片上传（支持跨域和非跨域上传，简单操作）*/ 
                this.editor.customConfig.customUploadImg = async (files, insert) => { 
                    /* files 是 input 中选中的文件列表 */ 
                    let formData = new FormData(); 
                    formData.append('file', files[0]) ;
                    let data = await this.upload(formData) ;
                    /* upload方法是后台提供的上传图片的接口 */
                    /* insert 是编辑器自带的 获取图片 url 后，插入到编辑器的方法 上传代码返回结果之后，将图片插入到编辑器中*/ 
                    insert(data.imgUrl);
                } ;
                this.editor.customConfig.onchange = (html) => {
                  this.editorContent = html
                    /* html 即变化之后的内容 */ 
                } ;
                this.editor.create(); /* 创建编辑器 */ 
                console.log(this.editor);
                this.editor.$textElem.html(this.initializeContent);  // 初始化内容
            },
            getContent: function () { // 获取编辑器 内容区内容
                this.editorContent = this.editor.$textElem.html();
                console.log(this.editorContent);
                alert(this.editorContent);
                this.saving = true;
                setTimeout(() => {
                    this.saving = false;
                },1000)
                //this.editorContent = this.editor.$txt.html();  // 获取 html 格式
                // this.editor.$txt.text();  // 获取纯文本
                // this.editor.$txt.formatText();  // 获取格式化后的纯文本
            },
            gg() {
                this.$fetch('/api/v2/movie/top250')
                .then((response) => {
                    console.log(response)
                })
            }
        }
    };
</script>

<style lang="scss">
    $system-color-black: #222;

    .editor-wrapper{
        height: 100vh;
        position: relative;
        padding-top: 20px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        
        &.another-version{
            background-color: #d9d9d9;
            .content{
                overflow-y: auto;
                padding-top: 60px;
                .title{
                    width: 750px;
                    -webkit-box-shadow: 0 0 20px rgba(0,0,0,.1);
                    box-shadow: 0 0 20px rgba(0,0,0,.1);
                    border-bottom: 1px solid #d9d9d9;
                    background-color: #fff;
                    margin: auto;
                    display: block;
                    padding-top: 20px;
                }
                .w-e-toolbar{
                    position: fixed;
                    top: 0;
                    width: 100%;
                    left: 0;
                    z-index: 2;
                }
                .operate-bar{
                    top: 0;
                    z-index: 5;
                }
                .main{
                    width: 750px;
                    margin: 0 auto;
                    .editor{
                        width: 750px;
                        margin: 0 auto;
                        box-shadow: 0 0 20px rgba(0,0,0,.1);
                        background-color: #fff;
                    }
                }
            }
        }
        .save{
            position: absolute;
            right: 5px;
            top: 5px;
            font-size: 14px;
            color: #666;
        }
        .content{
            height: 100%;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            .title{
                width: 100%;
                padding: 0 80px 10px 40px;
                border: none;
                font-size: 30px;
                color: #595959;
                outline: none;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
            }
            .w-e-toolbar{
                background: #f2f2f2;
                padding: 7px 5px;
                border-bottom: 1px solid #ddd;
            }
            .operate-bar{
                position: absolute;
                top: 64px;
                right: 30px;
                span{
                    float: left;
                    padding: 12px 10px;
                    font-size: 14px;
                    color: #666;
                    margin-left: 10px;
                    cursor: pointer;
                    &:hover{
                        .icon-save:before,.icon-release:before{
                            color: #222;
                        } 
                    }
                    .icon-release{
                        margin-right: 8px;
                    }
                }
            }
            .main{
                height: calc(100% - 85px);
                overflow-y: auto;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                -ms-flex-direction: column;
                flex-direction: column;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                .editor{
                    position: relative;
                    -webkit-box-flex: 1;
                    -ms-flex: 1;
                    flex: 1;
                    .w-e-text{
                        padding: 30px 40px;
                        color: #333;
                        font-size: 16px;
                        line-height: 1.7;
                        overflow-y: auto;
                        -webkit-box-sizing: border-box;
                        box-sizing: border-box;
                    }
                }
                
            }     
        }
    }
</style>