<template>
      <el-main>
          <router-view />
      </el-main>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {

  }
})
</script>

<style lang='scss' scoped>
.el-main {
    text-align: center;
    background-color: #E9EEF3;
    color: #333;
}
</style>
