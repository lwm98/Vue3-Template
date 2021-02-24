<template>
    <div class="container">
        <el-container>
            <Slidebar />
            <el-container direction='vertical'>
                <Nav />
                <Main />
                <Footer />
            </el-container>
        </el-container>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import Nav from './nav/index.vue'
import Slidebar from './slidebar/index.vue'
import Main from './main/index.vue'
import Footer from './footer/index.vue'
export default defineComponent({
  components: {
    Nav, Slidebar, Main, Footer
  },
  setup() {

  }
})
</script>

<style lang='scss' scoped>
</style>
