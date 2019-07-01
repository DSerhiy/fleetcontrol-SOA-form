<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="card">
        <div class="card-body">
          <div class="card-title d-flex justify-content-between align-items-center">
            CHARTERERS EXPENSES : {{total}}
           
              <button type="button" 
                class="btn btn-success"
                @click="addItem()">
                <i class="fa fa-edit"></i> Add Item
              </button>            
          
          </div>
          <table class="table">
            <tbody>
              <app-expenses-item 
                v-for="(item, index) in expensesList"
                :key="index"
                :index="index + 1"
                :description="item.description"
                :value="item.value">
              </app-expenses-item>
            </tbody>                
          </table>             
        </div>
      </div>
    </div>
  <app-edit-form v-if="showExpensesEditForm"
                   @save="showExpensesEditForm = false"
                   @cancel="showExpensesEditForm = false">
  </app-edit-form>
  </div>
</template>
<script>

import ExpensesItem from './ExpensesItem.vue';
import DropdownMenu from '../DropdownMenu.vue';
import EditForm from './ExpensesFormEdit';

export default {
  data() {
    return {
      showExpensesEditForm: false
    }
  },
  computed: {
    expensesList() {
      return this.$store.getters.charterersExpensesList;
    }, 
    total() {
      return this.$store.getters.charterersExpensesTotal;
    }
  },
  methods: {
    addItem() {
      this.showExpensesEditForm = true;
    }
  },
  components: {
    appExpensesItem: ExpensesItem, 
    appDropdownMenu: DropdownMenu, 
    appEditForm: EditForm
  }
}
</script>

