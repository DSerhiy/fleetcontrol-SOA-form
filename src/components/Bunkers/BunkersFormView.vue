<template>
  <div class="card">
    <div class="card-body">
      <div class="card-title">
       BUNKERS :
       <div class="btn-add"
             @click="showBunkersAdd = true">
          <i class="zmdi zmdi-collection-plus"></i>
        </div>  
      </div>
      <app-bunkers-delivery v-if="showBunkersDelivery"></app-bunkers-delivery>
      <app-bunkers-redeivery v-if="showBunkersRedelivery"></app-bunkers-redeivery>      
    </div>
    <app-bunkers-add 
      v-if="showBunkersAdd"
      @close="showBunkersAdd = false">
    </app-bunkers-add>    
  </div>
</template>
<script>
import BunkersDelivery from './BunkersDelivery.vue';
import BunkersRedelivery from './BunkersRedelivery.vue';
import BunkersAdd from './BunkersAdd.vue';

export default {
  data() {
    return {
      showBunkersAdd: false
    }
  },
  computed: {
    showBunkersDelivery() {
      return this.$store.getters.bunkersOnDelivery.show;
    }, 
    showBunkersRedelivery() {
      return this.$store.getters.bunkersOnRedelivery.show;
    }
  },
  components: {
    appBunkersDelivery: BunkersDelivery,
    appBunkersRedeivery: BunkersRedelivery,
    appBunkersAdd: BunkersAdd
  }
}
</script>