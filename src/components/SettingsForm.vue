<template>
  <div class="modal-layer">
    <div class="modal-dialog">
      <div class="modal-content border-success">

        <div class="modal-header bg-success">
          <h2 class="modal-title text-white">Settings</h2>
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
                           @input="deliveryDate.time = $event.target.value"
                           :value="deliveryDate.time">
                  </div>
                  <label class="col-sm-2 col-form-label">Date:</label>
                  <div class="col-sm-3">
                    <input type="date" 
                           class="form-control" 
                           @input="deliveryDate.date = $event.target.value"
                           :value="deliveryDate.date">
                  </div>
                </div>
                <hr>
                <h4 class="mb-3">Redelivery Time:</h4>
                <div class="form-group row justify-content-center">
                  <label class="col-sm-2 col-form-label">Time:</label>
                  <div class="col-sm-3">
                    <input type="Time" 
                           class="form-control" 
                           @input="redeliveryDate.time = $event.target.value"
                           :value="redeliveryDate.time">
                  </div>
                  <label class="col-sm-2 col-form-label">Date:</label>
                  <div class="col-sm-3">
                    <input type="date" 
                           class="form-control" 
                           @input="redeliveryDate.date = $event.target.value"
                           :value="redeliveryDate.date">
                  </div>
                </div>
                <hr>

                <h4 class="mb-3">Hire, Ballast Bonus, C/E/V</h4>
                <div class="form-group row justify-content-center">
                  <label class="col-2 col-form-label">Basic Hire:</label>
                  <div class="col-3">
                    <input type="number" 
                           class="form-control" 
                           placeholder="Enter Hire Rate"
                           @input="basicHire = Number($event.target.value)"
                           :value="basicHire">
                  </div>
                  <label class="col-2 col-form-label">C/E/V:</label>
                  <div class="col-3">
                    <input type="number" 
                           class="form-control" 
                           placeholder="Enter C/E/V"
                           @input="cevRate = Number($event.target.value)"
                           :value="cevRate">
                  </div>      
                </div>
                <div class="form-group row justify-content-center">
                 <div class="col-sm-3">
                    <div class="icheck-material-white">
                      <input type="checkbox" id="user-checkbox1" v-model="checkbox.ballastBonus">
                      <label for="user-checkbox1">Ballast Bonus:</label>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <input type="number" 
                           class="form-control" 
                           placeholder="Enter ballast bonus"
                           @input="ballastBonus = Number($event.target.value)"
                           :value="ballastBonus"
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
                           :value="addComm"
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
                           :value="brkComm"
                           :disabled="!checkbox.brkComm">
                  </div>                                    
                </div> 
                <hr>
                <h4>Holds cleaning:</h4>
                <div class="form-group row justify-content-center">
                  <label class="col-2 col-form-label">ILOHC:</label>
                  <div class="col-3">
                    <input type="number" 
                           class="form-control" 
                           placeholder="Enter ILOHC"
                           @input="ilohc = Number($event.target.value)"
                           :value="ilohc">
                  </div>
                  <label class="col-2 col-form-label">ILIHC:</label>
                  <div class="col-3">
                    <input type="number" 
                           class="form-control" 
                           placeholder="Enter ILIHC"
                           @input="ilihc = Number($event.target.value)"
                           :value="ilihc">
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
          addComm: false,
          brkComm: false,
          ballastBonus: false
        },
        basicHire: null,
        deliveryDate: {time: null, date: null},
        redeliveryDate: {time: null, date: null},
        addComm: null,
        brkComm: null,
        cevRate: null,
        ballastBonus: null, 
        ilohc: null, 
        ilihc: null
      }
    },
    created() {
      if(!this.$store.getters.firstStart) {

        this.basicHire = this.$store.getters.basicHire;

        this.checkbox.addComm = this.$store.getters.addComm.status;
        this.checkbox.brkComm = this.$store.getters.brkComm.status;
        this.addComm = this.$store.getters.addComm.value;
        this.brkComm = this.$store.getters.brkComm.value;

        this.deliveryDate.time = this.$store.getters.deliveryDate.time;
        this.deliveryDate.date = this.$store.getters.deliveryDate.date;

        this.redeliveryDate.time = this.$store.getters.redeliveryDate.time;
        this.redeliveryDate.date = this.$store.getters.redeliveryDate.date;
        
        this.ballastBonus = this.$store.getters.ballastBonus.value;
        this.checkbox.ballastBonus = this.$store.getters.ballastBonus.status;

        this.cevRate = this.$store.getters.cevRate;
        this.ilohc = this.$store.getters.ilohc;
        this.ilihc = this.$store.getters.ilihc;
      }
    },
    methods: {
      cancel() {

      },
      save() {
        if(this.$store.getters.firstStart) {
          this.$store.dispatch('addHireItem', {
            // hireRate: this.basicHire,
            fromDate: {time: this.deliveryDate.time, date: this.deliveryDate.date}, 
            toDate: {time: this.deliveryDate.time, date: this.deliveryDate.date}            
          });
          this.$store.dispatch('setFirstStart', false); 
        }
        
        this.$store.dispatch('setDeliveryDate', this.deliveryDate);
        this.$store.dispatch('setRedeliveryDate', this.redeliveryDate);
        this.$store.dispatch('setBasicHire', this.basicHire);
        this.$store.dispatch('updateHireRate', {index: 0, value: this.basicHire});
        this.$store.dispatch('setBallastBonus', {
          status: this.checkbox.ballastBonus,
          value: this.ballastBonus
        });
        this.$store.dispatch('setCevRate', this.cevRate);
        this.$store.dispatch('setAddComm', {
          status: this.checkbox.addComm,
          value: this.addComm 
        });
        this.$store.dispatch('setBrkComm', {
          status: this.checkbox.brkComm,
          value: this.brkComm 
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
    top: 5%;
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
