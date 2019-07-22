<template>
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


