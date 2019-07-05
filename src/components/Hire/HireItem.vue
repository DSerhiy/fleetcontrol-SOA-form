<template>
  <div class="card">
    <div class="card-body">
      <table class="table mt-4">
        <tr>
          <th>CHARTER HIRE :</th>
          <td colspan="2" align="right">Rate, USD/day:</td>
          <td><input type="text" :value="hireRate" readonly></td>
        </tr>
        <tr>
          <td class="not-bordered"></td>
          <td colspan="2">GMT</td>
        </tr>
        <tr>
          <td align="right">From:</td>
          <td><input type="time" :value="fromDate.time" @input="fromDate.time = $event.target.value"></td>
          <td><input type="date" :value="fromDate.date" @input="fromDate.date = $event.target.value"></td>
          <td>Days</td>
        </tr>
        <tr>
          <td align="right">To:</td>
          <td><input type="time" :value="toDate.time" @input="toDate.time = $event.target.value"></td>
          <td><input type="date" :value="toDate.date" @input="toDate.date = $event.target.value"></td>
          <td><input type="text" :value="hireDays" readonly></td>
          <td class="debit-col"></td>
          <td class="credit-col text-right">{{ hire }}</td>
        </tr>
        <tr>
          <td colspan="6" class="not-bordered"></td>
        </tr>
        <tr v-if="isAddComm">
          <th colspan="3">ADD COMM :</th>
          <td><input type="text" readonly :value="addComm + '%'"></td>
          <td class="debit-col text-right">{{ addCommValue }}</td>
          <td class="credit-col"></td>
        </tr>
        <tr v-if="isBrkComm">
          <th colspan="3">BRK COMM :</th>
          <td><input type="text" readonly :value="brkComm + '%'"></td>
          <td class="debit-col text-right">{{ brkCommValue }}</td>
          <td class="credit-col"></td>
        </tr>
        <tr>
          <td colspan="6" class="not-bordered"></td>
        </tr>
        <tr>
          <th>C/E/V :</th>
          <td colspan="2" align="right">Rate, USD/PMPR</td>
          <td><input type="text" readonly :value="cev"></td>
          <td class="debit-col"></td>
          <td class="credit-col text-right">{{ cevValue }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  props: ['hireRate', 'fromDate', 'toDate', 'addComm', 'brkComm', 'cev', 'isBallastBonus', 'ballastBonus'],
  computed: {
    hireDays() {
      const fromDate = new Date(this.fromDate.date + ':' + this.fromDate.time + 'Z');
      const toDate = new Date(this.toDate.date + ':' + this.toDate.time + 'Z');
      console.log(toDate, fromDate);
      return (toDate - fromDate) / 60 / 60 / 24 / 1000;
    }, 
    hire() {
      return this.$myLib.formatNum(this.hireDays * this.hireRate);
    }, 
    addCommValue() {
      return this.$myLib.formatNum(this.hireRate * this.hireDays * this.addComm / 100);
    },
    brkCommValue() {
      return this.$myLib.formatNum(this.hireRate * this.hireDays * this.brkComm / 100);
    }, 
    cevValue() {
      return this.$myLib.formatNum(this.cev / 30 * this.hireDays);
    },
    isAddComm(){  
      return this.$store.getters.isAddComm;
    },
    isBrkComm() {
      return this.$store.getters.isBrkComm;
    }
  }
}
</script>

        
