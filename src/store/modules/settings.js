const state = {
  settings: null
};

const getters = {
  // Settings 
  firstStart(state) {
    return state.settings.firstStart;
  },
  componentsOn(state) {
    return state.settings.componentsOn
  }, 
  finance(state) {
    return state.settings.finance
  },
  delivery(state) {
    return state.settings.delivery
  }, 
  redelivery(state) {
    return state.settings.redelivery
  }, 
  bunkersOnDelivery(state) {
    return state.settings.bunkersOnDelivery
  }, 
  bunkersOnRedelivery(state) {
    return state.settings.bunkersOnRedelivery
  }, 
  holdsCleaning(state) {
    return state.settings.holdsCleaning
  }  
};

const mutations = {
  // Settings
  initSettings (state, data) {
    state.settings = data;
  },
  setFirstStart(state, setup) {
    state.settings.firstStart = setup;
  },

  // ComponetnsON
  setOwnersExpensesOn(state, setup) {
    state.settings.componentsOn.ownersExpenses = setup;
  },
  setCharterersExpensesOn(state, setup) {
    state.settings.componentsOn.charterersExpenses = setup;
  },
  setHoldsCleaningOn(state, setup) {
    state.settings.componentsOn.holdsCleaning = setup;
  },
  setBunkersOn(state, setup) {
    state.settings.componentsOn.bunkers = setup;
  },
  setOffHireOn(state, setup) {
    state.settings.componentsOn.offHire = setup;
  },
  setSpeedClaimOn(state, setup) {
    state.settings.componentsOn.speedClaim = setup;
  },

  // Finance
  setBasicHire(state, besicHire) {
    state.settings.finance.basicHire = besicHire;
  },
  setCevDays(state, days) {
    state.settings.finance.cevRate.days = days;
  },
  setCevValue(state, value) {
    state.settings.finance.cevRate.value = value;    
  },
  setAddCommOn(state, setup) {
    state.settings.finance.addComm.on = setup;
  },
  setAddCommValue(state, value) {
    state.settings.finance.addComm.value = value;
  },
  setBrkCommOn(state, setup) {
    state.settings.finance.brkComm.on = setup;    
  },
  setBrkCommValue(state, value) {
    state.settings.finance.brkComm.value = value;
  },
  setBallastBonusOn(state, setup) {
    state.settings.finance.ballastBonus.on = setup;
  },
  setBallastBonusValue(state, value) {
    state.settings.finance.ballastBonus.value = value;
  },

  // Delivery
  setDeliveryStatus(state, status) {
    state.settings.delivery.status = status; 
  },
  setDeliveryTime(state, time) {
    state.settings.delivery.time = time; 
  },
  setDeliveryDate(state, date) {
    state.settings.delivery.date = date; 
  },

  // Redelivery
  setRedeliveryStatus(state, status) {
    state.settings.redelivery.status = status; 
  },
  setRedeliveryTime(state, time) {
    state.settings.redelivery.time = time; 
  },
  setRedeliveryDate(state, date) {
    state.settings.redelivery.date = date; 
  },

  // Bunkers on delivery and redelivery
  setBunkersOnDeliveryStatus(state, status) {
    state.settings.bunkersOnDelivery.status = status;  
  },
  setBunkersOnRedeliveryStatus(state, status) {
    state.settings.bunkersOnRedelivery.status = status;  
  },
  removeGrade(state, grade) {
    if (grade.flag === 'delivery')
      state.settings.bunkersOnDelivery.grades.splice(grade.index, 1);

    if (grade.flag === 'redelivery')
      state.settings.bunkersOnRedelivery.grades.splice(grade.index, 1);        
  },  
  addGrade(state, flag) {
    if (flag === 'delivery')
      state.settings.bunkersOnDelivery.grades.push({ name: null, qtty: 0, price: 0 });

    if (flag === 'redelivery')
      state.settings.bunkersOnRedelivery.grades.push({ name: null, qtty: 0, price: 0 });
  },      

  // Holds cleaning   
  setHoldsCleaningIlohc(state, value) {
    state.settings.holdsCleaning.ilohc = value; 
  },
  setHoldsCleaningIlihc(state, value) {
    state.settings.holdsCleaning.ilihc = value; 
  }
};

const actions = {

  // Settings
  initSettings ({ commit }, data) {
    commit('initSettings', data)
  },
  setFirstStart(context, setup) {
    context.commit('setFirstStart', setup);
  }, 

  // ComponentsOn
  setOwnersExpensesOn(context, setup) {
    context.commit('setOwnersExpensesOn', setup);
  },
  setCharterersExpensesOn(context, setup) {
    context.commit('setCharterersExpensesOn', setup);
  },
  setHoldsCleaningOn(context, setup) {
    context.commit('setHoldsCleaningOn', setup);
  },
  setBunkersOn(context, setup) {
    context.commit('setBunkersOn', setup);
  },
  setOffHireOn(context, setup) {
    context.commit('setOffHireOn', setup);
  },
  setSpeedClaimOn(context, setup) {
    context.commit('setSpeedClaimOn', setup);
  },
  
  // Finance
  setBasicHire({ commit }, data) {
    commit('setBasicHire', data);
  },
  setCevDays({ commit }, data) {
    commit('setCevDays', data);
  },
  setCevValue({ commit }, data) {
    commit('setCevValue', data);    
  },
  setAddCommOn({ commit }, data) {
    commit('setAddCommOn', data);
  },
  setAddCommValue({ commit }, data) {
    commit('setAddCommValue', data);
  },
  setBrkCommOn({ commit }, data) {
    commit('setBrkCommOn', data); 
  },
  setBrkCommValue({ commit }, data) {
    commit('setBrkCommValue', data);
  },
  setBallastBonusOn({ commit }, data) {
    commit('setBallastBonusOn', data);
  },
  setBallastBonusValue({ commit }, data) {
    commit('setBallastBonusValue', data);
  },

  // Delivery
  setDeliveryStatus({ commit }, status) {
    commit('setDeliveryStatus', status);
  },
  setDeliveryTime({ commit }, time) {
    commit('setDeliveryTime', time);
  },
  setDeliveryDate({ commit }, date) {
    commit('setDeliveryDate', date);
  },

  // Redelivery
  setRedeliveryStatus({ commit }, status) {
    commit('setRedeliveryStatus', status);
  },
  setRedeliveryTime({ commit }, time) {
    commit('setRedeliveryTime', time);
  },
  setRedeliveryDate({ commit }, date) {
    commit('setRedeliveryDate', date);
  },

  // Bunkers on Delivery and Redelivery
  setBunkersOnDeliveryStatus({ commit }, status) {
    commit('setBunkersOnDeliveryStatus', status);
  },
  setBunkersOnRedeliveryStatus({ commit }, status) {
    commit('setBunkersOnRedeliveryStatus', status);
  },
  removeGrade({ commit }, grade) {
    commit('removeGrade', grade);
  },
  addGrade({ commit }, flag) {
    commit('addGrade', flag);
  },
 
  // Holds cleaning
  setHoldsCleaningIlohc({ commit }, flag) {
    commit('setHoldsCleaningIlohc', flag);
  },
  setHoldsCleaningIlihc({ commit }, flag) {
    commit('setHoldsCleaningIlihc', flag); 
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}