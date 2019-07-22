<template>
  <div class="container">   
    
    <!-- Components -->
    <div class="row">
      <div class="card col-12">
        <div class="card-header text-uppercase">Components :</div>
        <div class="card-body">
          
          <div class="row">
            <div class="col-6">
              <div class="row">               
                <div class="col-12">
                  <div class="icheck-material-white">
                    <input type="checkbox" id="1" 
                      :checked="componentsOn.ownersExpenses"
                      @click="setOwnersExpensesOn($event.target.checked)">
                    <label for="1">Owners' Expenses</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="icheck-material-white">
                    <input type="checkbox" id="2" 
                      :checked="componentsOn.charterersExpenses"
                      @click="setCharterersExpensesOn($event.target.checked)">
                    <label for="2">Charterers' Expenses</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="icheck-material-white">
                    <input type="checkbox" id="3" 
                      :checked="componentsOn.holdsCleaning"
                      @click="setHoldsCleaningOn($event.target.checked)">
                    <label for="3">Holds Cleaning</label>
                  </div>
                </div>                     
              </div>
            </div>  
            <div class="col-6">
              <div class="row">
                <div class="col-12">
                  <div class="icheck-material-white">
                    <input type="checkbox" id="6" 
                    :checked="componentsOn.bunkers"
                    @click="setBunkersOn($event.target.checked)">
                    <label for="6">Bunkers</label>
                  </div>
                </div>                
                <div class="col-12">
                  <div class="icheck-material-white">
                    <input type="checkbox" id="4" 
                    :checked="componentsOn.offHire"
                    @click="setOffHireOn($event.target.checked)">
                    <label for="4">Off-hire</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="icheck-material-white">
                    <input type="checkbox" id="5" 
                    :checked="componentsOn.speedClaim"
                    @click="setSpeedClaimOn($event.target.checked)">
                    <label for="5">Speed Claim</label>
                  </div>
                </div>                
              </div>
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

          <hr>

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

    <!-- Redelivery details -->
    <div class="row">
      <div class="card col-12">
        <div class="card-header text-uppercase">Re-delivery Details :</div>
        <div class="card-body">

          <div class="row">
            <div class="col-2">
              <div class="icheck-material-white icheck-inline">
                <input type="radio" id="radio5" value="estimated" v-model="redeliveryStatus">
                <label for="radio5">Estimated</label>
              </div>                                
            </div>
            <div class="col-2">
              <div class="icheck-material-white icheck-inline">
                <input type="radio" id="radio6" value="actual" v-model="redeliveryStatus">
                <label for="radio6">Actual</label>
              </div>
            </div>
          </div>

          <hr>

          <div class="row mb-3 align-items-center">
            <label class="col-4">time:</label>            
            <div class="col-3 input-group-sm">
              <input type="time" 
                      class="form-control" 
                      @input="setRedeliveryTime($event.target.value)"
                      :value="redelivery.time">
            </div>                            
          </div>

          <div class="row mb-3 align-items-center">
            <label class="col-4">date:</label>                
            
            <div class="col-3 input-group-sm">
              <input type="date" 
                      class="form-control" 
                      @input="setRedeliveryDate($event.target.value)"
                      :value="redelivery.date">
            </div> 
          </div> 
        </div>
      </div>       
    </div>

    <!-- Bunkers on Delivery -->
    <div class="row">
      <div class="card col-12">
        <div class="card-header text-uppercase">Bunkers on delivery :</div>
        <div class="card-body">

          <div class="row">
            <div class="col-2">
              <div class="icheck-material-white icheck-inline">
                <input type="radio" id="radio7" value="estimated" v-model="bunkersOnDeliveryStatus">
                <label for="radio7">Estimated</label>
              </div>                                
            </div>
            <div class="col-2">
              <div class="icheck-material-white icheck-inline">
                <input type="radio" id="radio8" value="actual" v-model="bunkersOnDeliveryStatus">
                <label for="radio8">Actual</label>
              </div>
            </div>
          </div>

          <hr>

          <div class="row mb-2 justify-content-center">
              <div class="col-1"></div>
              <div class="col-2">Grade</div> 
              <div class="col-2">Quantity</div>               
              <div class="col-2">Price</div> 
              <div class="col-2 text-right">Value</div> 
            </div>
            <div class="row mb-2 justify-content-center" 
                v-for="(grade, index) in bunkersOnDelivery.grades" :key="index">
              <div class="col-1"><div @click="removeGrade({flag: 'delivery', index})" class="btn btn-danger btn-delete">x</div></div>
              <div class="col-2 input-group-sm"><input type="text" class="form-control" v-model="grade.name"></div> 
              <div class="col-2 input-group-sm"><input v-model="grade.qtty" type="number" class="form-control"></div> 
              <div class="col-2 input-group-sm"><input v-model="grade.price" type="number" class="form-control"></div>
              <div class="col-2 text-right">{{ $myLib.formatNum(grade.price * grade.qtty) }}</div>             
            </div>
            <div class="row justify-content-left">
              <div class="col-2">
                <div @click="addGrade('delivery')" class="btn btn-success btn-delete">+</div>
              </div>              
            </div>
        </div>
      </div>       
    </div>

    <!-- Bunkers on Redelivery -->
    <div class="row">
      <div class="card col-12">
        <div class="card-header text-uppercase">Bunkers on re-delivery :</div>
        <div class="card-body">

          <div class="row">
            <div class="col-2">
              <div class="icheck-material-white icheck-inline">
                <input type="radio" id="radio9" value="estimated" v-model="bunkersOnRedeliveryStatus">
                <label for="radio9">Estimated</label>
              </div>                                
            </div>
            <div class="col-2">
              <div class="icheck-material-white icheck-inline">
                <input type="radio" id="radio10" value="actual" v-model="bunkersOnRedeliveryStatus">
                <label for="radio10">Actual</label>
              </div>
            </div>
            <div class="col-3">
              <div class="icheck-material-white icheck-inline">
                <input type="radio" id="radio11" value="asOnDelivery" v-model="bunkersOnRedeliveryStatus">
                <label for="radio11">as on delivery</label>
              </div>
            </div>
          </div>

          <hr>

          <div class="row mb-2 justify-content-center">
              <div class="col-1"></div>
              <div class="col-2">Grade</div> 
              <div class="col-2">Quantity</div>               
              <div class="col-2">Price</div> 
              <div class="col-2 text-right">Value</div> 
            </div>
            <div class="row mb-2 justify-content-center" 
                v-for="(grade, index) in bunkersOnRedelivery.grades" :key="index">
              <div class="col-1"><div @click="removeGrade({flag: 'redelivery', index})" class="btn btn-danger btn-delete">x</div></div>
              <div class="col-2 input-group-sm"><input type="text" class="form-control" v-model="grade.name"></div> 
              <div class="col-2 input-group-sm"><input v-model="grade.qtty" type="number" class="form-control"></div> 
              <div class="col-2 input-group-sm"><input v-model="grade.price" type="number" class="form-control"></div>
              <div class="col-2 text-right">{{ $myLib.formatNum(grade.price * grade.qtty) }}</div>             
            </div>
            <div class="row justify-content-left">
              <div class="col-2">
                <div @click="addGrade('redelivery')" class="btn btn-success btn-delete">+</div>
              </div>              
            </div> 
        </div>
      </div>       
    </div> 

    <!-- Holds cleaning -->
    <div class="row">
      <div class="card col-12">
        <div class="card-header text-uppercase">Holds cleaning :</div>
        <div class="card-body">

          <div class="row mb-3 align-items-center">
            <label class="col-2 col-form-label">ILOHC:</label>
            <div class="col-3 input-group-sm">
              <input type="number" 
                      class="form-control" 
                      placeholder="Enter ILOHC"
                      @input="setHoldsCleaningIlohc(Number($event.target.value))"
                      :value="holdsCleaning.ilohc">
            </div>
            <label class="col-2 col-form-label">ILIHC:</label>
            <div class="col-3 input-group-sm">
              <input type="number" 
                      class="form-control" 
                      placeholder="Enter ILIHC"
                      @input="setHoldsCleaningIlihc(Number($event.target.value))"
                      :value="holdsCleaning.ilihc">
            </div>      
          </div> 
        </div>
      </div>       
    </div> 

  </div>
</template>
<script>
  import { mapGetters } from 'vuex';
  import { mapActions } from 'vuex';
  
  export default {
    data() {
      return {
      }
    },    
    computed:{
      ...mapGetters([
        'componentsOn',
        'finance',
        'delivery',
        'redelivery',
        'bunkersOnDelivery',
        'bunkersOnRedelivery',
        'holdsCleaning'
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
      },
      redeliveryStatus: {
        set: function(val) {
          this.setRedeliveryStatus(val);
        }, 
        get: function() {
          return this.redelivery.status;
        }
      },
      bunkersOnDeliveryStatus: {
        set: function(val) {
          this.setBunkersOnDeliveryStatus(val);
        },
        get: function() {
          return this.bunkersOnDelivery.status;
        }
      },
      bunkersOnRedeliveryStatus: {
        set: function(val) {
          this.setBunkersOnRedeliveryStatus(val);
        },
        get: function() {
          return this.bunkersOnRedelivery.status;
        }
      }
    },
    methods: {
      ...mapActions([
        // ComponentsOn
        'setOwnersExpensesOn',
        'setCharterersExpensesOn',
        'setHoldsCleaningOn',
        'setBunkersOn',
        'setOffHireOn',
        'setSpeedClaimOn',
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
        'setDeliveryDate',
        // Redelivery
        'setRedeliveryStatus',
        'setRedeliveryTime',
        'setRedeliveryDate',
        // Bunkers on delivery and redelivery
        'setBunkersOnDeliveryStatus',
        'setBunkersOnRedeliveryStatus',
        'removeGrade',
        'addGrade',
        // Holds cleaning
        'setHoldsCleaningIlohc',
        'setHoldsCleaningIlihc'
      ]),          
    }
  }

</script>
<style scoped>
 
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

  input:disabled {
    color: rgba(128, 128, 128, 0.274) !important;
  }
</style>
