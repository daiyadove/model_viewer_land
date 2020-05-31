<template>
  <div class="mb-8 shadow-lg">
    <ModelView
      :src="src"
      :iosSrc="iosSrc"
      :title="title"
    />
    <ModelInfo
      :title="title"
      :ccBy="ccBy"
    />
  </div>
</template>

<script>
import '@google/model-viewer/dist/model-viewer'
import { defineComponent } from '@vue/composition-api'
import ModelView from '@/components/ModelView'
import ModelInfo from '@/components/ModelInfo'

export default defineComponent({
  props: {
    src: { required: true },
    iosSrc: { required: true },
    title: { required: true },
    ccBy: { required: true }
  },
  components: {
    ModelView,
    ModelInfo
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
