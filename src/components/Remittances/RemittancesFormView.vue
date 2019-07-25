<template>
  <div class="card">
    <div class="card-body">
      <div class="card-title">
        REMITTANCES DONE
      </div>
      <app-remittance-item v-for="(item, index) in items" 
                           :key="index"
                           :description="item.description"
                           :date="item.date"
                           :value="item.value">
      </app-remittance-item>
      <table class="table">
        <tr>
          <td colspan="4" class="not-bordered"></td>
          <td class="debit-col" align="right">{{$myLib.formatNum(debit)}}</td>
          <td class="credit-col" align="right">{{$myLib.formatNum(credit)}}</td>
        </tr>
        <tr>
          <th colspan="4">BALANCE DUE TO OWNERS :</th>
          <td class="debit-col" align="right">{{ result < 0? $myLib.formatNum(Math.abs(result)): null}}</td>
          <td class="credit-col" align="right">{{result >= 0? $myLib.formatNum(result): null}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import remittanceItem from './RemittanceItem.vue';

export default {  
  computed: {
    items() {
      return this.$store.getters.remittancesItems;
    },
    credit() {  
      // Hire calculation
      let hire = 0;
      this.$store.getters.hireItems.forEach((item) => {
        const fromDate = new Date(item.fromDate.date + ':' + item.fromDate.time + 'Z');
        const toDate = new Date(item.toDate.date + ':' + item.toDate.time + 'Z');
        const days = (toDate - fromDate) / 60 / 60 / 24 / 1000;
        
        hire += days * (Number(this.$store.getters.finance.cevRate.value) / this.$store.getters.finance.cevRate.days + Number(item.hireRate));
      });

      if(this.$store.getters.finance.ballastBonus.on)
          hire += Number(this.$store.getters.finance.ballastBonus.value);

      // Charterers expenses calculations
      let chrExps = 0;

      this.$store.getters.charterersExpensesItems.forEach(item => {
        chrExps += Number(item.value);
      });

      // Holds cleaning calculations
      let holdsCleaning = 0;

      this.$store.getters.holdsCleaningItems.forEach(item => {
        holdsCleaning += Number(item.value);
      });
      
      return hire + chrExps + holdsCleaning;
    },
    debit() {

      const addComm = this.$store.getters.finance.addComm.on ? 
                      Number(this.$store.getters.finance.addComm.value) : 0;
      const brkComm = this.$store.getters.finance.brkComm.on ? 
                      Number(this.$store.getters.finance.brkComm.value) : 0;

      // Hire calculations 
      let debitHire = 0;      
     
      this.$store.getters.hireItems.forEach((item) => {
        const fromDate = new Date(item.fromDate.date + ':' + item.fromDate.time + 'Z');
        const toDate = new Date(item.toDate.date + ':' + item.toDate.time + 'Z');
        const days = (toDate - fromDate) / 60 / 60 / 24 / 1000;
        const hireRate = Number(item.hireRate);          
              
        debitHire += hireRate * days * (addComm + brkComm) / 100;
      });

      if(this.$store.getters.finance.ballastBonus.on)
        debitHire += Number(this.$store.getters.finance.ballastBonus.value) * (addComm + brkComm) / 100;
    

      // Off-hire calculations
      let debitOffhire = 0;

      this.$store.getters.offHireItems.forEach((item) => {
        const fromDate = new Date(item.fromDate.date + ':' + item.fromDate.time + 'Z');
        const toDate = new Date(item.toDate.date + ':' + item.toDate.time + 'Z');
        const days = (toDate - fromDate) / 60 / 60 / 24 / 1000;
        
        debitOffhire += days * (Number(this.$store.getters.finance.cevRate.value) / this.$store.getters.finance.cevRate.days + Number(item.hireRate));
      });

      // Owners expenses calculations
      let debitOwnExp = 0;

      this.$store.getters.ownersExpensesItems.forEach(item => {
        debitOwnExp += Number(item.value);
      });       
      
      return debitHire + debitOwnExp + debitOffhire;
    },
    result() {
      return this.credit - this.debit;
    }
  },
  components: {
    appRemittanceItem: remittanceItem
  }

}
</script>

