<template>
  <div class="container">
    <p class="title">vue3-template</p>

    <button @click="handleAdd">count is: {{ count }}</button>
    <br>
    <button @click="handleClick">点击这里跳转</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { Router, useRouter } from 'vue-router'
export default defineComponent({
  name: 'HelloWorld',

  setup: (props, context) => {
    const store = useStore()
    const router:Router = useRouter()

    // count 部分
    const count = computed(() => store.getters.count)
    const handleAdd = () => {
      store.commit('user/COUNT_ADD')
    }

    // 路由部分
    const handleClick = () => {
      console.log('click one time:', count)
      router.push({ path: '/pagea' })
    }

    return { count, handleAdd, handleClick }
  }
})
</script>

<style lang='scss' scoped>
.container{
  text-align: center;
}
</style>
