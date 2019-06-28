import Vue from 'vue';
import Vuex from 'vuex';

import data from '../data/data.js'

Vue.use(Vuex); 

export const store = new Vuex.Store( {
  state: {
    сomponentsData: null
  },  
  getters: {
    vesselName(state) {
      return state.сomponentsData.header.vesselName;
    },
    charterersName(state) {
      return state.сomponentsData.header.charterersName;
    },
    cpDate(state) {
      return state.сomponentsData.header.cpDate;
    }
  }, 
  
  mutations: {
    initComponents(state, data) {
      state.сomponentsData = data;
    }
  },
  
  actions: {
    initComponents(context) {      
      context.commit('initComponents', data)
    }
  }
});