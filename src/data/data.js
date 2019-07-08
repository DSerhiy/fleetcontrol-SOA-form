export default {
  isDelivered: true,
  addComm: { status: true, value: 3.75 },
  brkComm: { status: true, value: 1.25 },
  header: {
    vesselName: 'Marika',
    charterersName: 'BPG Shipping Company DMCC',
    cpDate: '26.06.2019'
  },
  hire: {
    total() {},
    data: [
      {
        ballastBonus: { status: true, value: 125000 },     
        hireRate: 5000,  
        fromDate: { time: '01:01', date: '2019-06-01' }, 
        toDate: { time: '01:01', date: '2019-06-05' }, 
        cevRate: 1250
      }
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
      // { description: 'Fujairah', value: 4500, type: 'ILOHC' }
    ]
  }, 
  remittances: {
    data: [
      // { description: '', date: '', value: null }
    ] 
  }
};