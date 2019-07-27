// Data Structure

// { "description": "due to M/E breakdown",
//   "hireRate": 9250,
//   "share": {"status": false, "value": 100},
//   "fromDate": {
//     "time": "18:00",
//     "date": "2019-08-01" 
//   },
//   "toDate": {
//     "time": "06:00",
//     "date": "2019-08-02" 
//   },
//   "bunkers": {
//     "status": true,
//     "grades": [
//       {"name": "IFO", "qtty": 5.5, "price": 450},
//       {"name": "MDO", "qtty": 10.2, "price": 650}
//     ]
//   } 
// }

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
  }, 
  addOffHire(state, data) {
    state.offHire.push(data)
  },
  updateOffHireCredit(state, data) {
    state.offHire[data.index].credit = data.value;
  }, 
  updateOffHireDebit(state, data) {
    state.offHire[data.index].debit = data.value;
  }
};

const actions = {
  initOffHire({ commit }, data) {
    commit('initOffHire', data);
  }, 
  addOffHire({ commit }, data) {
    commit('addOffHire', data);
  },
  updateOffHireCredit({ commit }, data) {
    commit('updateOffHireCredit', data);
  }, 
  updateOffHireDebit({ commit }, data) {
    commit('updateOffHireDebit', data);
  }, 
};

export default {
  state, 
  getters,
  mutations,
  actions
}