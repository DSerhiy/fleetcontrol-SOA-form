import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import myLib from './lib.js';

import { store } from './store/store.js';

Object.defineProperty(Vue.prototype, '$myLib', { value: myLib });

Vue.use(VueRouter);

Vue.directive('focus', {  
  inserted: function (el) {    
    el.focus()
  }
});
 
new Vue({
  el: '#app',
  store,
  render: h => h(App)
}); 