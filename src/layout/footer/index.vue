<template>
    <el-footer>
      <span class="top-btn">帮助  隐私  条款</span>
      <br>
      <span>该项目仅供学习参考使用</span>
    </el-footer>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {

  }
})
</script>

<style lang='scss' scoped>
  .el-footer{
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.45);
    line-height: 22px;

    background-color: #F0F2F5;
    text-align: center;
  }
</style>
