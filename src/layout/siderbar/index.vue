<template>
    <el-aside :class="{'el-aside-fold':!siderbar}">
      <span class="title aside-title">Vue3-Template</span>
    </el-aside>
</template>

<script lang='ts'>
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    const store = useStore()

    const siderbar = computed(() => {
      return store.getters.sidebarStatus
    })

    return { siderbar }
  }
})
</script>

<style lang='scss' scoped>
  .el-aside {
    overflow-x: hidden;
    transition: width 0.2s linear;
    width: 200px!important;
    height: 100vh;
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
  }

  .el-aside-fold{
    width: 60px!important;
  }

  .aside-title{
    white-space:nowrap;
  }
</style>
