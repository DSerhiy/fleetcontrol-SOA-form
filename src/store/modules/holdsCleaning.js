import { holdsCleaning } from '../../data/data.js';

const state = {
  holdsCleaning: null
}

const getters = {
   // Holds cleaning component
   holdsCleaningItems(state) {
    return state.holdsCleaning;
  }  
};

const mutations = {
  // Holds cleaning component
  initHoldsCleaning(state, data) {
    state.holdsCleaning = data
  },
  addHoldCleaningItem(state, item) {
    state.holdsCleaning.push(item);
  },
  updateHoldCleaningItem(state, item) {
    state.holdsCleaning[item.index] = item.data;
  },
  deleteHoldCleaningItem(state, index) {
    state.holdsCleaning.splice(index, 1);
  }
};

const actions = {
  // Holds cleaning component
  initHoldsCleaning({ commit }) {
    commit('initHoldsCleaning', holdsCleaning)
  },
  addHoldCleaningItem(context, item) {
    context.commit('addHoldCleaningItem', item);
  },
  updateHoldCleaningItem(context, item) {
    context.commit('updateHoldCleaningItem', item);
  },
  deleteHoldCleaningItem(context, index) {
    context.commit('deleteHoldCleaningItem', index);
  }
};

export default {
  state,
  getters,
  mutations, 
  actions
}