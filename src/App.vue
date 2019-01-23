
<template>
  <div id="app">
    <loading v-show="loading"></loading>
    <transition
      enter-active-class="animated fadeIn"
    >
    <router-view></router-view>
    </transition>

    <foot v-show="bFoot"></foot>
  </div>
</template>

<script>
import foot from './components/footer';
import loading from './components/loading';
import {mapGetters} from 'vuex';
import * as types from './store/types';

export default {
  name: 'app',
 
  components: {
    foot,loading
  },
  computed:mapGetters(['bFoot','loading']),
  watch:{
    $route: {
      handler: function(to){
        let path = to.path;
        //console.log(path);
        if(/^\/(index|video|search|my|focus)$/.test(path)){
          this.$store.dispatch(types.VIEW_FOOT,true);
          
        }else{
          this.$store.dispatch(types.VIEW_FOOT,false);
          
        }
      }
    }
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
