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
    isBallastBonus(state) {
      return state.сomponentsData.hire.data.isBallastBonus;
    },
    isAddComm(state) {
      return state.сomponentsData.hire.isAddComm;
    },
    isBrkComm(state) {
      return state.сomponentsData.hire.isBrkComm;
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
    }, 

    // Holds cleaning component
    holdsCleaningItems(state) {
      return state.сomponentsData.holdsCleaning.data;
    },
    holdsCleaningTotal(state) {
      return state.сomponentsData.holdsCleaning.total();
    }
  }, 
  
  mutations: {
    initComponents(state, data) {
      state.сomponentsData = data;
    },

    // Hire component 
    setBallastBonus(state, is) {
      state.сomponentsData.hire.data.isballastBonus = is;
    },
    setAddComm(state, is) {
      state.сomponentsData.hire.isAddComm = is;
    },
    setBrkComm(state, is) {
      state.сomponentsData.hire.isBrkComm = is;
    },
    
    // CharterersExpenses component
    addNewCharterersItem(state, data) {
      state.сomponentsData.charterersExpenses.data.push(data);
    },   
    updateCharterersItem(state, item) {
      state.сomponentsData.charterersExpenses.data[item.index] = item.data;
    }, 
    deleteCharterersItem(state, index) {
      state.сomponentsData.charterersExpenses.data.splice(index, 1);
    },

    //OwnersExpenses component
    addNewOwnersItem(state, item) {
      state.сomponentsData.ownersExpenses.data.push(item);
    },
    updateOwnersItem(state, item) {
      state.сomponentsData.ownersExpenses.data[item.index] = item.data;
    }, 
    deleteOwnersItem(state, index) {
      state.сomponentsData.ownersExpenses.data.splice(index, 1);
    },

    // Holds cleaning component
    addHoldCleaningItem(state, item) {
      state.сomponentsData.holdsCleaning.data.push(item);
    },
    updateHoldCleaningItem(state, item) {
      state.сomponentsData.holdsCleaning.data[item.index] = item.data;
    },
    deleteHoldCleaningItem(state, index) {
      state.сomponentsData.holdsCleaning.data.splice(index, 1);
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

    // Hire component
    setBallastBonus(context, is) {
      context.commit('setBallastBonus', is);
    },
    setAddComm(context, is) {
      context.commit('setAddComm', is);
    },
    setBrkComm(context, is) {
      context.commit('setBrkComm', is);
    },
   
    // CharterersExpenses component
    addNewCharterersItem(context, data) {
      context.commit('addNewCharterersItem', data);
    },   
    updateCharterersItem(context, payload) {
      context.commit('updateCharterersItem', payload)
    },
    deleteCharterersItem(context, payload) {
      context.commit('deleteCharterersItem', payload);
    },

    // OwnersExpenses component
    addNewOwnersItem(context, data) {
      context.commit('addNewOwnersItem', data);
    },
    updateOwnersItem(context, payload) {
      context.commit('updateOwnersItem', payload)
    },
    deleteOwnersItem(context, payload) {
      context.commit('deleteOwnersItem', payload);
    },

    // Holds cleaning component
    addHoldCleaningItem(context, item) {
      context.commit('addHoldCleaningItem', item);
    },
    updateHoldCleaningItem(context, item) {
      context.commit('updateHoldCleaningItem', item);
    },
    deleteHoldCleaningItem(context, index) {
      context.commit('deleteHoldCleaningItem', index);
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