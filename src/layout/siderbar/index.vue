<template>
    <el-aside :class="{'el-aside-fold':!siderbar}">
      <div class="title aside-title">Vue3-Template</div>

      <el-scrollbar wrap-class="scrollbar-wrapper">
        <el-menu
          :default-active="activeMenu"
          :collapse="isCollapse"
          :background-color="variables.menuBg"
          :text-color="variables.menuText"
          :unique-opened="false"
          :active-text-color="variables.menuActiveText"
          :collapse-transition="false"
          mode="vertical"
        >
          <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" />
        </el-menu>
      </el-scrollbar>
    </el-aside>
</template>

<script lang='ts'>
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import variables from '@/styles/variables'
import SidebarItem from './SidebarItem.vue'
import { routes } from '@/router/index'
export default defineComponent({
  components: {
    SidebarItem
  },
  setup() {
    const route = useRoute()
    const store = useStore()

    const permission_routes = routes

    const siderbar = computed(() => {
      return store.getters.sidebarStatus
    })

    const isCollapse = computed(() => {
      return !siderbar.value
    })

    const activeMenu = computed(() => {
      const { meta, path } = route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    })

    return { siderbar, isCollapse, permission_routes, variables, activeMenu }
  }
})
</script>

<style lang='scss' scoped>
$asidebgc:#26adec;
$menuHover:#cccccc;
$menuActive:#ffffff;
$navHeight:60px;

  .is-horizontal {
    display: none;
  }

  .el-aside {
    overflow-x: hidden;
    transition: width 0.28s;
    width: 200px!important;
    height: 100vh;
    background-color: $asidebgc;
    color: #333;
    text-align: center;
  }

  .el-aside-fold{
    width: 60px!important;
  }

  .aside-title{
    white-space:nowrap;
    color: white;
    height: $navHeight;
    line-height: $navHeight;
  }

  .el-scrollbar{
    height: calc(100% - #{$navHeight});
  }

  .scrollbar-wrapper {
    overflow-x: hidden !important;
  }

  .el-scrollbar__bar.is-vertical {
      right: 0px;
  }

  .el-menu{
    border: none;
    height: 100%;
  }

::v-deep(.el-menu-item.is-active) {
    background-color: $menuActive!important;
  }

::v-deep(.el-menu-item) {
    &:hover {
      background-color: $menuHover !important;
    }
    &.is-active:hover{
      background-color: $menuActive!important;
    }
  }
</style>
