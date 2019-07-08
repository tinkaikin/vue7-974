// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//                              1.引入外部样式,这个文件是入口,所以会先加载过
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'
import axios from 'axios';

// axios.defaults.baseURL = 'https://www.easy-mock.com';  //使用easy-mock的数据 
axios.defaults.baseURL = 'http://localhost:3000';  
Vue.prototype.$http = axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})




