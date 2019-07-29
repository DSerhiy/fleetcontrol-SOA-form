<template>
  <div class="card">
    <div class="card-body">
      <div class="card-title">
       CHARTER OFF-HIRE :
       <div class="btn-add"
             @click="addItem()">
          <i class="zmdi zmdi-collection-plus"></i>
        </div>  
      </div>
      <app-off-hire-item 
        v-for="(item, index) in offHireItems"
        :key="index"
        :description="item.description"
        :hireRate="item.hireRate"
        :share="item.share"
        :fromDate="item.fromDate"
        :toDate="item.toDate"
        :bunkers="item.bunkers"
        :index="index">
      </app-off-hire-item>
    </div>
    <app-off-hire-form-add 
      v-if="showAddForm" 
      @close="showAddForm = false">
    </app-off-hire-form-add>
  </div>
</template>
<script>
import OffHireItem from './OffHireItem.vue';
import OffHireFormAdd from './OffHireFormAdd.vue';

export default {
  data() {
    return {
      showAddForm: false
    }
  },
  computed: {
    offHireItems() {
      return this.$store.getters.offHireItems;
    }
  },
  methods: {
    addItem() {
      this.showAddForm = true;
    }
  },
  components: {
    appOffHireItem: OffHireItem,
    appOffHireFormAdd: OffHireFormAdd
  }  
}
</script>

