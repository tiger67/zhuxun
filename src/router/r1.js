 import Home from '@/components/Home'
 import SignIn from '@/components/sign/SignIn'
 import SignUp from '@/components/sign/SignUp'
 import Sign from '@/components/sign/Sign'
 import Index from '@/components/index/index'
 import Search from '@/components/search'
 import ArticleSearch from '@/components/search/ArticleSearch'
 import WriterSearch from '@/components/search/WriterSearch'
 import Article from '@/components/index/article'
 import Writer from '@/components/index/writer'
 import Tag from '@/components/index/tag'
 import NewsInfo from '@/components/index/news-info'
 import ArticleList from '@/components/index/article-list'
 import Fonts from '@/views/Fonts'

 let routes = [{
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
         path: 'article',
         name: 'Article',
         component: Article
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
         path: 'article-list',
         name: 'ArticleList',
         component: ArticleList
       }
     ]
   },
   {
     path: '/sign_in',
     component: Sign,
     children: [{
       path: '',
       name: 'SignIn',
       component: SignIn
     }]
   }, {
     path: '/sign_up',
     component: Sign,
     children: [{
       path: '',
       name: 'SignUp',
       component: SignUp
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
       }]
     }]
   },
   {
     path: '/font',
     name: 'fonts',
     component: Fonts
   }
 ];

 export default routes;
