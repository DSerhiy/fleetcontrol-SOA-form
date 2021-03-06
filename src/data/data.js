const  settings = {
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
}

const  header = {
  vesselName: 'Marika',
  charterersName: 'BPG Shipping Company DMCC',
  cpDate: '26.06.2019'
};

const hire = [
    // {      
    //   hireRate: 5000,  
    //   fromDate: { time: '01:01', date: '2019-06-01' }, 
    //   toDate: { time: '01:01', date: '2019-06-01' },        
    // }
];

const offHire = [ 
  {
    share: {status: true, value: 100},
    hireRate: 5000,
    fromDate: { time: '01:01', date: '2019-06-01' }, 
    toDate: { time: '01:01', date: '2019-06-01' },
    bunkers: {
      status: false,
      grades: [{
        desc: '', 
        price: 450,
        qtty: 100
      }]
    }  
  }
];

const charterersExpenses = [ 
    // {description: null, value: null},    
];

const ownersExpenses = [
      // {description: null, value: null}
];  
  
const holdsCleaning = [
      // { description: 'Fujairah', value: 4500, type: 'ILOHC' }
];

const  remittances = [
      // { description: '', date: '', value: null }
];

export {
  settings,
  header,
  hire,
  offHire,
  charterersExpenses,
  ownersExpenses,
  holdsCleaning,
  remittances
}