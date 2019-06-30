<template>
<div class="container">
  <app-header></app-header>
  <app-start-form v-if="showStartForm"
                  @save="showStartForm = false"></app-start-form>
  <template v-else>
    <app-hire></app-hire>
    <app-charterers-expenses></app-charterers-expenses>
    <app-owners-expenses></app-owners-expenses>
  </template>
</div> 
</template>

<script>
import Header from './components/Header.vue';
import Hire from './components/Hire/HireFormView.vue'
import CharterersExpenses from './components/CharterersExpenses/ExpensesFormView.vue';
import OwnersExpenses from './components/OwnersExpenses/ExpensesFormView.vue';
import StartForm from './components/StartForm.vue';

export default {
  data() {
    return {
      showStartForm: true
    }
  },
  created() {
    this.$store.dispatch('initComponents');

    if(this.$store.getters.isDelivered)
      this.showStartForm = false; 
  },
  components: {
    appHeader: Header, 
    appHire: Hire,
    appCharterersExpenses: CharterersExpenses, 
    appOwnersExpenses: OwnersExpenses,
    appStartForm: StartForm
  }
}
</script>

<style>
  #soa-form-layout table{
    table-layout: fixed;
  }
  #soa-form-layout td,
  #soa-form-layout th {
    border: 1px solid #464D54;
  }
  #soa-form-layout input{
    display: block;
    width: 100%;
    padding: 0 .75rem;
    font-size: 1rem;
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
</style>
