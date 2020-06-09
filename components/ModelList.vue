<template>
  <ul>
    <li
      v-for="model in models"
      :key="model.title"
    >
      <ModelItem
        :src="model.src"
        :iosSrc="model.iosSrc"
        :title="model.alt"
        :ccBy="model.ccBy"
        :id="model.id"
      />
    </li>
  </ul>
</template>

<script>
import '@google/model-viewer/dist/model-viewer'
import { defineComponent } from '@vue/composition-api'
import ModelItem from '@/components/ModelItem'
export default defineComponent({
  components: {
    ModelItem
  },
  props: {
    models: { required: true }
  },
  setup (props) {
    return {
      props
    }
  }
})
</script>

<style>
</style>
