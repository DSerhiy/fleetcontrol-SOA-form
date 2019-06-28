<template>
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
  }
}
</script>

