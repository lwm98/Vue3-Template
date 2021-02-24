
<template>
<div class="container">
  <div class="header">
    <div class="title">Vue3-Temlate</div>
  </div>
  <div class="main">
    <div class="wrap">
      <div class="title">登录</div>
      <div class="form">
        <div>账号：{{username}}</div>
        <div>密码：{{password}}</div>
      </div>
      <div><el-button class="loginBtn" type="primary" @click="handleClick">进入</el-button></div>
    </div>
  </div>
  <div class="footer">
    <div class="top-btn">帮助  隐私  条款</div>
    <div>该项目仅供学习参考使用</div>
  </div>
</div>
</template>

<script lang='ts' setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const username = ref('admin')
const password = ref('123456')

const handleClick = () => {
  router.push({ name: 'Home' })
}
</script>

<style lang='scss' scoped>
$bacc:#F0F3F7;

.container{
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  .header{
    padding-top: 48px;
    padding-left: 55px;
    background-color: $bacc;
  }

  .main{
    background-color: $bacc;
    height: calc(100% - 108px);
    display: flex;
    justify-content: center;
    align-items: center;
    .wrap{
      width: 384px;
      height: 436px;
      background: #FFFFFF;
      box-shadow: 0px 20px 40px 10px rgba(0, 170, 255, 0.08);
      border-radius: 4px;
      padding: 39px 42px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .form{
        flex: 1;
        padding-top: 24px;
      }
    }
  }

  .footer{
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.45);
    line-height: 22px;

    background-color: $bacc;
    padding-bottom: 64px;
    text-align: center;
  }
}

.loginBtn{
  width: 300px;
  height: 44px;
  background: #00AAFF;
  border-radius: 22px;
  justify-content: flex-end;
}

.mgb{
  margin-bottom: 40px;
}

</style>
