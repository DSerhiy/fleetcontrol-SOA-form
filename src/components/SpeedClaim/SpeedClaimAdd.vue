<template>
<!-- Header -->
  <div class="modal-layer">
    <div class="modal-dialog" @keydown.enter="ok()"
                              @keydown.esc="close()">
      <div class="modal-content border-success">

        <div class="modal-header bg-success">
          <h2 class="modal-title text-white">New Speed Claim</h2>
          <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close" @click="close()">
            <span aria-hidden="true">×</span>
          </button>
        </div>
<!-- Body -->
  <!-- Description -->
        <div class="modal-body bg-grey">       
          <div class="row mb-2 align-items-center justify-content-left">
            <h5 class="col-3">Description:</h5> 
            <div class="col-8 input-group-sm">
              <input type="text" v-focus
                    class="form-control"
                    placeholder="Enter speed claim description" 
                    @input="description = $event.target.value">
            </div>         
            <div class="col-2"></div> 
          </div>
          <hr>

  <!-- Hire Rate -->
          <div class="row mb-2 align-items-center justify-content-left">
            <h5 class="col-3">Hire rate:</h5> 
            <div class="col-2 input-group-sm">
              <input type="number"
                    class="form-control"
                    placeholder="Enter Hire Rate" 
                    :value="hireRate"
                    @input="hireRate = Number($event.target.value)">
            </div> 
            <div class="col-2">    
              <div class="icheck-material-white d-inline">
                <input type="checkbox" id="cb1" v-model="share.on">
                <label for="cb1">share:</label>                
              </div>
            </div> 
            <div v-if="share.on" class="col-2 input-group-sm">              
              <input type="number"
                    class="form-control"
                    placeholder="Enter Hire Rate" 
                    :value="share.value"
                    @input="share.value = Number($event.target.value)">
            </div> 
          </div>
          <hr>

  <!-- Time lost / saved -->
          <div class="row align-items-center">
            <h5 class="col-3">Time, hrs:</h5>
            <div class="col-2 input-group-sm">
              <input type="number"
                    class="form-control"
                    :value="time.value"
                    @input="time.value = Number($event.target.value)">
            </div>  
            <div class="col-2">
              <div class="icheck-material-white">
                <input type="checkbox" id="cb2" v-model="time.flag">
                <label for="cb2">saved</label>
              </div>                              
            </div>            
          </div>          
          <hr>

  <!-- Bunkers -->
          <div class="row align-items-center mb-3">
            <div class="col-4 text-left">
              <div class="icheck-material-white">
                <input type="checkbox" id="cb3" v-model="bunkers.on">
                <label for="cb3">Bunkers:</label>
              </div>  
            </div>
          </div>          
          <template v-if="bunkers.on">
            <div class="row mb-2 justify-content-center">
              <div class="col-1"></div>
              <div class="col-2">Grade</div> 
              <div class="col-2">Quantity</div>
              <div class="col-2">Price</div> 
              <div class="col-1 p-0">Saved</div> 
              <div class="col-2 text-center">Value</div> 
            </div>
            <div class="row mb-2 justify-content-center" v-for="(grade, index) in bunkers.grades" :key="index">
              <div class="col-1"><div @click="removeGrade(index)" class="btn btn-danger btn-delete">x</div></div>
              <div class="col-2 input-group-sm"><input type="text" class="form-control" v-model="grade.name"></div> 
              <div class="col-2 input-group-sm"><input v-model="grade.qtty" type="number" class="form-control"></div> 
              <div class="col-2 input-group-sm"><input v-model="grade.price" type="number" class="form-control"></div>
              <div class="col-1">
                <div class="icheck-material-white">
                  <input type="checkbox" :id="index" v-model="grade.saved">
                  <label :for="index"></label>
                </div>                            
              </div> 
              <div class="col-2 pr-4 text-right">{{ $myLib.formatNum(bunkerResult(grade)) }}</div>             
            </div>
            <div class="row justify-content-left">
              <div class="col-2">
                <div @click="addGrade()" class="btn btn-success btn-delete">+</div>
              </div>              
            </div> 
          </template> 
          <hr>

  <!-- Result  -->
          <div class="row align-items-center">
            <h5 class="col-12">Result: usd {{ $myLib.formatNum(result)}} / {{ $myLib.formatNum(result / hireRate) }} days </h5>         
          </div>
        </div>     
<!-- Footer with save / cancel btn -->
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
        description: null,        
        hireRate: this.$store.getters.finance.basicHire,
        share: { on: false, value: 100 },
        time: { value: null, flag: false },
        bunkers: {
          on: false,
          grades: []
        }               
      }
    },
    mounted() {
      const bunkersDelivery =  this.$store.getters.bunkersOnDelivery.grades;
      const bunkersSpeedClaim = this.bunkers.grades;

      bunkersDelivery.forEach((item, index) => {
        bunkersSpeedClaim.push({
          name: item.name,
          saved: false,
          qtty: 0,
          price: item.price
        })
      })
    }, 
    computed: {
      shareValue() {
        return this.share.on ? this.share.value / 100 : 1;
      },
      timeValue() {
        const timeValue = this.time.value / 24;
        return this.time.flag ? -timeValue : timeValue;
      }, 
      result() {
        const timeTotal = this.hireRate * this.timeValue * this.shareValue;
        const bunkerTotal = this.bunkers.on ? 
          this.bunkers.grades.reduce((sum, grade) => {
            const sign = grade.saved ? -1 : 1;
            return sum + grade.price * grade.qtty * sign; 
          }, 0) : 0;
        return timeTotal + bunkerTotal;
      }
    },
    methods: {    
      bunkerResult(grade) {
        const bunkerResult = grade.price * grade.qtty;
        return grade.saved ? -bunkerResult : bunkerResult;
      }, 
      removeGrade(index) {
        this.bunkers.grades.splice(index, 1);
      }, 
      addGrade() {
        this.bunkers.grades.push({ name: null, saved: false, qtty: 0, price: 0 });
      },
      ok() {        
        this.$store.dispatch('addSpeedClaim', {
          description: this.description,        
          hireRate: this.hireRate,
          share: this.share,
          time: this.time, 
          bunkers: this.bunkers,
          credit: null,
          debit: null
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
