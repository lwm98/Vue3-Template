<template>
  <i class="sub-el-icon" :class="icon" v-if="icon && icon.includes('el-icon')" />
  <i :class="icon" v-else />
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'MenuItem',
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
})
</script>

<style scoped>
.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
}
</style>
