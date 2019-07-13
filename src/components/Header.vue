<template>
<div>
  <div class="row">
    <div class="col-lg-12">
      <hr>
      <h2 class="page-title font-weight-normal" align="center">
        M/V <b>{{vesselName}}</b> / <b>{{charterersName}}</b> CP DD <b>{{cpDate}}</b>
      </h2>
      <h1 class="page-title" align="center">
        STATEMENT OF ACCOUNTS
      </h1>
      <hr>
    </div>
  </div> 
  <div class="row">
    <div class="col-lg-12">
      <div class="card">
        <div class="card-body">
          <table class="table">
            <tr>
              <td colspan="4" class="not-bordered">
                <div class="btn-settings" @click="$emit('clickSettings')">
                  <i class="zmdi zmdi-settings"></i> <span>settings</span>
                </div>
              </td>
              <th scope="col" class="debit-col text-center">DEBIT, USD</th>
              <th scope="col" class="credit-col text-center">CREDIT, USD</th>
            </tr>
          </table>          
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  computed:{
    ...mapGetters([
      'vesselName',
      'charterersName',
      'cpDate'
    ])
  },
}
</script>
<style scoped>
  .btn-settings {
    cursor: pointer;
  }
</style>


