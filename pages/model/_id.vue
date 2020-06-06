<template>
  <div>
    <ModelItem
      :src="model.src"
      :iosSrc="model.iosSrc"
      :title="model.alt"
      :ccBy="model.ccBy"
    />
  </div>
</template>

<script>
import '@google/model-viewer/dist/model-viewer'
import { defineComponent } from '@vue/composition-api'
import ModelItem from '@/components/ModelItem'
import { useModels } from '@/use/useModels'
export default defineComponent({
  components: {
    ModelItem
  },
  setup (_, context) {
    const { get } = useModels()
    const docId = context.root.$route.params.id
    const model = get(docId)
    return {
      model
    }
  }
})
</script>

<style>
</style>
