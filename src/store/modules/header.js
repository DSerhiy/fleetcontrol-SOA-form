import { header } from '../../data/data.js';

// Data stracture: 
// ===============
// header = {
//   vesselName: 'Marika',
//   charterersName: 'BPG Shipping Company DMCC',
//   cpDate: '26.06.2019'
// };

const state = {
  header: null
};

const getters = {
  // Header component 
  vesselName(state) {
    return state.header.vesselName;
  },
  charterersName(state) {
    return state.header.charterersName;
  },
  cpDate(state) {
    return state.header.cpDate;
  }, 
};

const mutations = {
  initHeader(state, data) {
    state.header = data;
  }
};

const actions = {
  initHeader({ commit }) {
    commit('initHeader', header)
  }
}

export default {
  state,
  getters, 
  mutations,
  actions  
}