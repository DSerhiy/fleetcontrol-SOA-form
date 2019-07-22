<template>
  <div>
    <hr>
    <table class="table">
      <tbody>
        <tr>
          <th class="not-bordered" colspan="6">OFF-HIRE #{{ index + 1 }} ({{ description }})
            <div class="btn-edit" 
                 @click="$emit('edit', index)">
              <i class="fa fa-edit"></i> 
            </div>
          </th>          
        </tr>
        <tr v-if="share.status">
          <td colspan="3" align="right">Share:</td>
          <td align="center">{{ share.value }}%</td>
        </tr>
        <tr>
          <td colspan="3" align="right">Rate, USD/day:</td>
          <td align="center">{{ hireRate }}</td>
        </tr>
        <tr>
          <td class="not-bordered"></td>
          <td colspan="2" align="center">Local Time</td>
        </tr>
        <tr>
          <td align="right">From:</td>
          <td align="center">{{ fromDate.time }}</td>
          <td align="center">{{ new Date(fromDate.date) }}</td>
          <td align="center">Days</td>
        </tr>
        <tr>
          <td align="right">To:</td>
          <td align="center">{{ toDate.time}}</td>
          <td align="center">{{ new Date(fromDate.date)}}</td>
          <td align="center"><input type="text" :value="$myLib.formatNum(hireDays)" readonly></td>
          <td class="debit-col" align="right">{{ $myLib.formatNum(offHireResult) }}</td>
          <td class="credit-col"></td>
        </tr>
        <tr>
          <td colspan="6" class="not-bordered"></td>
        </tr>
        <tr v-if="addComm.on">
          <td colspan="3">ADD COMM OFF-HIRE PERIODS :</td>
          <td align="center">{{ $myLib.formatNum(addComm.value) }}%</td>
          <td class="debit-col"></td>
          <td class="credit-col" align="right">{{ $myLib.formatNum(addCommResult) }}</td>
        </tr>
        <tr v-if="brkComm.on">
          <td colspan="3">BRK COMM OFF-HIRE PERIODS :</td>
          <td align="center">{{ brkComm.value }}%</td>
          <td class="debit-col"></td>
          <td class="credit-col" align="right">{{ $myLib.formatNum(brkCommResult) }}</td>
        </tr>
        <!-- <tr>
          <td colspan="6" class="not-bordered"></td>
        </tr> -->
        <tr>
          <td colspan="2">C/E/V OFF-HIRE PERIOD :</td>
          <td>Rate, USD/PMPR</td>
          <td align="center">{{ cevRate.value }}</td>
          <td class="debit-col" align="right">{{ $myLib.formatNum(cevResult) }}</td>
          <td class="credit-col"></td>
        </tr>              
      </tbody>
    </table>
    <table class="table" v-if="bunkers.status">
      <tbody>
        <tr>
          <td colspan="4" class="not-bordered"></td>
        </tr>  
        <tr>
          <th colspan="3">BUNKERS CONSUMED DURING OFF-HIRE :</th>
          <td align="center">Price, USD/mt</td>
        </tr>
        <tr v-for="(grade, index) in bunkers.grades" :key="index">
          <td align="center"></td>
          <td align="center">{{ grade.name }}</td>
          <td align="right" class="pr-4">{{ $myLib.formatNum(grade.qtty) }} MT</td>
          <td align="center">{{ grade.price }}</td>
          <td class="debit-col" align="right">{{ $myLib.formatNum(grade.qtty * grade.price) }}</td>
          <td class="credit-col"></td>
        </tr>        
      </tbody>
    </table>      
  </div>
</template>
<script>
export default {
  props: ['description', 'hireRate', 'share', 'fromDate', 'toDate', 'bunkers', 'index'],
  computed: {
    hireDays() {
      const fromDate = new Date(this.fromDate.date + ':' + this.fromDate.time + 'Z');
      const toDate = new Date(this.toDate.date + ':' + this.toDate.time + 'Z');
      return (toDate - fromDate) / 60 / 60 / 24 / 1000 * (this.share.value / 100);
    },
    offHireResult() {
      return this.hireRate * this.hireDays; 
    }, 
    addComm() {
      return this.$store.getters.finance.addComm;
    },
    addCommResult() {
      return this.offHireResult * this.addComm.value / 100;
    },
    brkComm() {
      return this.$store.getters.finance.brkComm;
    },
    brkCommResult() {
      return this.offHireResult * this.brkComm.value / 100;
    },
    cevRate() {
      return this.$store.getters.finance.cevRate;
    },
    cevResult() {
      return this.hireDays * this.cevRate.value / this.cevRate.days;      
    },
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
    margin-bottom: 8px;
  }
</style>

