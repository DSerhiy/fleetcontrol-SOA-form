import Vue from 'vue';
import Vuex from 'vuex';

import data from '../data/data.js'

Vue.use(Vuex); 

export const store = new Vuex.Store( {
  state: {
    сomponentsData: null
  },  

  getters: {
    isDelivered(state) {
      return state.сomponentsData.isDelivered;
    },
    // Header component 
    vesselName(state) {
      return state.сomponentsData.header.vesselName;
    },
    charterersName(state) {
      return state.сomponentsData.header.charterersName;
    },
    cpDate(state) {
      return state.сomponentsData.header.cpDate;
    }, 

    // Hire component
    hireData(state) {
      return state.сomponentsData.hire.data;
    },    

    // CharterersExpenses component
    charterersExpensesList(state) {
      return state.сomponentsData.charterersExpenses.data;
    }, 
    charterersExpensesTotal(state) {
      return state.сomponentsData.charterersExpenses.total();
    },
    // OwnersExpenses component
    ownersExpensesList(state) {
      return state.сomponentsData.ownersExpenses.data;
    }, 
    ownersExpensesTotal(state) {
      return state.сomponentsData.ownersExpenses.total();
    }
  }, 
  
  mutations: {
    initComponents(state, data) {
      state.сomponentsData = data;
    },

    // Hire component 
    
    // CharterersExpenses component
    addNewCharterersExpenses(state, data) {
      state.сomponentsData.charterersExpenses.data.push(data);
    },
    editCharterersExpenses(state, newExpenses) {
      state.сomponentsData.charterersExpenses.data = newExpenses;
    },
    //OwnersExpenses component
    addNewOwnersExpenses(state, data) {
      state.сomponentsData.ownersExpenses.data.push(data);
    },
    editOwnersExpenses(state, newExpenses) {
      state.сomponentsData.ownersExpenses.data = newExpenses;
    }, 

    // Start Form componet

    changeDeliveryStatus(state, status) {
      state.isDelivered = status;
    }, 

    addHireData(state, data) {
      state.сomponentsData.hire.data.push(data);
    }
  },
  
  actions: {
    initComponents(context) {      
      context.commit('initComponents', data)
    }, 

    // CharterersExpenses component
    addNewCharterersExpenses(context, data) {
      context.commit('addNewCharterersExpenses', data);
    },
    editCharterersExpenses(context, payload) {
      context.commit('editCharterersExpenses', payload);
    },

    // OwnersExpenses component
    addNewOwnersExpenses(context, data) {
      context.commit('addNewOwnersExpenses', data);
    },
    editOwnersExpenses(context, payload) {
      context.commit('editOwnersExpenses', payload);
    },

    // StartForm componet

    changeDeliveryStatus(context, status) {
      context.commit('changeDeliveryStatus', status)
    }, 

    addHireData(context, data) {
      context.commit('addHireData', data);
    }

    // Hire form component
  }
});