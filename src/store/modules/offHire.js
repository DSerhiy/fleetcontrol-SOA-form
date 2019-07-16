const state = {
  offHire: null
};

const getters = {
  offHireItems(state) {
    return state.offHire;
  }
};

const mutations = {
  initOffHire(state, data) {
    state.offHire = data;
  }
};

const actions = {
  initOffHire({ commit }, data) {
    commit('initOffHire', data);
  }
};

export default {
  state, 
  getters,
  mutations,
  actions
}