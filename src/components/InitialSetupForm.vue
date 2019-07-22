<template>
<div class="container">

  <!-- Title -->
  <div class="row pt-2 pb-2">
    <div class="col-sm-9">
      <h4 class="page-title">Initila Setup:</h4>		    
    </div>
  </div>

  <!-- Delivery details -->
  <div class="row">
    <div class="card col-12">
      <div class="card-header text-uppercase">Delivery Details :</div>
      <div class="card-body">

        <div class="row">
          <div class="col-2">
            <div class="icheck-material-white icheck-inline">
              <input type="radio" id="radio3"
                value="estimated"
                v-model="deliveryStatus">
              <label for="radio3">Estimated</label>
            </div>                                
          </div>
          <div class="col-2">
            <div class="icheck-material-white icheck-inline">
              <input type="radio" id="radio4"
                value="actual" 
                v-model="deliveryStatus">
              <label for="radio4">Actual</label>
            </div>
          </div>
        </div>

        <hr>

        <div class="row mb-3 align-items-center">
          <label class="col-4">time:</label>            
          <div class="col-3 input-group-sm">
            <input type="time" 
                    class="form-control" 
                    @input="setDeliveryTime($event.target.value)"
                    :value="delivery.time">
          </div>                            
        </div>


        <div class="row mb-3 align-items-center">
          <label class="col-4">date:</label>                
          
          <div class="col-3 input-group-sm">
            <input type="date" 
                    class="form-control" 
                    @input="setDeliveryDate($event.target.value)"
                    :value="delivery.date">
          </div> 
        </div> 
      </div>
    </div>

      
  </div>

  <!-- Finance -->
  <div class="row">
    <div class="card col-12">
      <div class="card-header text-uppercase">Finance :</div>
      <div class="card-body">

        <div class="row">
          <div class="col-12">
            <div class="icheck-material-white">
              <input type="checkbox" id="7"
                :checked="finance.addComm.on"
                @click="setAddCommOn($event.target.checked)">
              <label for="7">Address commission</label>
            </div>
          </div>
          <div class="col-12">
            <div class="icheck-material-white">
              <input type="checkbox" id="8" 
                :checked="finance.brkComm.on"
                @click="setBrkCommOn($event.target.checked)">
              <label for="8">Brokerage commision</label>
            </div>
          </div>
          <div class="col-12">
            <div class="icheck-material-white">
              <input type="checkbox" id="9" 
                :checked="finance.ballastBonus.on"
                @click="setBallastBonusOn($event.target.checked)">
              <label for="9">Ballast Bonus</label>
            </div>
          </div>
        </div>

        <hr>

        <div class="row mb-3 align-items-center">
          <label class="col-4">Basic Hire Rate:</label>            
          <div class="col-3 input-group-sm">
            <input type="number" 
            class="form-control" 
            placeholder="Enter Hire Rate"
            @input="setBasicHire(Number($event.target.value))"
            :value="finance.basicHire">
          </div>                            
        </div>
        
        <div class="row mb-3 align-items-center">
          <label class="col-4">c/e/v:</label> 
          <div class="col-3 input-group-sm">
            <input type="number" 
            class="form-control" 
            placeholder="Enter C/E/V"
            @input="setCevValue(Number($event.target.value))"
            :value="finance.cevRate.value">
          </div>  

          <div class="col-2 text-right">
            <div class="icheck-material-white icheck-inline">
              <input type="radio" id="radio1" 
                :value="30.416" 
                v-model="cevDays">
              <label for="radio1">(365 / 12)</label>
            </div>                                
          </div>
          <div class="col-2">
            <div class="icheck-material-white icheck-inline">
              <input type="radio" id="radio2"                  
                :value="30" 
                v-model="cevDays">
              <label for="radio2">30</label>
            </div>
          </div>            
        </div> 

        <div class="row mb-3 align-items-center" v-if="finance.addComm.on">
          <label class="col-4">Add comm:</label>
          <div class="col-3 input-group-sm">
            <input type="number" 
                    class="form-control" 
                    placeholder="Enter Add Comm"
                    @input="setAddCommValue(Number($event.target.value))"
                    :value="finance.addComm.value"
                    :disabled="!finance.addComm.on">
          </div> 
        </div>                

        <div class="row mb-3 align-items-center" v-if="finance.brkComm.on">
          <label class="col-4">Brk comm:</label>
          <div class="col-3 input-group-sm">
            <input type="number" 
                    class="form-control" 
                    placeholder="Enter BRK Comm"
                    @input="setBrkCommValue(Number($event.target.value))"
                    :value="finance.brkComm.value"
                    :disabled="!finance.brkComm.on">
          </div> 
        </div>  

        <div class="row mb-3 align-items-center" v-if="finance.ballastBonus.on">
          <label class="col-4">Ballast bonus:</label>
          <div class="col-3 input-group-sm">
            <input type="number" 
                    class="form-control" 
                    placeholder="Enter ballast bonus"
                    @input="setBallastBonusValue(Number($event.target.value))"
                    :value="finance.ballastBonus.value"
                    :disabled="!finance.ballastBonus.on">
          </div> 
        </div> 
      </div>
      <div class="card-footer text-right">
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
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters([      
      'finance',
      'delivery',      
    ]),
    cevDays: {
      set: function(val) {
        this.setCevDays(val);
      }, 
      get: function() {
        return this.finance.cevRate.days;
      }
    },
    deliveryStatus: {
      set: function(val) {
        this.setDeliveryStatus(val);
      }, 
      get: function() {
        return this.delivery.status;
      }
    }
  },
  methods: {
    ...mapActions([      
      // Finance
      'setBasicHire',
      'setCevValue',
      'setCevDays',        
      'setAddCommOn',
      'setAddCommValue',
      'setBrkCommOn',
      'setBrkCommValue',
      'setBallastBonusOn',
      'setBallastBonusValue',
      // Delivery
      'setDeliveryStatus',
      'setDeliveryTime',
      'setDeliveryDate'      
    ]), 
    save() {
                      
      this.$store.dispatch('addHireItem', { 
        hireRate: this.$store.getters.finance.basicHire, 
        fromDate: this.$store.getters.delivery, 
        toDate: {time: this.$store.getters.delivery.time, date: this.$store.getters.delivery.date} 
      });   
      this.$store.dispatch('setFirstStart', false);
    }         
  }  
}
</script>
