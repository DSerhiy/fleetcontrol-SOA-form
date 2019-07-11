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
        :index="index"
        :hireRate="item.hireRate"
        :fromDate="item.fromDate"
        :toDate="calcToDate(index)"
        @edit="editItem(index)"
        >
      </app-hire-item>    
    </div>
    <app-hire-form-edit v-if="showEditForm"
                        :index="editItemIndex"
                        @close="showEditForm = false">
    </app-hire-form-edit>
    <!-- <app-hire-form-init v-if="showHireFormInit"></app-hire-form-init> -->
  </div>
</template>

<script>
  import HireItem from './HireItem.vue';
  import HireFormAdd from './HireFormAdd.vue';
  import HireFormEdit from './HireFromEdit.vue';

  export default {
    data() {
      return {
        showEditForm: false,
        editItemIndex: null,
      }
    },
    computed: {
      hireData() {
        return this.$store.getters.hireItems;
      }
    },
    methods: {
      editItem(index) {
        this.editItemIndex = index
        this.showEditForm = true;
      },
      calcToDate(index) {
        if(index === this.hireData.length - 1 && this.$store.getters.redeliveryDate.date)
          return this.$store.getters.redeliveryDate;
        
        return this.hireData[index].toDate;
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

