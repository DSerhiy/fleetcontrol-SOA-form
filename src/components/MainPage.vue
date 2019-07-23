<template>

<div>
  <app-hire></app-hire>   
  <app-holds-cleaning v-if="componentsOn.holdsCleaning"></app-holds-cleaning>
  <app-charterers-expenses v-if="componentsOn.charterersExpenses"></app-charterers-expenses>
  <app-owners-expenses v-if="componentsOn.ownersExpenses"></app-owners-expenses>
  <app-off-hire v-if="componentsOn.offHire"></app-off-hire>    
  <app-remittances></app-remittances>

  <!-- <app-speed-claim></app-speed-claim> -->
  <!-- <app-bunkers-delivery></app-bunkers-delivery> -->
  <!-- <app-settings-form></app-settings-form>   -->
</div>
  
</template>

<script>

import Hire from './Hire/HireFormView.vue';
import BunkersDelivery from './Bunkers/BunkersDeliveryFormView.vue';
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
  components: {
    appHire: Hire,
    appBunkersDelivery: BunkersDelivery,
    appHoldsCleaning: HoldsCleaning,    
    appCharterersExpenses: CharterersExpenses, 
    appOwnersExpenses: OwnersExpenses,
    appOffHire: OffHire,
    appSpeedClaim: SpeedClaim,
    appRemittances: Remittances    
  }  
}
</script>

