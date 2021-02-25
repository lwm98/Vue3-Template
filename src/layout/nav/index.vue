<template>
    <el-header>
      <div class="left" @click="handleFold">
        <i class="el-icon-s-fold foldBtn" v-show="siderbar" ></i>
        <i class="el-icon-s-unfold foldBtn" v-show="!siderbar" ></i>
      </div>
      <div class="right">
        <i class="el-icon-bell noticeBtn"></i>
        <div class="user">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <el-avatar class="avatar" :size="size" :src="circleUrl"></el-avatar>
              <span class="username">
                <i>用户名</i>
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item @click="loginOut">注销登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </el-header>
</template>

<script lang='ts'>
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    const store = useStore()
    const size = ref('small')
    const circleUrl = ref('https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png')

    const siderbar = computed(() => {
      return store.getters.sidebarStatus
    })

    const handleFold = () => {
      store.dispatch('app/toggleSideBar')
    }

    const loginOut = ():void => {
      store.dispatch('user/LOGIN_OUT')
    }

    return { size, circleUrl, siderbar, loginOut, handleFold }
  }
})
</script>

<style lang='scss' scoped>
$navHeight:60px;
.noticeBtn{
  cursor: pointer;
  margin-right: 26px;
}

.foldBtn{
  font-size: 20px;
  cursor: pointer;
}

.el-header{
  padding-left: 25px;
  padding-right: 40px;
  height: $navHeight;
  background: #FFFFFF;
  box-shadow: 0px 1px 4px 0px rgba(0, 21, 41, 0.12);

  display: flex;
  justify-content: space-between;
  align-items: center;

  .right{
    height: 60px;
    display: inline-flex;
    align-items: center;
    .user{
      cursor: pointer;
      user-select: none;

      .el-dropdown-link{
        display: inline-flex;
        align-items: center;
      }
      .username{
        line-height: 28px;
        transform: translateY(3px);
      }
      .avatar{
        margin-right: 8px;
      }
    }
  }
}
</style>
