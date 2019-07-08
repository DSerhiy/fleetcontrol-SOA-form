<template>
  <div class="card">
    <div class="card-body">
      <table class="table mt-4">
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
          <td align="center">{{ hireDays }}</td>
          <td class="debit-col"></td>
          <td class="credit-col text-right">{{ hireResult }}</td>
        </tr>
        <tr v-if="ballastBonus.status">
          <th colspan="4">GROSS BALLAST BONUS :</th>
          <td class="debit-col"></td>
          <td class="credit-col text-right">{{ ballastBonusValue }}</td>
        </tr>
        <tr>
          <td colspan="6" class="not-bordered"></td>
        </tr>
        <tr v-if="addComm.status">
          <th> ADD COMM : </th>
          <td align="center">{{ addComm.value + '%' }}</td>
          <td colspan="2"></td>
          <td class="debit-col text-right">{{ addCommResult }}</td>
          <td class="credit-col"></td>
        </tr>
        <tr v-if="brkComm.status">
          <th>BRK COMM :</th>
          <td align="center">{{ brkComm.value + '%' }}</td>
          <td colspan="2"></td>
          <td class="debit-col text-right">{{ brkCommResult }}</td>
          <td class="credit-col"></td>
        </tr>
        <tr>
          <td colspan="6" class="not-bordered"></td>
        </tr>
        <tr>
          <th>C/E/V :</th>
          <td align="right">Rate, USD/PMPR:</td>
          <td align="center">{{ cev }} </td>
          <td align="center"></td>
          <td class="debit-col"></td>
          <td class="credit-col text-right">{{ cevResult }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  props: ['hireRate', 'fromDate', 'toDate', 'cev', 'ballastBonus', 'index'],
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
      return this.$myLib.formatNum((toDate - fromDate) / 60 / 60 / 24 / 1000);
    }, 
    hireResult() {
      const result = this.hireDays * this.hireRate;
      return this.$myLib.formatNum(result);
    }, 
    addCommResult() {
      const result = (this.hireRate * this.hireDays + this.ballastBonus.value) * this.addComm.value / 100;
      return this.$myLib.formatNum(result);
    },
    brkCommResult() {
      const result = (this.hireRate * this.hireDays + this.ballastBonus.value) * this.brkComm.value / 100;
      return this.$myLib.formatNum(result);
    }, 
    cevResult() {
      const result = this.cev / 30 * this.hireDays;
      return this.$myLib.formatNum(result);
    }, 
    ballastBonusValue() {
      return this.$myLib.formatNum(this.ballastBonus.value);
    }    
  }
}
</script>
<style scoped>
  input[type="time"] {
    max-width: 100px;
  }
  /* td {
    position: relative;
  } */
  .btn-edit {
    /* border: 1px solid red; */
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

        
