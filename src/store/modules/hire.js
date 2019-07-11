import { hire } from '../../data/data.js';

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
    state.hire = data
  },
  addHireItem(state, hireItem) {
    state.hire.push(hireItem);
  },
  deleteHireItem(state, index) {
    state.hire.splice(index, 1);
  },     
  updateToDate(state, newToDate) {
    console.log('updateToDate', state, newToDate)
    state.hire[newToDate.index].toDate.time = newToDate.time;
    state.hire[newToDate.index].toDate.date = newToDate.date;
  },
  updateFromDate(state, newFromDate) {
    console.log('updateFromDate', newFromDate)
    state.hire[newFromDate.index].fromDate.time = newFromDate.time;
    state.hire[newFromDate.index].fromDate.date = newFromDate.date;
  },
  updateHireRate(state, newHireRate) {
    state.hire[newHireRate.index].hireRate = newHireRate.value; 
  },         
};

const actions = {
  // Hire component
  initHire({ commit }) {
    commit('initHire', hire);
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