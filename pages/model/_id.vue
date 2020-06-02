<template>
  <ModelItem
    :src="model.src"
    :iosSrc="model.iosSrc"
    :title="model.alt"
    :ccBy="model.ccBy"
  />
</template>

<script>
import '@google/model-viewer/dist/model-viewer'
import { defineComponent } from '@vue/composition-api'
import ModelItem from '@/components/ModelItem'
import data from '@/data/data.json'
export default defineComponent({
  components: {
    ModelItem
  },
  setup (_, context) {
    const id = context.root.$route.params.id
    const models = data.models
    const model = models.find(model => Number(model.id) === Number(id))
    return {
      model
    }
  }
})
</script>

<style>
</style>
