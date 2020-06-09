<template>
  <div class="mb-8 shadow-lg">
    <ModelView
      :src="src"
      :iosSrc="iosSrc"
      :title="title"
    />
    <template v-if="id">
      <nuxt-link :to="`model/${id}`">
        <ModelInfo
          :title="title"
          :ccBy="ccBy"
        />
      </nuxt-link>
    </template>
    <template v-else>
      <ModelInfo
        :title="title"
        :ccBy="ccBy"
      />
    </template>
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
    ccBy: { required: true },
    id: { required: false }
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
