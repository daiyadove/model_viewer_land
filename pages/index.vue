<template>
  <div>
    <ModelList
      :models="models"
    />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import '@google/model-viewer/dist/model-viewer'
import ModelList from '@/components/ModelList'
import { useModels } from '@/use/useModels'
export default defineComponent({
  components: {
    ModelList
  },
  setup (_, context) {
    const { fetch, models } = useModels()
    fetch()
    return {
      models
    }
  }
})
</script>

<style>
</style>
