import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import myLib from './lib.js';
import { routes } from './routes.js';

import { store } from './store/store.js';

Object.defineProperty(Vue.prototype, '$myLib', { value: myLib });

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

Vue.directive('focus', {  
  inserted: function (el) {    
    el.focus()
  }
});
 
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
}); 