<template>
    <div>
        <HelloWorld />
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
export default defineComponent({
  data() {
    return {}
  },
  components: {
    HelloWorld
  },
  setup() {
    return { }
  },
  methods: {

  }
})
</script>

<style lang='scss' scoped>

</style>
