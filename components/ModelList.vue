<template>
  <ul>
    <li v-for="model in models" :key="model.title">
      <ModelItem
        :src="model.src"
        :iosSrc="model.iosSrc"
        :title="model.alt"
        :ccBy="model.ccBy"
      />
    </li>
  </ul>
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
  setup () {
    const models = data.models
    console.log(models)
    return {
      models
    }
  }
})
</script>

<style>
</style>
