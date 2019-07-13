<template>
  <table class="table">
    <tr>
      <td colspan="3" align="right">{{ description }}</td>
      <td align="center">{{ new Date(date) }}</td>
      <td class="debit-col" align="right">{{ $myLib.formatNum(value) }}</td>
      <td class="credit-col" align="right"></td>
    </tr>
    <tr>
      <td colspan="6" class="not-bordered"></td>
    </tr>        
  </table>  
</template>
<script>
export default {
  props: ['description', 'date', 'value']
}
</script>
