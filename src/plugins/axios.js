import axios from 'axios';
import store from '../store';
import * as types from '../store/types';


// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    //store.dispatch(types.VIEW_FOOT,true);
    store.dispatch(types.VIEW_LOAD,true);
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
 
// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
        //store.dispatch(types.VIEW_FOOT,false);
          store.dispatch(types.VIEW_LOAD,false);
   
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });

export default{
    install: function(Vue){
        Vue.prototype.$http = axios;
        window.axios = axios;
    }
}