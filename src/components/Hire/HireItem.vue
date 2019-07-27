<template>
<div>
  <hr>
  <table class="table">
    <tr>
      <th>HIRE # {{index + 1}} </th>
      <td colspan="2" align="right">Rate, USD/day :</td>
      <td align="center">
        {{ hireRate }}
        <div class="btn-edit"
          @click="$emit('edit', index)">
          <i class="fa fa-edit"></i> 
        </div>
      </td>
    </tr>
    <tr>
      <td class="not-bordered"></td>
      <td colspan="2" align="center">GMT Time</td>          
    </tr>
    <tr>
      <td align="right">From:</td>
      <td align="center" :class="{estimated: isEstimated}">{{ fromDate.time }}</td>
      <td align="center" :class="{estimated: isEstimated}">{{ new Date(fromDate.date) }}</td> 
      <td align="center">Days</td>  
    </tr>
    <tr>
      <td align="right">To:</td>
      <td align="center">{{ toDate.time }}</td>
      <td align="center">{{ new Date(toDate.date) }}</td>   
      <td align="center"> <input type="text" :value="$myLib.formatNum(hireDays)" readonly></td>
      <td class="debit-col"></td>
      <td class="credit-col text-right">{{ $myLib.formatNum(hireResult) }}</td>
    </tr>
    <tr v-if="ballastBonus.on && index === 0">
      <th colspan="4">GROSS BALLAST BONUS :</th>
      <td class="debit-col"></td>
      <td class="credit-col text-right">{{ $myLib.formatNum(ballastBonusValue) }}</td>
    </tr>
    <tr>
      <td colspan="6" class="not-bordered"></td>
    </tr>
    <tr v-if="addComm.on">
      <td> ADD COMM : </td>
      <td colspan="2"></td>
      <td align="center">{{ $myLib.formatNum(addComm.value) + '%' }}</td>          
      <td class="debit-col text-right">{{ $myLib.formatNum(addCommResult) }}</td>
      <td class="credit-col"></td>
    </tr>
    <tr v-if="brkComm.on">
      <td>BRK COMM :</td>
      <td colspan="2"></td>
      <td align="center">{{ $myLib.formatNum(brkComm.value) + '%' }}</td>          
      <td class="debit-col text-right">{{ $myLib.formatNum(brkCommResult) }}</td>
      <td class="credit-col"></td>
    </tr>
    <!-- <tr v-if="brkComm.status || addComm.status">
      <td colspan="6" class="not-bordered"></td>
    </tr> -->
    <tr>
      <td>C/E/V :</td>
      <td colspan="2" align="right">Rate, USD/PMPR:</td>
      <td align="center">{{ cev.value }} </td>          
      <td class="debit-col"></td>
      <td class="credit-col text-right">{{ $myLib.formatNum(cevResult) }}</td>
    </tr>
  </table>
</div>
</template>
<script>
export default {
  props: ['hireRate', 'fromDate', 'toDate', 'index'],
  mounted() {
    this.$store.dispatch('updateHireDebit', {index: this.index, value: this.debit});
    this.$store.dispatch('updateHireCredit', {index: this.index, value: this.credit});    
  },
  updated() {
    this.$store.dispatch('updateHireDebit', {index: this.index, value: this.debit});
    this.$store.dispatch('updateHireCredit', {index: this.index, value: this.credit});    
  },
  computed: {
    hireDays() {
      const fromDate = new Date(this.fromDate.date + ':' + this.fromDate.time + 'Z');
      const toDate = new Date(this.toDate.date + ':' + this.toDate.time + 'Z');
      return (toDate - fromDate) / 60 / 60 / 24 / 1000;
    }, 
    hireResult() {
      return this.hireDays * this.hireRate;
    }, 
    addComm(){  
      return this.$store.getters.finance.addComm;
    },
    addCommValue() {
      return this.addComm.on ? this.addComm.value: 0;
    },
    addCommResult() {
      return (this.hireResult + this.ballastBonusValue) * this.addCommValue / 100;      
    },
    brkComm() {
      return this.$store.getters.finance.brkComm;
    },
    brkCommValue() {
      return this.brkComm.on ? this.brkComm.value: 0;
    },
    brkCommResult() {
      return (this.hireResult + this.ballastBonusValue) * this.brkCommValue / 100;
    }, 
    ballastBonus() {
      return this.$store.getters.finance.ballastBonus;
    }, 
    ballastBonusValue() {
      return this.ballastBonus.on ? this.ballastBonus.value : 0;
    }, 
    cev() {
      return this.$store.getters.finance.cevRate;
    },
    cevResult() {
      return this.cev.value / this.cev.days * this.hireDays;      
    }, 
    debit() {
      return this.addCommResult + this.brkCommResult;
    }, 
    credit(){
      return this.hireResult + this.cevResult + this.ballastBonusValue;
    }, 
    isEstimated() {
      if (this.index === 0 && this.$store.getters.delivery.status === 'estimated')
        return true;
      
      return false;
    }
  }
}
</script>
<style scoped>
  table {
    position: relative;
  }
  input[type="text"] {
    text-align: center;
    max-width: 80px;
  }  
  .btn-edit {
    border-radius: 5px;
    padding: 5px;
    position: absolute;
    right: -35px; 
    top: 0px; 
    cursor: pointer;
    transition: 0.2s;
  }
  .btn-edit:hover {
    font-size: 1.5rem;
    padding: 0;
  }
  hr{
    background: rgba(20, 19, 19, 0.767);
    height: 2px;
  }
  .estimated {
    color: rgba(255, 128, 89, 0.842);
  }
</style>

        
