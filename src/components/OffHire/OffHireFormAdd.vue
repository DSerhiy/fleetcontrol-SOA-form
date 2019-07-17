<template>
  <div class="modal-layer">
    <div class="modal-dialog" @keydown.enter="ok()"
                              @keydown.esc="close()">
      <div class="modal-content border-success">

        <div class="modal-header bg-success">
          <h2 class="modal-title text-white">New Hire Add Form</h2>
          <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close" @click="close()">
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <div class="modal-body bg-grey">
          <div class="row mb-2 align-items-center">
            <div class="col-2"></div> 
            <div class="col-3">Hire rate:</div> 
            <div class="col-4">
              <input type="number" v-focus
                    class="form-control"
                    placeholder="Enter Hire Rate" 
                    :value="hireRate"
                    @input="hireRate = Number($event.target.value)">
            </div>         
            <div class="col-2 text-center"></div> 
          </div>
          <hr>
          <div class="row align-items-center">
            <h5 class="col-4 text-center">Off-hire period:</h5> 
          </div>
          <div class="row mb-2 justify-content-center">
            <div class="col-2"></div> 
            <div class="col-2">Time</div> 
            <div class="col-3">Date</div> 
            <div class="col-2 text-center">Days</div> 
          </div>
          <div class="row mb-3 align-items-center justify-content-center">
            <div class="col-2">From:</div> 
            <div class="col-2">
              <input type="time" 
                    class="form-control" 
                    v-model="fromDate.time">
            </div> 
            <div class="col-3">
              <input type="date"  
                    class="form-control" 
                    v-model="fromDate.date">
            </div> 
            <div class="col-2"></div> 
          </div>         
          <div class="row align-items-center justify-content-center">
            <div class="col-2">To:</div> 
            <div class="col-2">
              <input type="time" class="form-control" v-model="toDate.time">
            </div> 
            <div class="col-3">
              <input type="date" class="form-control" v-model="toDate.date" v-focus>
            </div> 
            <div class="col-2 text-center">{{total}}</div> 
          </div> 
          <hr>
           <div class="row align-items-center">
            <h5 class="col-4 text-center">Bunkers:</h5> 
          </div>
          <div class="row mb-2 justify-content-center">
            <div class="col-2">Grade</div> 
            <div class="col-2">Quantity</div> 
            <div class="col-2">Price</div> 
            <div class="col-2">Value</div> 
          </div>
          <div class="row mb-2 justify-content-center">
            <div class="col-2"><input type="text" class="form-control"></div> 
            <div class="col-2"><input type="number" class="form-control"></div> 
            <div class="col-2"><input type="number" class="form-control"></div>
            <div class="col-2"></div>  
            
          </div>
          
        </div>
        <div class="modal-footer bg-grey">
          <button type="button" class="btn btn-normal" @click="close()">
            <i class="fa fa-window-close"></i> Cancel
          </button>
          <button type="button" class="btn btn-success" @click="ok()">
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
        days: 15,
        toDate: { time: null, date: null}, 
        hireRate: null,
        fromDate: { time: null, date: null}
      }
    },
    created() {
      this.hireRate = this.$store.getters.basicHire;
    },
    methods: {
      ok() {
        const index = this.$store.getters.hireItems.length;
        const fromDate = this.$store.getters.hireItems[index - 1].toDate;

        this.$store.dispatch('addHireItem', {
          hireRate: this.hireRate,
          fromDate: fromDate,
          toDate: { time: fromDate.time, date: fromDate.date }
        });
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

  .modal-dialog {
    min-width: 800px;
    position: absolute;
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
