<template>
  <div>
    <hr>
    <table class="table" v-if="bunkers.status">
      <tbody>
        <tr>
          <td colspan="4" class="not-bordered"></td>
        </tr>  
        <tr>
          <th colspan="3">BUNKERS ON REDELIVERY :</th>
          <td align="center">Price, USD/mt</td>
        </tr>
        <tr v-for="(grade, index) in bunkers.grades" :key="index">
          <td align="center"></td>
          <td align="center">{{ grade.name }}</td>
          <td align="right" class="pr-4">{{ $myLib.formatNum(grade.qtty) }} MT</td>
          <td align="center">{{ grade.price }}</td>
          <td class="debit-col" align="right">{{ $myLib.formatNum(grade.qtty * grade.price) }}</td>
          <td class="credit-col"></td>
        </tr>        
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  computed: {
    bunkers() {
      return this.$store.getters.bunkersOnRedelivery;
    }
  }
  
}
</script>
<style scoped>
  table {
    position: relative;
  }
  input[type="text"] {
    text-align: center;
    max-width: 80px;
  } 
  .btn-edit {
    border-radius: 5px;
    padding: 5px;
    position: absolute;
    right: -35px; 
    top: 0px; 
    cursor: pointer;
    transition: 0.2s;
  }
  .btn-edit:hover {
    font-size: 1.5rem;
    padding: 0;
  }
  hr{
    background: rgba(20, 19, 19, 0.767);
    height: 2px;
    margin-bottom: 8px;
  }
</style>

