<template>

<div>
  <app-hire></app-hire>  
  <app-bunkers v-if="componentsOn.bunkers"></app-bunkers> 
  <app-holds-cleaning v-if="componentsOn.holdsCleaning"></app-holds-cleaning>
  <app-charterers-expenses v-if="componentsOn.charterersExpenses"></app-charterers-expenses>
  <app-owners-expenses v-if="componentsOn.ownersExpenses"></app-owners-expenses>
  <app-off-hire v-if="componentsOn.offHire"></app-off-hire> 
  <app-speed-claim v-if="componentsOn.speedClaim"></app-speed-claim>  
  <app-remittances></app-remittances>

  <button type="button" 
          class="btn btn-success"
          @click="save()">
    <i class="fa fa-check"></i> Save
  </button>
    
</div>
  
</template>

<script>

import Hire from './Hire/HireFormView.vue';
import Bunkers from './Bunkers/BunkersFormView.vue';
import HoldsCleaning from './HoldsCleaning/HoldsCleaningFromView.vue';
import CharterersExpenses from './CharterersExpenses/ExpensesFormView.vue';
import OwnersExpenses from './OwnersExpenses/ExpensesFormView.vue';
import OffHire from './OffHire/OffHireFromView.vue';
import SpeedClaim from './SpeedClaim/SpeedClaimFromView.vue';
import Remittances from './Remittances/RemittancesFormView.vue';

export default {
  computed: {
    componentsOn() {
      return this.$store.getters.componentsOn;
    }
  },
  methods: {
    
    save() {
      const rowData = this.$store.state
      const data = {};
      for (let key in rowData) { data[key] = rowData[key][key] }
      
      fetch('http://localhost:3000/data', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });      
    }
  }, 
  components: {
    appHire: Hire,
    appBunkers: Bunkers,
    appHoldsCleaning: HoldsCleaning,    
    appCharterersExpenses: CharterersExpenses, 
    appOwnersExpenses: OwnersExpenses,
    appOffHire: OffHire,
    appSpeedClaim: SpeedClaim,
    appRemittances: Remittances    
  }  
}
</script>

