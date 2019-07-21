<template>
  <div v-if="loaded" class="container">
    <app-header></app-header>    
    <router-view></router-view>    
    
  </div>
</template>

<script>
import SettingsForm from './components/SettingsForm.vue';
import Header from './components/Header.vue';

export default {
  data() {
    return {
      loaded: false,
      showSettingsForm: false
    }
  },
  computed: {
    firstStart() {
      return this.$store.getters.firstStart;
    }    
  },
  methods: {
    setFirstStart(setup) {
      this.$store.dispatch('setFirstStart', setup);
    }
  },
  mounted() {
    fetch('../appData.json')
      .then(response => response.json())
      .then(appData => {        
        this.$store.dispatch('initHeader', appData.header);
        this.$store.dispatch('initSettings', appData.settings);
        this.$store.dispatch('initHire', appData.hire);
        this.$store.dispatch('initOffHire', appData.offHire);
        this.$store.dispatch('initCharterersExpenses', appData.charterersExpenses);
        this.$store.dispatch('initOwnersExpeses', appData.ownersExpenses);
        this.$store.dispatch('initHoldsCleaning', appData.holdsCleaning);
        this.$store.dispatch('initRemittances', appData.remittances);
        this.loaded = true;
        
        if(this.firstStart) {                  
          this.$router.push('/settings');
          this.setFirstStart(false);
        }                          
      });

  },
  components: {
    appSettingsForm: SettingsForm,
    appHeader: Header    
  }
}
</script>

<style>

  .container {
    max-width: 1000px;
  }

 .card {
   padding-right: 20px;
 }

  #soa-form-layout table{
    table-layout: fixed;
  }
  #soa-form-layout td,
  #soa-form-layout th {
    border: 1px solid #464D54;
    padding: 4px;
    font-size: 0.9rem;
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
