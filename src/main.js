import Vue from 'vue'
import App from './App.vue'
import myLib from './lib.js';

import { store } from './store/store.js';

Object.defineProperty(Vue.prototype, '$myLib', { value: myLib });
 
new Vue({
  el: '#app',
  store,
  render: h => h(App)
}); 