<template>
  <model-viewer
    :src="src"
    :ios-src="iosSrc"
    :alt="title"
    ar
    shadow-intensity="1"
    interaction-prompt="auto"
    auto-rotate
    autoplay
    magic-leap
    class="w-auto"
  >
    <button slot="ar-button" class="bg-gray-200 px-2 py-1 rounded-full text-blue-700 font-semibold bg-transparent absolute bottom-0 right-0 m-2">
      👋 Play AR
    </button>
  </model-viewer>
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
model-viewer {
  background-color: #eee;
  --poster-color: #eee;
}
</style>
