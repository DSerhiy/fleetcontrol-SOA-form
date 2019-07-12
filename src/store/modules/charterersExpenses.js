 // Data structure 
 //================
 // charterersExpenses = [
 //  {description: null, value: null}
 // ]

const state = {
  charterersExpenses : null
};

const getters = {
  // CharterersExpenses component
  charterersExpensesItems(state) {
    return state.charterersExpenses;
  },
};

const mutations = {
 // CharterersExpenses component
  initCharterersExpenses(state, data) {
    state.charterersExpenses = data;
  },
  addCharterersItem(state, item) {
    state.charterersExpenses.push(item);
  },   
  updateCharterersItem(state, item) {
    state.charterersExpenses[item.index] = item.data;
  }, 
  deleteCharterersItem(state, index) {
    state.charterersExpenses.splice(index, 1);
  }
};

const actions = {
  // CharterersExpenses component
  initCharterersExpenses({ commit }, data) {
      commit('initCharterersExpenses', data)
  },
  addCharterersItem(context, item) {
    context.commit('addCharterersItem', item);
  },   
  updateCharterersItem(context, item) {
    context.commit('updateCharterersItem', item);
  },
  deleteCharterersItem(context, index) {
    context.commit('deleteCharterersItem', index);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}