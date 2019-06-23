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
                v-for="(item, index) in expenseslist"
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
  <app-modal v-if="showModalNewExpenses"
             @ok="addNewExpenses"
             @cancel="showModalNewExpenses = false">
  </app-modal>
  </div>
</template>
<script>
import ExpensesItem from './ExpensesItem.vue';
import DropdownMenu from '../DropdownMenu.vue';
import Modal from '../Modal.vue';

export default {
  data() {
    return {
      expenseslist: [{
        name: 'On-hire survey 50/50', 
        credit: 200
      }], 
      menuList: [{
        name: 'Add Item', 
        iconClass: 'icon-plus'
      }], 
      showModalNewExpenses: false
    }
  },
  methods: {
    menuSelect(data) {
      if(data === 'Add Item') {
        this.showModalNewExpenses = true;       
      }
    }, 
    addNewExpenses(newItem) {
     this.expenseslist.push({name: newItem.description, credit: newItem.amount});
     this.showModalNewExpenses = false;
    }
  },
  components: {
    appExpensesItem: ExpensesItem, 
    appDropdownMenu: DropdownMenu, 
    appModal: Modal
  }
}
</script>

