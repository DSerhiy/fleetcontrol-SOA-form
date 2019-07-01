<template>

<div class="modal-layer">
  <div class="modal-dialog">
    <div class="modal-content border-success">

      <div class="modal-header bg-success">
        <h5 class="modal-title text-white">Charterers Expenses Edit Form</h5>
        <button type="button" 
                class="close text-white" 
                data-dismiss="modal" 
                aria-label="Close"
                @click="cancel()">
          <span aria-hidden="true">×</span>
        </button>
      </div>

      <div class="modal-body bg-grey">

        <div class="row">
          <div class="col-1"></div>
          <div class="col">Expenses Description</div>
          <div class="col-2 pl-4">Amount</div>
          <div class="col-1"></div>
        </div>

        <hr>

        <div class="row mb-2 px-3 align-items-center" v-for="(item, index) in expensesList" :key="index">
          <div class="col-auto"><div>{{index + 1}}.</div></div>
          <div class="col">
            <input type="text" 
                   class="form-control"                  
                   :value="item.description"
                   @input="item.description = $event.target.value">
          </div>
          <div class="col-2">
            <input type="number" 
                  class="form-control" 
                  :value="item.value"
                  @input="item.value = Number($event.target.value)">
         </div>
         <div class="col-1">
           <button type="button" 
                   class="btn btn-danger  waves-effect waves-light m-1"
                   @click="deleteItem(index)">  
                   X</button>
         </div>
        </div>  

        <hr>      
        <button type="button" 
                class="btn btn-success"
                @click="addItem()">
          <i class="fa fa-window-close"></i> Add New Item
        </button>
      </div>
    
      <div class="modal-footer bg-grey">
        <button type="button" 
                class="btn btn-normal"
                @click="cancel()">
          <i class="fa fa-window-close"></i> Cancel
        </button>
        <button type="button" 
                class="btn btn-success"
                @click="save()">
          <i class="fa fa-check"></i> Save
        </button>
      </div>
      
    </div>
  </div>  
</div>
</template>
<script>
export default {
  data() {
    return {
      expensesList: []
    }
  },
  created(){
    this.$store.getters.charterersExpensesList.forEach(el => {
      this.expensesList.push({
        description: el.description,
        value: el.value
      });      
    });    
  },
  methods: {
     addItem() {
       this.expensesList.push({});
     }, 
     deleteItem(index) {
       this.expensesList.splice(index, 1);
     },
     save() {
       this.$store.dispatch('editCharterersExpenses', this.expensesList)
       this.$emit('save');
     }, 
     cancel() {
       this.$emit('cancel');
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


