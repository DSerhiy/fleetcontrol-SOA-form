import Vue from 'vue';
import Vuex from 'vuex';

import data from '../data/data.js'

Vue.use(Vuex); 

export const store = new Vuex.Store( {
  state: { appData: null },

  getters: {    
    // Settings 
    isInit(state) {
      return state.appData.settings.isInit;
    },
    deliveryDate(state) {
      return state.appData.settings.deliveryDate;
    },
    redeliveryDate(state) {
      return state.appData.settings.redeliveryDate;
    },
    addComm(state) {
      return state.appData.settings.addComm;
    },
    brkComm(state) {
      return state.appData.settings.brkComm;
    },
    cevRate(state) {
      return state.appData.settings.cevRate;
    },
    ballastBonus(state) {
      return state.appData.settings.ballastBonus;
    },
    ilohc(state) {
      return state.appData.settings.ilohc; 
    },
    ilihc(state) {
      return state.appData.settings.ilihc; 
    },   

    // Header component 
    vesselName(state) {
      return state.appData.header.vesselName;
    },
    charterersName(state) {
      return state.appData.header.charterersName;
    },
    cpDate(state) {
      return state.appData.header.cpDate;
    }, 

    // Hire component
    hireItems(state) {
      return state.appData.hire;
    },
    
    // CharterersExpenses component
    charterersExpensesItems(state) {
      return state.appData.charterersExpenses;
    },
    
    // OwnersExpenses component
    ownersExpensesItmes(state) {
      return state.appData.ownersExpenses;
    }, 
   
    // Holds cleaning component
    holdsCleaningItems(state) {
      return state.appData.holdsCleaning;
    }   
  }, 
  
  mutations: {
    // Settings
    initApp(state, data) {
      state.appData = data;
    },
    setDeliveryDate(state, deliveryDate) {
      state.appData.deliveryDate.time = deliveryDate.time;
      state.appData.deliveryDate.date = deliveryDate.date;
    },
    setRedeliveryDate(state, redeliveryDate) {
      state.appData.redeliveryDate.time = redeliveryDate.time;
      state.appData.redeliveryDate.date = redeliveryDate.date;
    },
    setAddComm(state, addComm) {
      state.appData.addComm.status = addComm.status;
      state.appData.addComm.value = addComm.value;
    },
    setBrkComm(state, brkComm) {
      state.appData.brkComm.status = brkComm.status;
      state.appData.brkComm.value = brkComm.value;
    },    
    setCevRate(state, cevRate) {
      state.appData.cevRate = cevRate;
    },
    setBallastBonus(state, ballastBonus) {
      state.appData.ballastBonus.status = ballastBonus.status;
      state.appData.ballastBonus.value = ballastBonus.value;
    }, 
    setIlohc(state, ilohc) {
      state.appData.ilohc = ilohc
    },
    setIlihc(state, ilihc) {
      state.appData.ilihc = ilihc
    },

    // Hire component 
    addHireItem(state, hireItem) {
      state.appData.hire.push(hireItem);
    },
    deleteHireItem(state, index) {
      state.appData.hire.splice(index, 1);
    },     
    updateToDate(state, newToDate) {
      state.appData.hire[newToDate.index].toDate.time = newToDate.time;
      state.appData.hire[newToDate.index].toDate.date = newToDate.date;
    },
    updateFromDate(state, newFromDate) {
      state.appData.hire[newFromDate.index].toDate.time = newFromDate.time;
      state.appData.hire[newFromDate.index].toDate.date = newFromDate.date;
    },
    updateHireRate(state, newHireRate) {
      state.appData.hire[newHireRate.index].newHireRate = newHireRate.value; 
    },         
    
    // CharterersExpenses component
    addCharterersItem(state, item) {
      state.appData.charterersExpenses.push(item);
    },   
    updateCharterersItem(state, item) {
      state.appData.charterersExpenses[item.index] = item.data;
    }, 
    deleteCharterersItem(state, index) {
      state.appData.charterersExpenses.splice(index, 1);
    },

    //OwnersExpenses component
    addOwnersItem(state, item) {
      state.appData.ownersExpenses.push(item);
    },
    updateOwnersItem(state, item) {
      state.appData.ownersExpenses[item.index] = item.data;
    }, 
    deleteOwnersItem(state, index) {
      state.appData.ownersExpenses.splice(index, 1);
    },

    // Holds cleaning component
    addHoldCleaningItem(state, item) {
      state.appData.holdsCleaning.push(item);
    },
    updateHoldCleaningItem(state, item) {
      state.appData.holdsCleaning[item.index] = item.data;
    },
    deleteHoldCleaningItem(state, index) {
      state.appData.holdsCleaning.splice(index, 1);
    },

    // Start Form componet
    changeInitStatus(state, status) {
      state.appData.isInit = status;
    },
    addHireData(state, data) {
      state.appData.hire.data.push(data);
    }
  },
  
  actions: {
    // Settings
    initApp(context) {      
      context.commit('initApp', data)
    },
    setDeliveryDate(context, deliveryDate) {
      context.commit('setDeliveryDate', deliveryDate);
    },
    setRedeliveryDate(context, redeliveryDate) {
      context.commit('setRedeliveryDate', redeliveryDate);
    },
    setAddComm(context, addComm) {
      context.commit('setAddComm', addComm);
    },
    setBrkComm(context, brkComm) {
      context.commit('setBrkComm', brkComm);
    },    
    setCevRate(context, cevRate) {
      context.commit('setCevRate', cevRate);
    },
    setBallastBonus(context, ballastBonus) {
      context.commit('setBallastBonus', ballastBonus);
    }, 
    setIlohc(context, ilohc) {
      context.commit('setIlohc', ilohc);
    },
    setIlihc(context, ilihc) {
      context.commit('setIlihc', ilihc);
    },

    // Hire component
    addHireItem(context, hireItem) {
      context.commit('addHireItem', hireItem);
    },
    deleteHireItem(context, index) {
      context.commit('deleteHireItem', index);
    },        
    updateToDate(context, newToDate) {
      context.commit('updateToDate', newToDate);
    },
    updateFromDate(context, newFromDate) {
      context.commit('updateFromDate', newFromDate);
    },
    updateHireRate(context, newHireRate) {
      context.commit('updateHireRate', newHireRate);
    }, 
      
    // CharterersExpenses component
    addCharterersItem(context, item) {
      context.commit('addCharterersItem', item);
    },   
    updateCharterersItem(context, item) {
      context.commit('updateCharterersItem', item);
    },
    deleteCharterersItem(context, index) {
      context.commit('deleteCharterersItem', index);
    },

    // OwnersExpenses component
    addOwnersItem(context, item) {
      context.commit('addOwnersItem', item);
    },
    updateOwnersItem(context, item) {
      context.commit('updateOwnersItem', item)
    },
    deleteOwnersItem(context, index) {
      context.commit('deleteOwnersItem', index);
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
    changeInitStatus(context, status) {
      context.commit('changeInitStatus', status)
    },
    addHireData(context, data) {
      context.commit('addHireData', data);
    }    
  }
});