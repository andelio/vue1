import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import index from './components/index.vue'
import newsPage from './components/news-page.vue'
import focus from './components/focus.vue'
import myCollection from './components/my-collection.vue'
import myFans from './components/my-fans.vue'
import myFeedback from './components/my-feedback.vue'
import myFollow from './components/my-follow.vue'
import myInfo from './components/my-info.vue'
import myNewest from './components/my-newest.vue'
import myOff from './components/my-off.vue'
import myPost from './components/my-post.vue'
import myRead from './components/my-read.vue'
import mySubscribe from './components/my-subscribe.vue'
import my from './components/my.vue'
import search from './components/search.vue'
import video from './components/video.vue' 

const routes=[
    {path:'/',redirect:'/index'},
    {path:'/index',component:index},
    {path:'/focus',component:focus},
    {path:'/newsPage',component:newsPage},
    {path:'/myCollection',component:myCollection},
    {path:'/myFans',component:myFans},
    {path:'/myFeedback',component:myFeedback},
    {path:'/myFollow',component:myFollow},
    {path:'/myInfo',component:myInfo},
    {path:'/myNewest',component:myNewest},
    {path:'/myOff',component:myOff},
    {path:'/myPost',component:myPost},
    {path:'/myRead',component:myRead},
    {path:'/mySubscribe',component:mySubscribe},
    {path:'/my',component:my},
    {path:'/search',component:search},
    {path:'/video',component:video},
  
  ];

export default new Router({
    routes
})