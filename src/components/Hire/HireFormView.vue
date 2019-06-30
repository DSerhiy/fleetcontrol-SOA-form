<template>
  <div class="row">
    <div class="col-lg-12">
      <app-hire-item 
        v-for="(item, index) in hireData" 
        :key="index"
        :hireRate="item.hireRate"
        :fromDate="item.fromDate"
        :toDate="item.toDate"
        :addComm="item.addComm"
        :brkComm="item.brkComm"
        :cev="item.cevRate"
        >
      </app-hire-item>    
    </div>
    <!-- <app-hire-form-init v-if="showHireFormInit"></app-hire-form-init> -->
  </div>
</template>

<script>
  import HireItem from './HireItem.vue';
  import HireFormAdd from './HireFormAdd.vue';

  export default {
    data() {
      return {}
    },
    computed: {
      hireData() {
        return this.$store.getters.hireData;
      }
    },
    components: {
      appHireItem: HireItem, 
      appHireFormInit: HireFormAdd
    }
  }

</script>
