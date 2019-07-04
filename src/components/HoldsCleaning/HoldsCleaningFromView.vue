<template>
  <div class="card">
    <div class="card-body">
      <div class="card-title d-flex justify-content-between align-items-center">
        HOLDS CLEANING : {{total}}
          <div>               
          <button type="button" 
            class="btn btn-success"
            @click="addItem()">
            <i class="fa fa-plus"></i> Add
          </button>                        
          </div>
      </div>
      <table class="table">
        <tbody>
          <app-cleaning-item v-for="(item, index) in holdsCleaningItmes"
                             :key="index"
                             :description="item.description"
                             :value="item.value"
                             :type="item.type"
                             :index="index"
                             @edit="editItem(index)">
          </app-cleaning-item>     
        </tbody>
      </table>
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
import CleaningItem from './HoldCleaningItem.vue';
import AddForm from './HoldsCleaningFormAdd.vue';
import EditForm from './HoldsCleaningFormEdit.vue'

export default {
  data() {
    return {
      showAddForm: false,
      showEditForm: false, 
      editItemIndex: null
    }
  },
  computed: {
    total() {
      return this.$store.getters.holdsCleaningTotal;
    }, 
    holdsCleaningItmes() {
      return this.$store.getters.holdsCleaningItems;
    }
  }, 
  methods: {
    addItem() {
      this.showAddForm = true
    }, 
    editItem(index) {
      this.editItemIndex = index;
      this.showEditForm = true;
    }
  },
  components: {
    appCleaningItem: CleaningItem,
    appAddForm: AddForm,
    appEditForm: EditForm
  }
  
}
</script>

