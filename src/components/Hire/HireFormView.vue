<template>
  <div class="card">
    <div class="card-body">
      <table class="table">
        <tr>
          <td colspan="4" class="not-bordered"></td>
          <th scope="col" class="debit-col text-center">DEBIT, USD</th>
          <th scope="col" class="credit-col text-center">CREDIT, USD</th>
        </tr>
      </table>          
      <div class="card-title d-flex justify-content-between align-items-center">
        CHARTER HIRE :
        <div class="btn-add"
             @click="addItem()">
          <i class="zmdi zmdi-collection-plus"></i>
        </div>  
      </div>
      <app-hire-item 
        v-for="(item, index) in hireData" 
        :key="index"
        :index="index"
        :hireRate="item.hireRate"
        :fromDate="item.fromDate"
        :toDate="calcToDate(index)"
        @edit="editItem(index)">
      </app-hire-item>    
    </div>
    <app-form-edit v-if="showEditForm"
                        :index="editItemIndex"
                        @close="showEditForm = false">
    </app-form-edit>
    <app-form-add v-if="showAddForm"
                  @close="showAddForm = false">
    </app-form-add>
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
        showAddForm: false,
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
        this.editItemIndex = index;
        this.showEditForm = true;
      },
      addItem() {
        this.showAddForm = true;
      },
      calcToDate(index) {
        // if(index === this.hireData.length - 1 && this.$store.getters.redelivery.date)
        //   return this.$store.getters.redelivery;
        
        return this.hireData[index].toDate;
      }
    },
    components: {
      appHireItem: HireItem, 
      appFormAdd: HireFormAdd,
      appFormEdit: HireFormEdit
    }
  }
</script>
<style scoped>
  .btn-add {
    position: relative;
    top: 10px;
    right: -27px;
  }
</style>



