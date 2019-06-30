<template>
  <tr>
    <td colspan="4">{{index}}. {{description}}</td>
    <td class="debit-col"><input type="text" readonly :value="value"></td>
    <td class="credit-col"></td>
  </tr>
</template>
<script>
export default {
  props: ['index', 'description', 'value']
}
</script>

