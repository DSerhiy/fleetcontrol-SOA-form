const state = {
  speedClaim: null
};

const getters = {
  speedClaimItems(state) {
    return state.speedClaim;
  }
};

const mutations = {
  initSpeedClaim(state, data) {
    state.speedClaim = data;
  }, 
  addSpeedClaim(state, data) {
    state.speedClaim.push(data)
  },
  deleteSpeedClaim(state, index) {
    state.speedClaim.splice(index, 1);
  },  
  updateSpeedClaim(state, data) {
    state.speedClaim.splice(data.index, 1, data.speedClaim);
  }, 
  updateSpeedClaimCredit(state, data) {
    state.speedClaim[data.index].credit = data.value;
  }, 
  updateSpeedClaimDebit(state, data) {
    state.speedClaim[data.index].debit = data.value;
  }
};

const actions = {
  initSpeedClaim({ commit }, data) {
    commit('initSpeedClaim', data);
  }, 
  addSpeedClaim({ commit }, data) {
    commit('addSpeedClaim', data);
  },
  deleteSpeedClaimItem(context, index) {
    context.commit('deleteSpeedClaimItem', index);
  },
  updateSpeedClaim({ commit }, data) {
    commit('updateSpeedClaim', data);
  },
  updateSpeedClaimCredit({ commit }, data) {
    commit('updateSpeedClaimCredit', data);
  }, 
  updateSpeedClaimDebit({ commit }, data) {
    commit('updateSpeedClaimDebit', data);
  }, 
};

export default {
  state, 
  getters,
  mutations,
  actions
}