<template>

<div class="modal-layer">
  <div class="modal-dialog" @keydown.enter="update()"
                            @keydown.esc="close()">
    <div class="modal-content border-success">

      <div class="modal-header bg-success">
        <h5 class="modal-title text-white">Add Bunkers</h5>
        <button type="button" 
                class="close text-white" 
                data-dismiss="modal" 
                aria-label="Close"
                @click="close()">
          <span aria-hidden="true">×</span>
        </button>
      </div>

      <div class="modal-body bg-grey">
        <div class="row">               
          <div class="col-12">
            <div class="icheck-material-white">
              <input type="checkbox" id="1" 
                :checked="bunkersDelivery"
                @click="$store.dispatch('setBunkersOnDeliveryShow', $event.target.checked)">
              <label for="1">Bunkers on delivery</label>
            </div>
          </div>
          <div class="col-12">
            <div class="icheck-material-white">
              <input type="checkbox" id="2" 
                :checked="bunkersRedelivery"
                @click="$store.dispatch('setBunkersOnRedeliveryShow', $event.target.checked)">
              <label for="2">Bunkers on redelivery</label>
            </div>
          </div>
          <!-- <div class="col-12">
            <div class="icheck-material-white">
              <input type="checkbox" id="3" 
                :checked="bunkersRedelivery"
                @click="$store.dispatch('setBunkersOnRedeliveryShow', $event.target.checked)">
              <label for="3">Estimated consumption</label>
            </div>
          </div>                      -->
        </div>      
      </div>
    
      <div class="modal-footer bg-grey">
        <div class="col-auto">
          <button type="button" 
                  class="btn btn-success"
                  @click="close()">
            <i class="fa fa-check"></i> OK
          </button>
        </div>        
      </div>      
    </div>
  </div>  
</div>

</template>
<script>
export default {
  methods: {
    close() {
      this.$emit('close');
    }
  }, 
  computed: {
    bunkersDelivery() {
      return this.$store.getters.bunkersOnDelivery.show;
    }, 
    bunkersRedelivery() {
      return this.$store.getters.bunkersOnRedelivery.show;
    }
  },
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
    min-width: 350px;
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
