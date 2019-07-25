<template>
  <div class="modal-layer">
    <div class="modal-dialog" @keydown.enter="ok()"
                              @keydown.esc="close()">
      <div class="modal-content border-success">

        <div class="modal-header bg-success">
          <h2 class="modal-title text-white">New Off-hire Add Form</h2>
          <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close" @click="close()">
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <div class="modal-body bg-grey">
          <div class="row mb-2 align-items-center justify-content-left">
            <h5 class="col-2">Description:</h5> 
            <div class="col-9 input-group-sm">
              <input type="text" v-focus
                    class="form-control"
                    placeholder="Enter Off-hire Description" 
                    @input="description = $event.target.value">
            </div>         
            <div class="col-2"></div> 
          </div>
          <hr>
          <div class="row mb-2 align-items-center justify-content-left">
            <h5 class="col-2">Hire rate:</h5> 
            <div class="col-2 input-group-sm">
              <input type="number"
                    class="form-control"
                    placeholder="Enter Hire Rate" 
                    :value="hireRate"
                    @input="hireRate = Number($event.target.value)">
            </div> 
            <h5 class="col-2"> Share :   
              <div class="icheck-material-white d-inline ml-2">
                <input type="checkbox" id="share" v-model="share.status">
                <label for="share"></label>                
              </div>  
            </h5> 
            <div v-if="share.status" class="col-2 input-group-sm">              
              <input type="number"
                    class="form-control"
                    placeholder="Enter Hire Rate" 
                    :value="share.value"
                    @input="share.value = Number($event.target.value)">
            </div> 
          </div>
          <hr>
          <div class="row align-items-center">
            <h5 class="col-4">Off-hire period:</h5> 
          </div>
          <div class="row mb-2 justify-content-center">
            <div class="col-2"></div> 
            <div class="col-2 text-center">Time</div> 
            <div class="col-3 text-center">Date</div> 
            <div class="col-2 text-center">Days</div> 
          </div>
          <div class="row mb-3 align-items-center justify-content-center">
            <div class="col-2">From:</div> 
            <div class="col-2 input-group-sm">
              <input type="time" 
                    class="form-control" 
                    v-model="fromDate.time">
            </div> 
            <div class="col-3 input-group-sm">
              <input type="date"  
                    class="form-control" 
                    v-model="fromDate.date">
            </div> 
            <div class="col-2"></div> 
          </div>         
          <div class="row align-items-center justify-content-center">
            <div class="col-2">To:</div> 
            <div class="col-2 input-group-sm">
              <input type="time" class="form-control" v-model="toDate.time">
            </div> 
            <div class="col-3 input-group-sm">
              <input type="date" class="form-control" v-model="toDate.date" v-focus>
            </div> 
            <div class="col-2 text-center">{{ $myLib.formatNum(offHireDays) }}</div> 
          </div> 
          <hr>
          <div class="row align-items-center mb-3">
            <div class="col-4 text-left">
              <div class="icheck-material-white">
                <input type="checkbox" id="white" v-model="bunkers.status">
                <label for="white">Bunkers:</label>
              </div>  
            </div> 
            <template v-if="bunkers.status">
              <div class="col-2">
                <div class="icheck-material-primary icheck-inline">
                  <input type="radio" id="radio1" value="manual" v-model="calcType">
                  <label for="radio1">Manual</label>
                </div>
              </div>
              <div class="col-2">
                <div class="icheck-material-primary icheck-inline">
                  <input type="radio" id="radio2" value="computed" v-model="calcType">
                  <label for="radio2">Computed</label>
                </div>
              </div>
            </template>
          </div> 
          <template v-if="bunkers.status">
            <div class="row mb-2 justify-content-center">
              <div class="col-1"></div>
              <div class="col-2">Grade</div> 
              <div v-if="calcType === 'manual'" class="col-2">Quantity</div> 
              <div v-else class="col-2">Consumption</div>
              <div class="col-2">Price</div> 
              <div class="col-2">Value</div> 
            </div>
            <div class="row mb-2 justify-content-center" 
                v-for="(grade, index) in bunkers.grades" :key="index">
              <div class="col-1"><div @click="removeGrade(index)" class="btn btn-danger btn-delete">x</div></div>
              <div class="col-2 input-group-sm"><input type="text" class="form-control" v-model="grade.name"></div> 
              <div class="col-2 input-group-sm"><input v-model="grade.qtty" type="number" class="form-control"></div> 
              <div class="col-2 input-group-sm"><input v-model="grade.price" type="number" class="form-control"></div>
              <div class="col-2">{{ $myLib.formatNum(bunkerResult(grade)) }}</div>             
            </div>
            <div class="row justify-content-left">
              <div class="col-2">
                <div @click="addGrade()" class="btn btn-success btn-delete">+</div>
              </div>              
            </div> 
          </template>         
        </div>        
        <div class="modal-footer bg-grey">
          <button type="button" class="btn btn-normal" @click="close()">
            <i class="fa fa-window-close"></i> Cancel
          </button>
          <button type="button" class="btn btn-success btn-user" @click="ok()">
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
        calcType: 'manual',
        description: null,        
        hireRate: this.$store.getters.finance.basicHire,
        share: { status: false, value: 100 },
        toDate: { time: null, date: null}, 
        fromDate: { time: null, date: null}, 
        bunkers: {
          status: false,
          grades: [
            {name: 'IFO', qtty: 0, price: 0},
            {name: 'MGO', qtty: 0, price: 0} 
          ]
        }               
      }
    },
    computed: {
      offHireDays() {
        const fromDate = new Date(this.fromDate.date + ':' + this.fromDate.time + 'Z');
        const toDate = new Date(this.toDate.date + ':' + this.toDate.time + 'Z');
        const share = this.share.status ? this.share.value : 100;
        return (toDate - fromDate) / 60 / 60 / 24 / 1000 * (share / 100);
      }
    },
    methods: {    
      bunkerResult(grade) {
        if(this.calcType === 'manual')
          return grade.price * grade.qtty;
        
        const consumption = grade.qtty;
        return this.offHireDays * consumption * grade.price; 
      }, 
      removeGrade(index) {
        this.bunkers.grades.splice(index, 1);
      }, 
      addGrade() {
        this.bunkers.grades.push({ name: null, qtty: 0, price: 0 });
      },
      ok() {        
        this.$store.dispatch('addOffHire', {
          description: this.description,        
          hireRate: this.hireRate,
          share: this.share,
          toDate: this.toDate, 
          fromDate: this.fromDate, 
          bunkers: this.bunkers
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
    top: 5%;
    left: 50%;
    transform: translateX(-50%);
  }

  input[type="number"] {
    max-width: 90px;
  }

  input[type="date"] {
    max-width: 140px;
  }

  input[type="time"] {
    max-width: 95px;
  }

  .border-success {
    border-color: rgba(182, 255, 200, 0.514) !important;
  }

  .bg-success {
    background-color: rgba(182, 255, 200, 0.322) !important;
  }

  .btn-user {
    border-color: rgba(182, 255, 200, 0.514) !important;
    background-color: rgba(182, 255, 200, 0.322) !important;
  }

  .bg-grey {
    background-color: rgba(16, 47, 65, 0.37);
  }

  .btn-delete {
    padding: 5px 10px;
  }

</style>
