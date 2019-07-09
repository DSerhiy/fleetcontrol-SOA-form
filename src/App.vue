<template>
<div class="container">
  <app-header @settings="showSettingsForm = true"></app-header>
  <app-settings-form v-if="showSettingsForm"
                  @save="showSettingsForm = false"></app-settings-form>
  <template v-else>
    <app-hire></app-hire>
    <!-- <app-bunkers-delivery></app-bunkers-delivery> -->
    <!-- <app-holds-cleaning></app-holds-cleaning> -->
    <!-- <app-charterers-expenses></app-charterers-expenses> -->
    <!-- <app-owners-expenses></app-owners-expenses> -->
    <!-- <app-off-hire></app-off-hire> -->
    <!-- <app-speed-claim></app-speed-claim> -->
    <!-- <app-remittances></app-remittances> -->
  </template>
</div> 
</template>

<script>
import SettingsForm from './components/SettingsForm.vue';
import Header from './components/Header.vue';
import Hire from './components/Hire/HireFormView.vue';
import BunkersDelivery from './components/Bunkers/BunkersDeliveryFormView.vue';
import HoldsCleaning from './components/HoldsCleaning/HoldsCleaningFromView.vue';
import CharterersExpenses from './components/CharterersExpenses/ExpensesFormView.vue';
import OwnersExpenses from './components/OwnersExpenses/ExpensesFormView.vue';
import OffHire from './components/OffHire/OffHireFromView.vue';
import SpeedClaim from './components/SpeedClaim/SpeedClaimFromView.vue';
import Remittances from './components/Remittances/RemittancesFormView.vue';


export default {
  data() {
    return {
      showSettingsForm: true
    }
  },
  created() {
    this.$store.dispatch('initApp');

    if(this.$store.getters.isInit)
      this.showStartForm = false; 
  },
  components: {
    appSettingsForm: SettingsForm,
    appHeader: Header, 
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

<style>

 .card {
   padding-right: 20px;
 }

  #soa-form-layout table{
    table-layout: fixed;
  }
  #soa-form-layout td,
  #soa-form-layout th {
    border: 1px solid #464D54;
    padding: 7px;
    font-size: 1rem;
  }
  #soa-form-layout input{
    display: block;
    width: 100%;
    padding: 0 .75rem;
    font-size: 0.9rem;
    line-height: 1.5;
    background-color: rgba(0, 0, 0, 0.05);
    color: #fff;
    background-clip: padding-box;
    border: 1px solid #707e86;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  }
  #soa-form-layout input::-webkit-calendar-picker-indicator{
    display: none;
  }
  #soa-form-layout input:read-only{
    background-color: rgba(255, 255, 255, .1);
  }
  #soa-form-layout input:not(:read-only):focus{
    box-shadow: 0 0 0 0.1rem rgba(255, 255, 255, .45);
  }
  #soa-form-layout .not-bordered{
    border: 0 transparent !important;
  }
  #soa-form-layout .debit-col {
    background-color: rgba(182, 255, 200, .07);
    border-color: #465855;
  }
  #soa-form-layout .credit-col {
    background-color: rgba(255, 202, 81, .07);
    border-color: #545653;
  }
  #soa-form-layout .debit-col input{
    border-color: rgba(182, 255, 200, .4);
  }
  #soa-form-layout .credit-col input{
    border-color: rgba(255, 202, 81, .4);
  }

  .btn-add {
    position: absolute;
    right: 15px;
    top: 15px;
    font-size: 1.1rem;
    cursor: pointer;
  }
</style>
