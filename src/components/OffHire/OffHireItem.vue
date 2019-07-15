<template>
  <div>
    <hr>
    <table class="table">
      <tbody>
        <tr>
          <th colspan="6">OFF-HIRE #1 (Due to ME out of order)
            <div class="btn-edit" 
                 @click="$emit('edit', index)">
              <i class="fa fa-edit"></i> 
            </div>
          </th>          
        </tr>
        <tr>
          <td colspan="3" align="right">Share:</td>
          <td></td>
        </tr>
        <tr>
          <td colspan="3" align="right">Rate, USD/day:</td>
          <td></td>
        </tr>
        <tr>
          <td class="not-bordered"></td>
          <td colspan="2" align="center">Local Time</td>
        </tr>
        <tr>
          <td align="right">From:</td>
          <td></td>
          <td></td>
          <td align="center">Days</td>
        </tr>
        <tr>
          <td align="right">To:</td>
          <td></td>
          <td></td>
          <td align="center"><input type="text" readonly=""></td>
          <td class="debit-col"></td>
          <td class="credit-col"></td>
        </tr>
        <tr>
          <td colspan="6" class="not-bordered"></td>
        </tr>
        <tr>
          <td colspan="3">ADD COMM OFF-HIRE PERIODS :</td>
          <td></td>
          <td class="debit-col"></td>
          <td class="credit-col"></td>
        </tr>
        <tr>
          <td colspan="3">BRK COMM OFF-HIRE PERIODS :</td>
          <td></td>
          <td class="debit-col"></td>
          <td class="credit-col"></td>
        </tr>
        <tr>
          <td colspan="2">C/E/V OFF-HIRE PERIOD :</td>
          <td>Rate, USD/PMPR</td>
          <td></td>
          <td class="debit-col"></td>
          <td class="credit-col"></td>
        </tr>
        <tr>
          <td colspan="6" class="not-bordered"></td>
        </tr>
        <tr>
          <th colspan="3">BUNKERS CONSUMED DURING OFF-HIRE :</th>
          <td>Price, USD/mt</td>
        </tr>
        <tr>
          <td>IFO</td>
          <td></td>
          <td>MT</td>
          <td></td>
          <td class="debit-col"></td>
          <td class="credit-col"></td>
        </tr>
        <tr>
          <td>MDO</td>
          <td></td>
          <td>MT</td>
          <td></td>
          <td class="debit-col"></td>
          <td class="credit-col"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  
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
  }
</style>

