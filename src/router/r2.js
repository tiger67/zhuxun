
import club from '@/components/club/club'
import clubIndex from '@/components/club/clubIndex/clubIndex'
import discover from '@/components/club/discover/discover'
import recentArticles from '@/components/club/recentArticles/recentArticles'
import myConcern from '@/components/club/myConcern/myConcern'
import myNotes from '@/components/club/myNotes/myNotes'
import myFavorite from '@/components/club/myFavorite/myFavorite'
import myBrowsing from '@/components/club/myBrowsing/myBrowsing'

import myCenter from '@/components/myCenter/myCenter'
import myArticles from '@/components/myCenter/myArticles/myArticles'
import messageCenter from '@/components/myCenter/messageCenter/messageCenter'
import comment from '@/components/myCenter/messageCenter/comment/comment'
import messages from '@/components/myCenter/messageCenter/messages/messages'

import dataSet from '@/components/myCenter/dataSet/dataSet'

import editor from '@/components/editor/editor'
import label from '@/components/label/label'
import visitor from '@/components/visitor/visitor'
import listContent from '@/components/visitor/listContent/listContent'




let routes = [
	{
      path: '/editor/:id',
      component: editor
    },
    {
      path: '/club',
      component: club,
      children: [
	      {
		    path: '/',
		    redirect: 'clubIndex'
		  },
		  {
		    path: 'clubIndex',
		    name: 'clubIndex',
		    component: clubIndex
		  },
		  {
		    path: 'discover',
		    name: 'discover',
		    component: discover
		  },
		  {
		    path: 'recentArticles',
		    name: 'recentArticles',
		    component: recentArticles
		  },
		  {
		    path: 'myConcern',
		    name: 'myConcern',
		    component: myConcern
		  },
		  {
		    path: 'myNotes',
		    name: 'myNotes',
		    component: myNotes
		  },
		  {
		    path: 'myFavorite/:id',
		    name: 'myFavorite',
		    component: myFavorite
		  },
		  {
		    path: 'myBrowsing/:id',
		    name: 'myBrowsing',
		    component: myFavorite
		  }
	    ]
    },
    {
      path: '/myCenter',
      component: myCenter,
      children: [
      	{
		    path: '/',
		    redirect: 'myArticles'
		  },
		  {
		    path: 'myArticles',
		    component: myArticles
		  },
		  {
		    path: 'messageCenter',
		    component: messageCenter,
            children: [
                {
                    path: '/',
                    redirect: 'comment'
                },
                {
                    path: 'comment',
                    name: 'comment',
                    component: comment
                },
                {
                    path: 'messages',
                    name: 'messages',
                    component: messages,
                }
            ]
		  },
		  {
		    path: 'dataSet',
		    name: 'dataSet',
		    component: dataSet
		  }
      ]
    },
    {
        path: '/visitor',
        component: visitor,
        children: [
        	{
			    path: '/',
			    redirect: 'listContent'
			},
		    {
		        path: 'listContent',
		        name: 'listContent',
		        component: listContent
		    },
		    {
		        path: 'collectList',
		        name: 'collectList',
		        component: listContent
		    }
        ]
    },
    
];

export default routes;
