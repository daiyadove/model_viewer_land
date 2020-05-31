<template>
  <div class="container mx-auto flex justify-center items-center text-center min-h-screen">
    <ModelList />
  </div>
</template>

<script>
import '@google/model-viewer/dist/model-viewer'
import ModelList from '@/components/ModelList'
export default {
  components: {
    ModelList
  }
}
</script>

<style>
</style>
