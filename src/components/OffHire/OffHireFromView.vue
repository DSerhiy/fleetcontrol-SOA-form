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
      <app-off-hire-item></app-off-hire-item>
    </div>
  </div>
</template>
<script>
import OffHireItem from './OffHireItem.vue';
export default {
  components: {
    appOffHireItem: OffHireItem
  }  
}
</script>

