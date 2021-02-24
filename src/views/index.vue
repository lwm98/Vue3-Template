
<template>
  <div class="container">
    <p>Vue3-Template</p>
    <p>
      首页
    </p>
    <el-button type="primary" @click="handleClick">进入</el-button>
  </div>
</template>

<script lang='ts' setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const handleClick = () => {
  router.push({ name: 'Home' })
}
</script>

<style lang='scss' scoped>
.container{
  text-align: center;
}
</style>
