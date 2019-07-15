<template>
  <table class="table">
    <tr>
      <th>CHARTER HIRE :</th>
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
      <td align="center">{{ fromDate.time }}</td>
      <td align="center">{{ new Date(fromDate.date) }}</td> 
      <td align="center">Days</td>  
    </tr>
    <tr>
      <td align="right">To:</td>
      <td align="center">{{ toDate.time }}</td>
      <td align="center">{{ new Date(toDate.date) }}</td>   
      <td align="center">{{ $myLib.formatNum(hireDays) }}</td>
      <td class="debit-col"></td>
      <td class="credit-col text-right">{{ $myLib.formatNum(hireResult) }}</td>
    </tr>
    <tr v-if="ballastBonus.status && index === 0">
      <th colspan="4">GROSS BALLAST BONUS :</th>
      <td class="debit-col"></td>
      <td class="credit-col text-right">{{ $myLib.formatNum(ballastBonusValue) }}</td>
    </tr>
    <tr>
      <td colspan="6" class="not-bordered"></td>
    </tr>
    <tr v-if="addComm.status">
      <th> ADD COMM : </th>
      <td colspan="2"></td>
      <td align="center">{{ $myLib.formatNum(addComm.value) + '%' }}</td>          
      <td class="debit-col text-right">{{ $myLib.formatNum(addCommResult) }}</td>
      <td class="credit-col"></td>
    </tr>
    <tr v-if="brkComm.status">
      <th>BRK COMM :</th>
      <td colspan="2"></td>
      <td align="center">{{ $myLib.formatNum(brkComm.value) + '%' }}</td>          
      <td class="debit-col text-right">{{ $myLib.formatNum(brkCommResult) }}</td>
      <td class="credit-col"></td>
    </tr>
    <tr>
      <td colspan="6" class="not-bordered"></td>
    </tr>
    <tr>
      <th>C/E/V :</th>
      <td colspan="2" align="right">Rate, USD/PMPR:</td>
      <td align="center">{{ cev }} </td>          
      <td class="debit-col"></td>
      <td class="credit-col text-right">{{ $myLib.formatNum(cevResult) }}</td>
    </tr>
  </table>
</template>
<script>
export default {
  props: ['hireRate', 'fromDate', 'toDate', 'index'],
  computed: {
    addComm(){  
      return this.$store.getters.addComm;
    },
    brkComm() {
      return this.$store.getters.brkComm;
    },
    hireDays() {
      const fromDate = new Date(this.fromDate.date + ':' + this.fromDate.time + 'Z');
      const toDate = new Date(this.toDate.date + ':' + this.toDate.time + 'Z');
      return (toDate - fromDate) / 60 / 60 / 24 / 1000;
    }, 
    hireResult() {
      return this.hireDays * this.hireRate;
    }, 
    addCommResult() {
      return (this.hireRate * this.hireDays + Number(this.ballastBonus.value)) * this.addComm.value / 100;      
    },
    brkCommResult() {
      return (this.hireRate * this.hireDays + Number(this.ballastBonus.value)) * this.brkComm.value / 100;
    }, 
    cev() {
      return this.$store.getters.cevRate;
    },
    cevResult() {
      return this.cev / 30 * this.hireDays;      
    }, 
    ballastBonus() {
      return this.$store.getters.ballastBonus;
    }, 
    ballastBonusValue() {
      return this.ballastBonus.value;
    }    
  }
}
</script>
<style scoped>
  input[type="time"] {
    max-width: 100px;
  }  
  .btn-edit {
    border-radius: 5px;
    padding: 5px;
    position: absolute;
    right: 5px; 
    top: 45px; 
    cursor: pointer;
    transition: 0.2s;
  }
  .btn-edit:hover {
    font-size: 1.5rem;
    padding: 0;
  }
</style>

        
