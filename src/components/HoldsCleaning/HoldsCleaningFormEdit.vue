<template>

<div class="modal-layer">
  <div class="modal-dialog" @keydown.enter="update()"
                            @keydown.esc="close()">
    <div class="modal-content border-success">

      <div class="modal-header bg-success">
        <h5 class="modal-title text-white">Holds Cleaning Edit Item</h5>
        <button type="button" 
                class="close text-white" 
                data-dismiss="modal" 
                aria-label="Close"
                @click="close()">
          <span aria-hidden="true">×</span>
        </button>
      </div>

      <div class="modal-body bg-grey">

        <div class="row px-3 align-items-center">
          <div class="col-2">Type</div>
          <div class="col">Description</div>
          <div class="col-2">Amount</div>          
        </div>

        <hr>

        <div class="row px-3 align-items-center">
          <div class="col-2">
            <select v-model="editedItem.type" class="form-control">
              <option>ILOHC</option>
              <option>ILIHC</option>
            </select>
          </div>
          <div class="col">
            <input type="text" v-focus
                   class="form-control"                  
                   :value="editedItem.description"
                   @input="editedItem.description = $event.target.value">
          </div>
          <div class="col-2">
            <input type="number" 
                  class="form-control" 
                  :value="editedItem.value"
                  @input="editedItem.value = Number($event.target.value)">
         </div>
         
        </div>         
      </div>
    
      <div class="modal-footer bg-grey">
        <div class="col-auto">
          <button type="button" 
                    class="btn btn-danger  waves-effect waves-light"
                    @click="deleteItem()">
                    <i class="zmdi zmdi-delete"></i>  
                    Delete Item
          </button>
        </div>
        <div class="col-auto">
          <button type="button" 
                  class="btn mr-1"
                  @click="close()">
            <i class="fa fa-window-close"></i> Cancel
          </button>
          <button type="button" 
                  class="btn btn-success"
                  @click="update()">
            <i class="fa fa-check"></i> Save
          </button>
        </div>        
      </div>
      
    </div>
  </div>  
</div>
</template>
<script>
export default {
  props: ['index'],
  data() {
    return {
      editedItem: { description: null, value: null, type: null },
    }
  },
  created(){
    const item = this.$store.getters.holdsCleaningItems[this.index]
    this.editedItem.description = item.description;
    this.editedItem.value = item.value;
    this.editedItem.type = item.type;
  },
  methods: {
    deleteItem() {
       this.$store.dispatch('deleteHoldCleaningItem', this.index);
       this.close()
     },
    update() {
       this.$store.dispatch('updateHoldCleaningItem', {index: this.index, data: this.editedItem})
       this.close();
     }, 
    close() {
       this.$emit('close');
     }     
   }
}
</script>
<style scoped>
  .modal-layer {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.541);
    width: 100vw;
    height: 100vh;
  }
  .modal-dialog{
    min-width: 800px;
    position: fixed;
    z-index: 1001;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);    
  }

  .border-success {
    border-color: rgba(182, 255, 200, 0.514) !important;
  }

  .bg-success {
    background-color: rgba(182, 255, 200, 0.322) !important;
  }

  .btn-success {
    border-color: rgba(182, 255, 200, 0.514) !important;
    background-color: rgba(182, 255, 200, 0.322) !important;
  }

  .bg-grey {
    background-color: rgba(16, 47, 65, 0.37);
  }
</style>


