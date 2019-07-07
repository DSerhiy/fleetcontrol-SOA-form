<template>
  <tr>
    <td colspan="4">{{index + 1}}. {{type}} ({{description}})</td>
    <td class="debit-col"></td>
    <td class="credit-col text-right">{{ $myLib.formatNum(value)}}      
      <div class="btn-edit"
              @click="$emit('edit', index)">
              <i class="fa fa-edit"></i> 
      </div>
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
.btn-edit {
  /* border: 1px solid red; */
  border-radius: 5px;
  padding: 5px;
  position: absolute;
  right: -35px; 
  top: 1px; 
  cursor: pointer;
  transition: 0.2s;
 }

.btn-edit:hover {
  font-size: 1.5rem;
  padding: 0;
}
 </style>
