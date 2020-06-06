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
import firebase from '@/plugins/firebase'
export default defineComponent({
  components: {
    ModelItem
  },
  setup () {
    const models = []
    const db = firebase.firestore()
    db.collection('models').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        models.push(doc.data())
      })
    })
    return {
      models
    }
  }
})
</script>

<style>
</style>
