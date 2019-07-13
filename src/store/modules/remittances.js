const state = {
  remittances: null
};

const getters = {
  remittancesItems(state) {
    return state.remittances;
  }
};

const mutations = {
  initRemittances(state, data) {
    state.remittances = data;
  } 
};

const actions = {
  initRemittances({commit}, data) {
    commit('initRemittances', data);
  }
};

export default {
  state, 
  getters,
  mutations,
  actions
}