// Data structure
// hire = [
// {      
//   hireRate: 5000,  
//   fromDate: { time: '01:01', date: '2019-06-01' }, 
//   toDate: { time: '01:01', date: '2019-06-01' },        
// }
// ];

const state = {
  hire: null
}

const getters = {
  // Hire component
  hireItems(state) {
    return state.hire;
  }  
};

const mutations = {
  // Hire component 
  initHire(state, data) {
    state.hire = data;    
  },
  addHireItem(state, hireItem) {
    state.hire.push(hireItem);
  },
  deleteHireItem(state, index) {
    if(state.hire[index + 1])
      state.hire[index + 1].fromDate = state.hire[index - 1].toDate;

    state.hire.splice(index, 1);
  },  
  updateFromDate(state, newFromDate) {
    state.hire[newFromDate.index].fromDate.time = newFromDate.time;
    state.hire[newFromDate.index].fromDate.date = newFromDate.date;
  },   
  updateToDate(state, newToDate) {
    state.hire[newToDate.index].toDate.time = newToDate.time;
    state.hire[newToDate.index].toDate.date = newToDate.date;
  },  
  updateHireRate(state, newHireRate) {
    state.hire[newHireRate.index].hireRate = newHireRate.value; 
  },         
};

const actions = {
  // Hire component
  initHire({ commit }, data) {
    commit('initHire', data);
  },
  addHireItem(context, hireItem) {
    context.commit('addHireItem', hireItem);
  },
  deleteHireItem(context, index) {
    context.commit('deleteHireItem', index);
  },        
  updateToDate(context, newToDate) {
    context.commit('updateToDate', newToDate);
  },
  updateFromDate(context, newFromDate) {
    context.commit('updateFromDate', newFromDate);
  },
  updateHireRate(context, newHireRate) {
    context.commit('updateHireRate', newHireRate);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};