<template>
  <div>
    <hr>
    <table class="table">
      <tbody>
        <tr>
          <th class="not-bordered" colspan="6">SPEED CLAIM #{{ index + 1 }} ({{ description }})
            <div class="btn-edit" 
                 @click="showEditForm = true">
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
          <td colspan="2" class="not-bordered"></td>
          <td align="center">hrs</td>
          <td align="center">Days</td>
        </tr>
        <tr>
          <td class="not-bordered"></td>
          <td>Time {{ timeFlag }}:</td>
          <td align="center">{{ $myLib.formatNum(time.value) }}</td>
          <td align="center"><input type="text" :value="$myLib.formatNum(daysLost)" readonly=""></td>
          <td class="debit-col" align="right">{{ $myLib.formatNum(timeLostResult) }}</td>
          <td class="credit-col" align="right">{{ $myLib.formatNum(timeSavedResult) }}</td>
        </tr>
        <tr>
          <td colspan="6" class="not-bordered"></td>
        </tr>
        <tr v-if="addComm.on">
          <td>ADD COMM :</td>
          <td colspan="2"></td>
          <td align="center">{{ $myLib.formatNum(addComm.value) }}%</td>
          <td class="debit-col" align="right">{{ $myLib.formatNum(addCommSavedResult) }}</td>
          <td class="credit-col" align="right">{{ $myLib.formatNum(addCommLostResult) }}</td>
        </tr>
        <tr v-if="brkComm.on">
          <td>BRK COMM :</td>
          <td colspan="2"></td>
          <td align="center">{{ $myLib.formatNum(brkComm.value) }}%</td>
          <td class="debit-col" align="right">{{ $myLib.formatNum(brkCommSavedResult) }}</td>
          <td class="credit-col" align="right">{{ $myLib.formatNum(brkCommLostResult) }}</td>
        </tr>
        <!-- <tr>
          <td colspan="6" class="not-bordered"></td>
        </tr> -->
        <tr>
          <td>C/E/V :</td>
          <td colspan="2" align="right">Rate, USD/PMPR:</td>
          <td align="center">{{ cevRate.value }}</td>
          <td class="debit-col" align="right">{{ $myLib.formatNum(cevLostResult) }}</td>
          <td class="credit-col" align="right">{{ $myLib.formatNum(cevSavedResult) }}</td>
        </tr>              
      </tbody>
    </table>
    <table class="table" v-if="bunkers.on">
      <tbody>
        <tr>
          <td colspan="4" class="not-bordered"></td>
        </tr>  
        <tr>
          <th colspan="3">BUNKERS OVER-CONSUMED :</th>
          <td align="center">Price, USD/mt</td>
        </tr>
        <tr v-for="(grade, index) in bunkers.grades" :key="index">
          <td align="center">{{ grade.saved ? 'saved': null }}</td>
          <td align="center">{{ grade.name }}</td>
          <td align="right" class="pr-4">{{ $myLib.formatNum(grade.qtty) }} MT</td>
          <td align="center">{{ grade.price }}</td>
          <td class="debit-col" align="right">{{ !grade.saved ? $myLib.formatNum(grade.qtty * grade.price): null }}</td>
          <td class="credit-col" align="right">{{ grade.saved ? $myLib.formatNum(grade.qtty * grade.price): null }}</td>
        </tr>        
      </tbody>
    </table>
    <!-- <appOffHireFormEdit 
      v-if="showEditForm"
      @close="showEditForm = false"
      :index="index">
    </appOffHireFormEdit>       -->
  </div>
</template>

<script>
// import OffHireFormEdit from './OffHireFormEdit.vue';

export default {
  // components: {
  //   appOffHireFormEdit: OffHireFormEdit,
  // },
  props: ['description', 'hireRate', 'share', 'time', 'bunkers', 'index'],
  data() {
    return {
      showEditForm: false
    }
  },
  mounted() {    
    this.$store.dispatch('updateSpeedClaimDebit', { index: this.index, value: this.debit });
    this.$store.dispatch('updateSpeedClaimCredit', { index: this.index, value: this.credit });    
  },
  updated() {    
    this.$store.dispatch('updateSpeedClaimDebit', { index: this.index, value: this.debit });
    this.$store.dispatch('updateSpeedClaimCredit', { index: this.index, value: this.debit });    
  },
  computed: {
    timeFlag() {
      return this.time.flag ? 'saved' : 'lost';
    }, 
    daysLost() {
      return this.time.value / 24;
    },
    timeResult() {
      return this.hireRate * this.daysLost;
    },
    timeLostResult() {      
      return this.timeFlag === 'lost' ? this.timeResult : null;
    }, 
    timeSavedResult() {      
      return this.timeFlag === 'saved' ? this.timeResult : null;
    },
    addComm() {
      return this.$store.getters.finance.addComm;
    },
    addCommValue() {
      return this.addComm.on ? this.addComm.value: 0;
    },
    addCommResult() {
      return this.timeResult * this.addCommValue / 100;
    }, 
    addCommLostResult() {
      return this.timeFlag === 'lost' ? this.addCommResult : null;
    },
    addCommSavedResult() {      
      return this.timeFlag === 'saved' ? this.addCommResult : null;
    },
    brkComm() {
      return this.$store.getters.finance.brkComm;
    },
    brkCommValue() {
      return this.brkComm.on ? this.brkComm.value: 0;
    },
    brkCommResult() {
      return this.timeResult * this.brkCommValue / 100;
    },
    brkCommLostResult() {
      return this.timeFlag === 'lost' ? this.brkCommResult : null;
    },
    brkCommSavedResult() {      
      return this.timeFlag === 'saved' ? this.brkCommResult : null;
    },
    cevRate() {
      return this.$store.getters.finance.cevRate;
    },
    cevResult() {
      return this.daysLost * this.cevRate.value / this.cevRate.days;      
    },
    cevLostResult() {
      return this.timeFlag === 'lost' ? this.cevResult : null;
    },
    cevSavedResult() {      
      return this.timeFlag === 'saved' ? this.cevResult : null;
    },
    debit() {
      const bunkers = this.bunkers.on ? this.bunkers.grades.reduce((sum, grade) => {
        return grade.saved ? sum + 0 : sum + grade.price * grade.qtty;
      }, 0) : 0;

      return this.timeLostResult + 
             this.cevLostResult + 
             this.brkCommSavedResult + 
             this.addCommSavedResult + 
             bunkers;  
    }, 
    credit() {
      const bunkers = this.bunkers.on ? this.bunkers.grades.reduce((sum, grade) => {
        return grade.saved ? sum + grade.price * grade.qtty : sum + 0;
      }, 0) : 0;

      return this.timeSavedResult + 
             this.cevSavedResult + 
             this.brkCommLostResult + 
             this.addCommLostResult + 
             bunkers;
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
    margin-bottom: 8px;
  }
</style>
