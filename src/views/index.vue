
<template>
  <div class="container">
    <div class="title mgb">Vue3-Template</div>
    <div class="mgb">首页</div>
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
.mgb{
  margin-bottom: 40px;
}
.container{
  text-align: center;
}
</style>
