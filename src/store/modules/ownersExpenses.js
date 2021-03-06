const state = {
  ownersExpenses: null
};

const getters = {
  // OwnersExpenses component
  ownersExpensesItems(state) {
    return state.ownersExpenses;
  }
};

const mutations = {
  //OwnersExpenses component
  initOwnersExpeses(state, data) {
    state.ownersExpenses = data;
  },
  addOwnersItem(state, item) {
    state.ownersExpenses.push(item);
  },
  updateOwnersItem(state, item) {
    state.ownersExpenses[item.index].description = item.data.description;
    state.ownersExpenses[item.index].value = item.data.value;
  }, 
  deleteOwnersItem(state, index) {
    state.ownersExpenses.splice(index, 1);
  }
};

const actions = {
  // OwnersExpenses component
  initOwnersExpeses({ commit }, data) {
    commit('initOwnersExpeses', data);
  },
  addOwnersItem(context, item) {
    context.commit('addOwnersItem', item);
  },
  updateOwnersItem(context, item) {
    context.commit('updateOwnersItem', item)
  },
  deleteOwnersItem(context, index) {
    context.commit('deleteOwnersItem', index);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}