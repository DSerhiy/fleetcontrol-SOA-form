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
   state.holdsCleaning[item.index].description = item.data.description;
   state.holdsCleaning[item.index].value = item.data.value;
  },
  deleteHoldCleaningItem(state, index) {
    state.holdsCleaning.splice(index, 1);
  }
};

const actions = {
  // Holds cleaning component
  initHoldsCleaning({ commit }, data) {
    commit('initHoldsCleaning', data)
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