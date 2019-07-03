<template>
  <tr>
    <td colspan="4">{{index + 1}}. {{type}} ({{description}})</td>
    <td class="debit-col"></td>
    <td class="credit-col">
      <input type="text" readonly="" :value="value">
      <button class="btn btn-outline-warning"
              @click="$emit('edit', index)">
              edit
      </button>
    </td>
  </tr>
</template>
<script>
export default {
  props: ['index', 'type', 'description', 'value']
}
</script>
<style scoped>
  td{
    position: relative;
  }
  .btn {
    position: absolute;
    right: -100px; 
    top: 7px; 
  }
 </style>
