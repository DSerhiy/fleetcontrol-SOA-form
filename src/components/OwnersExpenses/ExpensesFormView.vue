<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="card">
        <div class="card-body">
          <div class="card-title d-flex justify-content-between align-items-center">
            OWNERS EXPENSES :
             <div>
              <div class="btn-add"
                @click="addItem()">
                <i class="zmdi zmdi-collection-plus"></i>
              </div>                        
             </div>
          </div>
          <table class="table">
            <tbody>
              <app-expenses-item 
                v-for="(item, index) in expensesList"
                :key="index"
                :index="index + 1"
                :description="item.description"
                :value="item.value"
                @edit="editItem(index)">
              </app-expenses-item>
            </tbody>                
          </table>             
        </div>
      </div>
    </div>
  <app-edit-form v-if="showEditForm"
                 :index="editItemIndex"
                 @close="showEditForm = false">
  </app-edit-form >
  <app-add-form v-if="showAddForm"
                @close="showAddForm = false">
  </app-add-form>
  </div>
</template>
<script>

import ExpensesItem from './ExpensesItem.vue';
import EditForm from './ExpensesFormEdit.vue';
import AddForm from './ExpensesFormAdd.vue';

export default {
  data() {
    return {
      showEditForm: false, 
      showAddForm: false, 
      editItemIndex: null
    }
  },
  computed: {
    expensesList() {
      return this.$store.getters.ownersExpensesItems;
    }
  },
  methods: {
    editItem(index) {
      this.editItemIndex = index;
      this.showEditForm = true;
    },
    addItem() {
      this.showAddForm = true;
    }
  },
  components: {
    appExpensesItem: ExpensesItem, 
    appEditForm: EditForm, 
    appAddForm: AddForm
  }
}
</script>



