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
      const hire = this.$store.getters.hireItems.reduce((sum, cur) => {
        return sum + cur.credit;
      }, 0);          
      
      const offHire = 
        this.$store.getters.componentsOn.offHire ?
        this.$store.getters.offHireItems.reduce((sum, cur) => {
          return sum + cur.credit;
        }, 0) : 0; 

      const chrExps = 
        this.$store.getters.componentsOn.charterersExpenses ?
        this.$store.getters.charterersExpensesItems.reduce((sum, cur) => {
          return sum + cur.value;
        }, 0) : 0;   
      
      const holdsCleaning = 
        this.$store.getters.componentsOn.holdsCleaning ?
        this.$store.getters.holdsCleaningItems.reduce((sum, cur) => {
          return sum + cur.value;
        }, 0) : 0; 
      
      const bunkersOnDelivery = 
        this.$store.getters.bunkersOnDelivery.show && this.$store.getters.componentsOn.bunkers ?
        this.$store.getters.bunkersOnDelivery.grades.reduce((sum, cur) => {
          return sum + (cur.qtty * cur.price);
        }, 0): 0;
      
      return hire + offHire + chrExps + holdsCleaning + bunkersOnDelivery;
    },
    debit() {
      const hire =  this.$store.getters.hireItems.reduce((sum, cur) => {
        return sum + cur.debit;
      }, 0);        

      const offhire =
        this.$store.getters.componentsOn.offHire ? 
        this.$store.getters.offHireItems.reduce((sum, cur) => {
          return sum + cur.debit;
        }, 0) : 0;      
    
      const ownExp = 
        this.$store.getters.componentsOn.ownersExpenses ? 
        this.$store.getters.ownersExpensesItems.reduce((sum, cur) => {
          return sum + cur.value;
        }, 0) : 0;  
      
      const bunkersOnRedelivery = 
        this.$store.getters.bunkersOnRedelivery.show && this.$store.getters.componentsOn.bunkers ?
        this.$store.getters.bunkersOnRedelivery.grades.reduce((sum, cur) => {
          return sum + (cur.qtty * cur.price);
        }, 0): 0;
     
      const remittance = this.items.reduce((sum, cur) => {
        return sum + cur.value
      }, 0);        
      
      return hire + ownExp + offhire + remittance + bunkersOnRedelivery;
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

