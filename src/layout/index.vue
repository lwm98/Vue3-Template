<template>
    <div class="container">
        <el-container>
            <Siderbar />
            <el-container class='main-container' direction='vertical'>
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
import Siderbar from './siderbar/index.vue'
import Main from './main/index.vue'
import Footer from './footer/index.vue'
export default defineComponent({
  components: {
    Nav, Siderbar, Main, Footer
  },
  setup() {

  }
})
</script>

<style lang='scss' scoped>

</style>
