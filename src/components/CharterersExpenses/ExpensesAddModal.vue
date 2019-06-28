<template>

<div class="modal-layer">
  <div class="modal-dialog">
    <div class="modal-content border-success">

      <div class="modal-header bg-success">
        <h5 class="modal-title text-white">New Item</h5>
        <button type="button" 
                class="close text-white" 
                data-dismiss="modal" 
                aria-label="Close"
                @click="cancel">
          <span aria-hidden="true">×</span>
        </button>
      </div>

      <div class="modal-body bg-grey">

        <div class="form-group">
          <label for="input-1">Expenses descrition</label>
          <input type="text" 
                  class="form-control" 
                  id="input-1" 
                  placeholder="Enter Descrition Here"
                  @input="expensesData.description = $event.target.value">
        </div>

        <div class="form-group">
          <label for="input-2">Amount</label>
          <input type="number" 
                class="form-control" 
                id="input-2" 
                placeholder="Enter Total Amount Here"
                @input="expensesData.amount = $event.target.value">
        </div>
      </div>
    
      <div class="modal-footer bg-grey">
        <button type="button" 
                class="btn btn-inverse-success" 
                data-dismiss="modal"
                @click="cancel">
          <i class="fa fa-times"></i> Close
        </button>
        <button type="button" 
                class="btn btn-success"
                @click="sendData">
          <i class="fa fa-check-square-o"></i> Save
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
      expensesData: {
        description: '', 
        amount: null
      }
    }
  },
   methods: {
     sendData() {
       this.$emit('ok', this.expensesData)
     }, 
     cancel() {
       this.$emit('cancel')
     }
   }
}
</script>
<style scoped>
  .modal-layer {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.541);
    width: 100vw;
    height: 100vh;
  }
  .modal-dialog{
    position: absolute;
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


