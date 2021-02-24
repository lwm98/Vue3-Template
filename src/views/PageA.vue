<template>
  <div>
      ===这是页面AAA===
      <el-skeleton animated/>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { session } from '../utils/storage'
export default defineComponent({
  setup() {
    console.log(session)
    console.log(import.meta.env.VITE_BASE_URL)
  }
})
</script>

<style lang="scss" scoped>

</style>
