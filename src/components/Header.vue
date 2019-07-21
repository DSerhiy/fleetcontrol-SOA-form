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
                <ul class="nav nav-tabs">
                <li class="nav-item">
                  <router-link to="/" class="nav-link" active-class="active" exact>SOA</router-link>                  
                </li>
                <li class="nav-item">
                  <router-link to='/settings' class="nav-link" active-class="active">Settings</router-link>
                </li>              
              </ul>               
              </td>              
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


