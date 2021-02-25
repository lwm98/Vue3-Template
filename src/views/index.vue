
<template>
<div class="container">
  <div class="header">
    <div class="title">Vue3-Template</div>
  </div>
  <div class="main">
    <div class="wrap">
      <div class="title">登录</div>
      <div class="form">
        <el-form>
            <el-form-item required prop="username">
                  <MDinput v-model="loginForm.username" name="username" type="text" placeholder="请输入用户名" :required="true" :valid="usernameValid">
                    <span class="input-label">用户名</span>
                  </MDinput>
                </el-form-item>
                <el-form-item required prop="password">
                  <MDinput v-model="loginForm.password" type="password" name="title" placeholder="请输入密码" :required="true" :valid="passwordValid">
                    <span class="input-label">密码</span>
                  </MDinput>
                </el-form-item>
        </el-form>
      </div>
      <div><el-button v-waves class="loginBtn" type="primary" @click="handleLogin">进入</el-button></div>
    </div>

  </div>
  <div class="pd-64">
    <Footer />
  </div>
</div>
</template>

<script lang='ts'>
import { useRouter } from 'vue-router'
import { defineComponent, ref } from 'vue'
import MDinput from '@/components/MDinput/index.vue'
import Footer from '@/layout/footer/index.vue'
export default defineComponent({
  components: {
    MDinput,
    Footer
  },
  setup() {
    const router = useRouter()
    const loginForm = ref({ username: '', password: '' })
    const usernameValid = ref(true)
    const passwordValid = ref(true)

    const handleLogin = () => {
      setTimeout(() => {
        router.push({ name: 'Home' })
      }, 400)
    }

    return { loginForm, usernameValid, passwordValid, handleLogin }
  }
})
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

  .pd-64{
    padding-bottom: 64px;
    background-color: $bacc;
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
