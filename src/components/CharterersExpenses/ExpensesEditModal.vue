<template>

<div class="modal-layer">
  <div class="modal-dialog">
    <div class="modal-content border-success">

      <div class="modal-header bg-success">
        <h5 class="modal-title text-white">Edit Items</h5>
        <button type="button" 
                class="close text-white" 
                data-dismiss="modal" 
                aria-label="Close"
                @click="cancel">
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

        <div class="row mb-2 pr-3 align-items-center" v-for="(item, index) in items" :key="index">
          <div class="col-auto"><div>{{index + 1}}.</div></div>
          <div class="col">
            <input type="text" 
                   class="form-control"                  
                   :value="item.name"
                   @input="name = $event.target.value">
          </div>
          <div class="col-2">
            <input type="number" 
                  class="form-control" 
                  :value="item.credit"
                  @input="value = $event.target.value">
         </div>
         <div class="col-1">
           <button type="button" 
                   class="btn btn-danger  waves-effect waves-light m-1"
                   @click="deleteItem(index)">  
                   X</button>
         </div>
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
                @click="sendData"
                :disabled="btnStatus">
          <i class="fa fa-check-square-o"></i> Save
        </button>
      </div>
      
    </div>
  </div>  
</div>
</template>
<script>
export default {
  props: ['items'],
  data() {
    return {
      name: null, 
      value: null
    }
  }, 
  computed: {
    btnStatus() {
      if(this.name === null && this.value === null)
        return true;
      
      return true
    }
  },
  methods: {
     sendData() {
       this.$emit('ok', this.expensesData);
     }, 
     cancel() {
       this.$emit('cancel');
     }, 
     deleteItem(index) {
       this.$emit('deleteItem', index);
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
    min-width: 800px;
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


