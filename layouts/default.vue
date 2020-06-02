<template>
  <div>
    <Header />
    <div class="container mx-auto flex justify-center items-center text-center min-h-screen">
      <nuxt />
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import Header from '@/components/header'
export default defineComponent({
  components: {
    Header
  },
  setup () {
    return {
    }
  }
})
</script>

<style>
</style>
