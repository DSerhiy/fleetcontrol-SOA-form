export default {
  isDelivered: false,
  header: {
    vesselName: 'Marika',
    charterersName: 'BPG Shipping Company DMCC',
    cpDate: '26.06.2019'
  }, 
  hire: {
    total() {},
    isAddComm: false,
    isBrkComm: false,
    data: [
      // {
      //   isBallastBonus: false,
      //   ballastBonus: null,
      //   hireRate: 5000,  
      //   fromDate: {time: '01:01', date: '2019-06-30'}, 
      //   toDate: {time: '01:01', date: '2019-07-01'}, 
      //   addComm: 3.25,
      //   brkComm: 1.25,
      //   cevRate: 1250
      // }
    ]
  },
  charterersExpenses: {
    total() {return this.data.reduce((acc, cur)=> acc + cur.value, 0)},
    data: [
      // {description: null, value: null},      
    ]
  },
  ownersExpenses: {
    total() {return this.data.reduce((acc, cur)=> acc + cur.value, 0)},
    data: [
      // {description: null, value: null}
    ]
  }, 
  holdsCleaning: {
    total() {return this.data.reduce((acc, cur)=> acc + cur.value, 0)},
    data: [
      {description: 'Fujairah', value: 4500, type: 'ILOHC'}
    ]
  }
};