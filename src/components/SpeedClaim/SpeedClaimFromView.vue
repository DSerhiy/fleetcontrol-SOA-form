<template>
  <div class="card">
    <div class="card-body">
      <div class="card-title">
       SPEED CLAIMS :
       <div class="btn-add"
             @click="addItem()">
          <i class="zmdi zmdi-collection-plus"></i>
        </div>  
      </div>
      <app-speed-claim-item 
        v-for="(item, index) in speedClaimItems"
        :key="index"
        :description="item.description"
        :hireRate="item.hireRate"
        :share="item.share"
        :time="item.time"
        :bunkers="item.bunkers"
        :index="index">
      </app-speed-claim-item>
    </div>
    <app-speed-claim-add 
      v-if="showAddForm" 
      @close="showAddForm = false">
    </app-speed-claim-add>
  </div>
</template>
<script>
import SpeedClaimItem from './SpeedClaimItem.vue';
import SpeedClaimAdd from './SpeedClaimAdd.vue';

export default {
  data() {
    return {
      showAddForm: false
    }
  },
  computed: {
    speedClaimItems() {
      return this.$store.getters.speedClaimItems;
    }
  },
  methods: {
    addItem() {
      this.showAddForm = true;
    }
  },
  components: {
    appSpeedClaimItem: SpeedClaimItem,
    appSpeedClaimAdd: SpeedClaimAdd
  }  
}
</script>

