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
          <td class="debit-col"></td>
          <td class="credit-col" align="right">8 750.00</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import remittanceItem from './RemittanceItem.vue';

export default {  
  data() {
    return {

    }
  },
  computed: {
    items() {
      return this.$store.getters.remittancesItems;
    },
    credit() {  
      // Hire calculation
      let crHire = 0;
      this.$store.getters.hireItems.forEach((item) => {
        const fromDate = new Date(item.fromDate.date + ':' + item.fromDate.time + 'Z');
        const toDate = new Date(item.toDate.date + ':' + item.toDate.time + 'Z');
        const days = (toDate - fromDate) / 60 / 60 / 24 / 1000;
        
        crHire += days * (Number(this.$store.getters.cevRate) / 30 + Number(item.hireRate));
      });

      if(this.$store.getters.ballastBonus.status)
          crHire += Number(this.$store.getters.ballastBonus.value);

      // Charterers expenses calculations
      let crChrExp = 0;

      this.$store.getters.charterersExpensesItems.forEach(item => {
        crChrExp += Number(item.value);
      });

      // Holds cleaning calculations
      let crHolds = 0;

      this.$store.getters.holdsCleaningItems.forEach(item => {
        crHolds += Number(item.value);
      });
      
      return crHire + crChrExp + crHolds;
    },
    debit() {
      // Hire calculations 
      let debitHire = 0;
      
      if(this.$store.getters.addComm.status || this.$store.getters.brkComm.status) {
        const addComm = this.$store.getters.addComm.status ? Number(this.$store.getters.addComm.value) : 0;
        const brkComm = this.$store.getters.brkComm.status ? Number(this.$store.getters.brkComm.value) : 0;
        
        this.$store.getters.hireItems.forEach((item) => {
          const fromDate = new Date(item.fromDate.date + ':' + item.fromDate.time + 'Z');
          const toDate = new Date(item.toDate.date + ':' + item.toDate.time + 'Z');
          const days = (toDate - fromDate) / 60 / 60 / 24 / 1000;
          const hireRate = Number(item.hireRate);          
                
          debitHire += hireRate * days * (addComm + brkComm) / 100;
        });

        if(this.$store.getters.ballastBonus.status)
          debitHire += Number(this.$store.getters.ballastBonus.value) * (addComm + brkComm) / 100;
      };

      // Owners expenses calculations
      let debitOwnExp = 0;

      this.$store.getters.ownersExpensesItems.forEach(item => {
        debitOwnExp += Number(item.value);
      });       
      
      return debitHire + debitOwnExp;
    }
  },
  watch: {
    
  },
  components: {
    appRemittanceItem: remittanceItem
  }

}
</script>

