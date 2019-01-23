<template>
  <div id="app">
    <!-- <focus></focus> -->
    <!-- <index></index> -->
    <!-- <MyFans></MyFans> -->
    <!-- <MyFeedback></MyFeedback> -->
    <!-- <MyFollow></MyFollow> -->
    <!-- <MyInfo></MyInfo> -->
    <!-- <MyNewest></MyNewest> -->
    <!-- <MyOff></MyOff> -->
    <!-- <MyPost></MyPost> -->
    <!-- <MyRead></MyRead> -->
   <!--  <MySubscribe></MySubscribe> -->
   <!-- <My></My> -->
   <!-- <NewsPage></NewsPage> -->
   <!-- <Search></Search> -->
   <!-- <Video></Video> -->
   <router-view></router-view>
   <footer></footer>
  </div>
</template>

<script>
import footer from './components/footer.vue'
// import index from './components/index.vue' 
// import NewsPage from './components/news-page.vue'
// import focus from './components/focus.vue'
// import MyCollection from './components/my-collection.vue'
// import MyFans from './components/my-fans.vue'
// import MyFeedback from './components/my-feedback.vue'
// import MyFollow from './components/my-follow.vue'
// import MyInfo from './components/my-info.vue'
// import MyNewest from './components/my-newest.vue'
// import MyOff from './components/my-off.vue'
// import MyPost from './components/my-post.vue'
// import MyRead from './components/my-read.vue'
// import MySubscribe from './components/my-subscribe.vue'
// import My from './components/my.vue'
// import Search from './components/search.vue'
// import Video from './components/video.vue'

export default {
  name: 'app',
  components: {
    footer
    //news,focus,MyCollection,MyFans,
    //MyFeedback,MyFollow,MyInfo,MyNewest,MyOff
    //,MyPost,MyRead,MySubscribe,My,
    //NewsPage
    //,Search,Video
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
