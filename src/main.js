import Vue from 'vue'
import App from './App.vue'
import myLib from './lib.js';

import { store } from './store/store.js';

Object.defineProperty(Vue.prototype, '$myLib', { value: myLib });

Vue.directive('focus', {
  // Когда привязанный элемент вставлен в DOM...
  inserted: function (el) {
    // Переключаем фокус на элемент
    el.focus()
  }
})
 
new Vue({
  el: '#app',
  store,
  render: h => h(App)
}); 