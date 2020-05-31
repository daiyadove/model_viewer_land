<template>
  <model-viewer
    :src="src"
    :ios-src="iosSrc"
    :alt="title"
    ar
    shadow-intensity="1"
    camera-controls
    interaction-prompt="auto"
    auto-rotate
    magic-leap
    class="w-auto"
  />
</template>

<script>
import '@google/model-viewer/dist/model-viewer'
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  props: {
    src: { required: true },
    iosSrc: { required: true },
    title: { required: true }
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
