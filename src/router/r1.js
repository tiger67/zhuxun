 import Home from '@/components/Home'
 import SignIn from '@/components/sign/signin/Index'
 import SignUp from '@/components/sign/signup/Index'
 import ForgetPassword from '@/components/sign/ForgetPassword'
 import Sign from '@/components/sign/Sign'
 import Index from '@/components/index/index'
 import Search from '@/components/search'
 import ArticleSearch from '@/components/search/ArticleSearch'
 import WriterSearch from '@/components/search/WriterSearch'
 import Article from '@/components/index/article/page'
 import InfoArticle from '@/components/index/article/info-page'
 import Writer from '@/components/index/writer'
 import Tag from '@/components/index/tag'
 import NewsInfo from '@/components/index/news-info'
 import ArticleList from '@/components/index/article-list'
 import Fonts from '@/components/index/Fonts2'

 let routes = [{
     path: '/font',
     name: 'Fonts',
     component: Fonts
   }, {
     path: '/',
     component: Home,
     children: [{
         path: '',
         name: 'Home',
         component: Index
       },
       {
         path: 'news',
         name: 'NewsInfo',
         component: NewsInfo
       },
       {
         path: 'article/:id',
         name: 'Article',
         component: Article
       },
       {
         path: 'info-article/:id',
         name: 'InfoArticle',
         component: InfoArticle
       },
       {
         path: 'writer',
         name: 'Writer',
         component: Writer
       }, {
         path: 'tag',
         name: 'Tag',
         component: Tag
       },
       {
         path: 'club-list/:id',
         name: 'ArticleList',
         component: ArticleList
       }
     ]
   },
   {
     path: '/',
     component: Sign,
     children: [{
       path: 'sign_in',
       name: 'SignIn',
       component: SignIn
     }, {
       path: 'sign_up',
       name: 'SignUp',
       component: SignUp
     }, {
       path: 'forget_password',
       name: 'ForgetPassword',
       component: ForgetPassword
     }]
   }, {
     path: '/search',
     component: Home,
     children: [{
       path: '',
       component: Search,
       children: [{
         path: "writer",
         name: "wirtersearch",
         component: WriterSearch
       }, {
         path: "article",
         name: "articlesearch",
         component: ArticleSearch
       }, {
         path: "writer/:key",
         name: "wirtersearch-key",
         component: WriterSearch
       }, {
         path: "article/:key",
         name: "articlesearch-key",
         component: ArticleSearch
       }]
     }]
   }
 ];

 export default routes;
