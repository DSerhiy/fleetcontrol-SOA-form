import { settings } from '../../data/data.js';

const state = {
  settings: null
};

const getters = {
  // Settings 
  firstStart(state) {
    return state.settings.firstStart;
  },
  basicHire(state) {
    return state.settings.basicHire;
  },
  deliveryDate(state) {
    return state.settings.deliveryDate;
  },
  redeliveryDate(state) {
    return state.settings.redeliveryDate;
  },
  addComm(state) {
    return state.settings.addComm;
  },
  brkComm(state) {
    return state.settings.brkComm;
  },
  cevRate(state) {
    return state.settings.cevRate;
  },
  ballastBonus(state) {
    return state.settings.ballastBonus;
  },
  ilohc(state) {
    return state.settings.ilohc; 
  },
  ilihc(state) {
    return state.settings.ilihc; 
  },   
};

const mutations = {
  // Settings
  initSettings (state, data) {
    state.settings = data
  },
  setFirstStart(state, setup) {
    state.settings.firstStart = setup;
  }, 
  setBasicHire(state, basicHire) {
    state.settings.basicHire = basicHire;
  },
  setDeliveryDate(state, deliveryDate) {
    state.settings.deliveryDate.time = deliveryDate.time;
    state.settings.deliveryDate.date = deliveryDate.date;
  },
  setRedeliveryDate(state, redeliveryDate) {
    state.settings.redeliveryDate.time = redeliveryDate.time;
    state.settings.redeliveryDate.date = redeliveryDate.date;
  },
  setAddComm(state, addComm) {
    state.settings.addComm.status = addComm.status;
    state.settings.addComm.value = addComm.value;
  },
  setBrkComm(state, brkComm) {
    state.settings.brkComm.status = brkComm.status;
    state.settings.brkComm.value = brkComm.value;
  },    
  setCevRate(state, cevRate) {
    state.settings.cevRate = cevRate;
  },
  setBallastBonus(state, ballastBonus) {
    state.settings.ballastBonus.status = ballastBonus.status;
    state.settings.ballastBonus.value = ballastBonus.value;
  }, 
  setIlohc(state, ilohc) {
    state.settings.ilohc = ilohc
  },
  setIlihc(state, ilihc) {
    state.settings.ilihc = ilihc
  },
};

const actions = {
  // Settings
  initSettings ({ commit }) {
    commit('initSettings', settings)
  },
  setFirstStart(context, setup) {
    context.commit('setFirstStart', setup);
  },  
  setBasicHire(context, basicHire) {
    context.commit('setBasicHire', basicHire);
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
};

export default {
  state,
  getters,
  mutations,
  actions
}