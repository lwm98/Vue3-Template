<template>
  <div id="app">
    hello vue3 + ts + vite
    <el-button type="primary">测试element+</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
  },
  setup() {
    return { }
  },
  data: function() {
    return {}
  }
})
</script>
