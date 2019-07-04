<template>

<div class="modal-layer">
  <div class="modal-dialog">
    <div class="modal-content border-success">

      <div class="modal-header bg-success">
        <h5 class="modal-title text-white">New Owners Expenses Form</h5>
        <button type="button" 
                class="close text-white" 
                data-dismiss="modal" 
                aria-label="Close"
                @click="close()">
          <span aria-hidden="true">×</span>
        </button>
      </div>

      <div class="modal-body bg-grey">
        <div class="row justify-content-center">          
          <div class="col-9">Expenses Description</div>
          <div class="col-2">Amount</div>          
        </div>

        <hr>

        <div class="row justify-content-center">
          <div class="col-9">
            <input type="text" 
                   class="form-control"
                   placeholder="Enter Item Description"                  
                   @input="newExpenses.description = $event.target.value">
          </div>
          <div class="col-2">
            <input type="number" 
                  class="form-control"
                  placeholder="Value" 
                  @input="newExpenses.value = Number($event.target.value)">
         </div>         
        </div>         
      </div>
    
      <div class="modal-footer bg-grey">
        <button type="button" 
                class="btn"
                @click="close()">
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
      newExpenses: { description: null, value: null }
    }
  }, 
  methods: {
     save() {
       this.$store.dispatch('addNewOwnersItem', this.newExpenses)
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


