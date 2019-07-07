<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="btn-add"
           @click="addItem()">
        <i class="zmdi zmdi-collection-plus"></i>
      </div>
      <app-hire-item 
        v-for="(item, index) in hireData" 
        :key="index"
        :hireRate="item.hireRate"
        :fromDate="item.fromDate"
        :toDate="item.toDate"
        :ballastBonus="item.ballastBonus"
        :cev="item.cevRate"
        >
      </app-hire-item>    
    </div>
    <app-hire-form-edit></app-hire-form-edit>
    <!-- <app-hire-form-init v-if="showHireFormInit"></app-hire-form-init> -->
  </div>
</template>

<script>
  import HireItem from './HireItem.vue';
  import HireFormAdd from './HireFormAdd.vue';
  import HireFormEdit from './HireFromEdit.vue';

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
      appHireFormInit: HireFormAdd,
      appHireFormEdit: HireFormEdit
    }
  }
</script>
<style scoped>
  .btn-add {
    position: absolute;
    top: 10px;
    right: 25px;
    color: white;
    z-index: 1;
  }
</style>

