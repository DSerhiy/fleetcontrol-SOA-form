<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="card">
        <div class="card-body">
          <div class="card-title">
            CHARTERERS EXPENSES :
            <div class="card-action">
              <app-dropdown-menu 
              :menuList="menuList"
              @select="menuSelect">
            </app-dropdown-menu>
            </div>
            <table class="table">
              <app-expenses-item 
                v-for="(item, index) in expensesList"
                :key="index"
                :index="index + 1"
                :name="item.name"
                :credit="item.credit">
              </app-expenses-item>                
            </table>            
          </div>
        </div>
      </div>
    </div>
  <app-add-modal v-if="showModalNewExpenses"
             @ok="addNewExpenses"
             @cancel="showModalNewExpenses = false">
  </app-add-modal>
   <app-edit-modal v-if="showExpensesEdit"
                   :items="expensesList"
                   @deleteItem="deleteExpenses"
                   @cancel="showExpensesEdit = false">
  </app-edit-modal>
  </div>
</template>
<script>

import ExpensesItem from './ExpensesItem.vue';
import DropdownMenu from '../DropdownMenu.vue';
import AddModal from './ExpensesAddModal';
import EditModal from './ExpensesEditModal';

export default {
  data() {
    return {
      showModalNewExpenses: false, 
      showExpensesEdit: false
    }
  },
  computed: {

  },
  methods: {
    menuSelect(data) {
      switch (data) {
        case 'Add Item':
          this.showModalNewExpenses = true;  
          break;
      case 'Edit Items':
          this.showExpensesEdit = true; 
          break;         
      }      
    }, 
    addNewExpenses(newItem) {
     this.expensesList.push({name: newItem.description, credit: newItem.amount});
     this.showModalNewExpenses = false;
    }, 
    deleteExpenses(index){
      this.expensesList.splice(index, 1);
    }
  },
  components: {
    appExpensesItem: ExpensesItem, 
    appDropdownMenu: DropdownMenu, 
    appAddModal: AddModal, 
    appEditModal: EditModal
  }
}
</script>

