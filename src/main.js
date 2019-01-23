import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router.config';
Vue.config.productionTip = false;

// import VueAwesomeSwiper from 'vue-awesome-swiper'
// Vue.use(VueAwesomeSwiper, /* { default global options } */)

import axios from './plugins/axios';
Vue.use(axios);

import './assets/css/swiper-3.2.7.min.css';
import './assets/js/jquery.min.js';
import './assets/css/home.css';
import './assets/css/aui.css';

import 'animate.css';
//import Swiper from './assets/js/swipe';
// console.log(swiper);




Vue.config.productionTip = false

new Vue({
    render: h => h(App),  
    router,
    store,
    data:{
      bFoot:true
     },
  },
).$mount('#app')
