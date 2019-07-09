export default {
  settings: {
    firstStart: true,
    basicHire: 9250,
    deliveryDate: { time: '12:00', date: '2019-07-08'},
    redeliveryDate: { time: null, date: null},
    addComm: { status: true, value: 3.75 },
    brkComm: { status: true, value: 1.25 },
    cevRate: 1250,
    ballastBonus: { status: true, value: 125000},
    ilohc: 4500, 
    ilihc: 3500
  },
  header: {
    vesselName: 'Marika',
    charterersName: 'BPG Shipping Company DMCC',
    cpDate: '26.06.2019'
  },
  hire: [
    // {      
    //   hireRate: 5000,  
    //   fromDate: { time: '01:01', date: '2019-06-01' }, 
    //   toDate: { time: '01:01', date: '2019-06-01' },        
    // }
  ],  
  charterersExpenses: [ 
    // {description: null, value: null},    
  ],

  ownersExpenses: [
      // {description: null, value: null}
  ],   
  holdsCleaning: [
      // { description: 'Fujairah', value: 4500, type: 'ILOHC' }
  ],
  remittances: [
      // { description: '', date: '', value: null }
  ]  
};