<template>
  <div class="dropdown">
    <a href="javascript:void(0);" 
       class="dropdown-toggle dropdown-toggle-nocaret"
       data-toggle="dropdown" 
       aria-expanded="false">
      <i class="icon-options"></i>
    </a>
    <div class="dropdown-menu dropdown-menu-right" 
          x-placement="bottom-end">
      <a class="dropdown-item" 
         href="javascript:void(0);"
         v-for="(item, index) in menuList" 
         :key="index"
         @click="clickHandler(item.name)">
          <i :class="item.iconClass"></i> {{item.name}}
      </a>                                    
    </div>
  </div>
</template>

<script>
export default {
  props: ['menuList'], 
  methods: {
    clickHandler(data) {
      this.$emit('select', data);
    }
  }
}
</script>


<style scoped>
  .dropdown-menu .dropdown-menu-right {
    position: absolute; 
    will-change: transform; 
    top: 0px; 
    left: 0px; 
    transform: translate3d(17px, 21px, 0px);
  }
</style>
