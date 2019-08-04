import Vue from 'vue';
import Vuex from 'vuex';

// import modules
import settings from './modules/settings.js';
import hire from './modules/hire.js';
import offHire from './modules/offHire.js';
import speedClaim from './modules/speedClaim.js';
import charterersExpenses from './modules/charterersExpenses.js';
import ownersExpenses from './modules/ownersExpenses.js';
import holdsCleaning from './modules/holdsCleaning.js';
import remittances from './modules/remittances.js';


Vue.use(Vuex); 

export const store = new Vuex.Store( {
  state: {
  },
  getters: {
    appData(state) {
      return state;
    }
  },
  mutations: {
    // Start Form componet
    changeInitStatus(state, status) {
      state.isInit = status;
    },    
  },  
  actions: {    
    // StartForm componet
    changeInitStatus(context, status) {
      context.commit('changeInitStatus', status)
    },       
  }, 
  modules: {
    settings,
    hire,
    offHire,
    speedClaim,
    charterersExpenses,
    ownersExpenses,
    holdsCleaning,
    remittances
  }
});