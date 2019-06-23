<template>
  <tr>
    <td colspan="4">{{index}}. {{name}}</td>
    <td class="debit-col"></td>
    <td class="credit-col"><input type="text" readonly :value="credit"></td>
  </tr>
</template>
<script>
export default {
  props: ['index', 'name', 'credit']
}
</script>

