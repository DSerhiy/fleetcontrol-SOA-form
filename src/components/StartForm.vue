<template>
  <div class="modal-layer">
    <div class="modal-dialog">
      <div class="modal-content border-success">

        <div class="modal-header bg-success">
          <h2 class="modal-title text-white">Start Form</h2>
          <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close" @click="cancel()">
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <div class="modal-body bg-grey">
          <div class="row">
            <div class="col-lg-12">
              <form>
                <h4 class="mb-3">Delivery Time:</h4>
                <div class="form-group row justify-content-center">
                  <label class="col-sm-2 col-form-label">Time:</label>
                  <div class="col-sm-3">
                    <input type="Time" 
                           class="form-control" 
                           @input="time = $event.target.value">
                  </div>
                  <label class="col-sm-2 col-form-label">Date:</label>
                  <div class="col-sm-3">
                    <input type="date" 
                           class="form-control" 
                           @input="date = $event.target.value">
                  </div>
                </div>
                <hr>

                <h4 class="mb-3">Hire, C/E/V, Ballast Bonus:</h4>
                <div class="form-group row justify-content-center">
                  <label class="col-sm-2 col-form-label">Hire Rate:</label>
                  <div class="col-sm-3">
                    <input type="number" 
                           class="form-control" 
                           placeholder="Enter Hire Rate"
                           @input="hireRate = Number($event.target.value)">
                  </div>
                  <label class="col-sm-2 col-form-label">C/E/V:</label>
                  <div class="col-sm-3">
                    <input type="number" 
                           class="form-control" 
                           placeholder="Enter C/E/V"
                           @input="cevRate = Number($event.target.value)">
                  </div>                  
                </div>
                <div class="form-group row justify-content-center">
                  <div class="col-sm-3">
                    <div class="icheck-material-white">
                      <input type="checkbox" id="user-checkbox1" v-model="checkbox.ballastBonus">
                      <label for="user-checkbox1">Ballast bonus</label>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <input type="number" 
                           class="form-control" 
                           placeholder="Enter Ballast Bonus"
                           @input="ballastBonus = Number($event.target.value)" 
                           :disabled="!checkbox.ballastBonus">
                  </div>                                    
                </div>                
                <hr>

                <h4>Commission:</h4>
                <div class="form-group row justify-content-center">
                  <div class="col-sm-3">
                    <div class="icheck-material-white">
                      <input type="checkbox" id="user-checkbox2" v-model="checkbox.addComm">
                      <label for="user-checkbox2">Add comm:</label>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <input type="number" 
                           class="form-control" 
                           placeholder="Enter Add Comm"
                           @input="addComm = Number($event.target.value)"
                           :disabled="!checkbox.addComm">
                  </div>                                    
                </div>  
                <div class="form-group row justify-content-center">
                  <div class="col-sm-3">
                    <div class="icheck-material-white">
                      <input type="checkbox" id="user-checkbox3" v-model="checkbox.brkComm">
                      <label for="user-checkbox3">BRK comm: </label>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <input type="number" 
                           class="form-control" 
                           placeholder="Enter BRK Comm"
                           @input="brkComm = Number($event.target.value)"
                           :disabled="!checkbox.brkComm">
                  </div>                                    
                </div>               
              </form>
            </div>
          </div>          
        </div>

        <div class="modal-footer bg-grey">
          <button type="button" class="btn btn-normal" @click="cancel()">
            <i class="fa fa-window-close"></i> Cancel
          </button>
          <button type="button" class="btn btn-success" @click="save()">
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
        checkbox: {
          ballastBonus: false,
          addComm: false,
          brkComm: false
        },
        time: null,
        date: null,
        hireRate: null,
        cevRAte: null, 
        ballastBonus: null,
        addComm: null,
        brkComm: null
      }
    },
    methods: {
      cancel() {

      },
      save() {
        this.$store.dispatch('changeDeliveryStatus', true); 
        this.$store.dispatch('setAddComm', {
          status: this.checkbox.addComm,
          value: this.addComm 
        });
        this.$store.dispatch('setBrkComm', {
          status: this.checkbox.brkComm,
          value: this.brkComm 
        });       
                
        this.$store.dispatch('addHireData', {
          hireRate: this.hireRate,  
          fromDate: {time: this.time, date: this.date},
          toDate: {time: this.time, date: this.date}, 
          ballastBonus:{status: this.checkbox.ballastBonus, value: this.ballastBonus},
          cevRate: this.cevRate
        });
        this.$emit('save');
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

  .modal-dialog {
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
