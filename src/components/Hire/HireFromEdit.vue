<template>

<div class="modal-layer">
  <div class="modal-dialog" @keydown.enter="update()"
                            @keydown.esc="close()">
    <div class="modal-content border-success">

      <div class="modal-header bg-success">
        <h5 class="modal-title text-white">Hire edit form</h5>
        <button type="button" 
                class="close text-white" 
                data-dismiss="modal" 
                aria-label="Close"
                @click="close()">
          <span aria-hidden="true">×</span>
        </button>
      </div>

      <div class="modal-body bg-grey">
        <div class="row mb-2 align-items-center">
          <div class="col-2"></div> 
          <div class="col-3">Hire rate:</div> 
          <div class="col-4">
            <input type="number" 
                   class="form-control" 
                   v-model="hireRate">
          </div> 
          <div class="col-2 text-center"></div> 
        </div>
        <hr>
        <div class="row mb-2">
          <div class="col-2"></div> 
          <div class="col-3">Time</div> 
          <div class="col-4">Date</div> 
          <div class="col-2 text-center">Days</div> 
        </div>
        <div class="row mb-3 align-items-center">
          <div class="col-2">From:</div> 
          <div class="col-3">
            <input type="time" readonly 
                   class="form-control" 
                   :value="fromDate.time">
          </div> 
          <div class="col-4">
            <input type="date" readonly 
                   class="form-control" 
                   :value="fromDate.date">
          </div> 
          <div class="col-2"></div> 
        </div>  
         <div class="row align-items-center">
          <div class="col-2">To:</div> 
          <div class="col-3">
            <input type="time" class="form-control" v-model="toDate.time">
          </div> 
          <div class="col-4">
            <input type="date" class="form-control" v-model="toDate.date" v-focus>
          </div> 
          <div class="col-2 text-center">{{total}}</div> 
        </div> 
        <hr>
        <div class="row justify-content-center">
          <div class="col-2">
            <input type="number" 
                   class="form-control" 
                   :value="days"
                   @input="days = Number($event.target.value)">
          </div>
          <div class="col-auto">
            <button class="btn btn-success" @click="addDays()">Add days</button>
          </div>
          <div class="col-auto">
            <button class="btn" @click="resetDate()">rest</button>
          </div>
        </div>
      </div>
    
      <div class="modal-footer bg-grey">
        <div class="col-auto">
          <button type="button" 
                    class="btn btn-danger  waves-effect waves-light"
                    @click="deleteItem()"
                    :disabled="!deleteAllowed">
                    <i class="zmdi zmdi-delete"></i>  
                    Delete Item
          </button>
        </div>
        <div class="col-auto">
          <button type="button" 
                  class="btn mr-1"
                  @click="close()">
            <i class="fa fa-window-close"></i> Cancel
          </button>
          <button type="button" 
                  class="btn btn-success"
                  @click="update()">
            <i class="fa fa-check"></i> Save
          </button>
        </div>        
      </div>      
    </div>
  </div>  
</div>

</template>
<script>
export default {
  props: ['index'],
  data() {
    return {
      days: 15,
      toDate: { time: null, date: null}, 
      hireRate: null,
      deleteAllowed: null
    }
  },
  mounted() {
    const toDate = this.$store.getters.hireItems[this.index].toDate;
    this.toDate.time = toDate.time;
    this.toDate.date = toDate.date;
    this.hireRate = this.$store.getters.hireItems[this.index].hireRate;
    this.deleteAllowed = this.index === 0 ? false: true;
  },
  computed: {
    fromDate() {
      return this.$store.getters.hireItems[this.index].fromDate;
    },
    total() {
      const fromDate = new Date(this.fromDate.date + ':' + this.fromDate.time + 'Z');
      const toDate = new Date(this.toDate.date + ':' + this.toDate.time + 'Z');
      return this.$myLib.formatNum((toDate - fromDate) / 60 / 60 / 24 / 1000);
    }    
  },
  methods: {  
     close() {
      this.$emit('close');
    }, 
    deleteItem() {
      this.$store.dispatch('deleteHireItem', this.index);
      this.close();
    },
    update() {
      this.$store.dispatch('updateToDate', {index: this.index, time: this.toDate.time, date: this.toDate.date});
      this.$store.dispatch('updateHireRate', {index: this.index, value: this.hireRate});

      if(this.$store.getters.hireItems.length > this.index + 1 )
        this.$store.dispatch('updateFromDate', {
          index: this.index + 1,
          time: this.toDate.time,
          date: this.toDate.date
        });

      if (this.index === 0) 
        this.$store.dispatch('setBasicHire', this.hireRate);
      
      this.close();
    },     
    addDays() {
      const toDate = new Date(this.toDate.date);
      this.toDate.date = new Date(toDate.setDate(toDate.getDate() + this.days)).toISOuString();      
    }, 
    resetDate() {
      const toDate = this.$store.getters.hireItems[this.index].toDate;
      this.toDate.time = toDate.time;
      this.toDate.date = toDate.date;
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
    min-width: 600px;
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


