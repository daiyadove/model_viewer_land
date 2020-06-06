import { ref } from '@vue/composition-api'
import firebase from '@/plugins/firebase'

export const useModels = () => {
  const models = ref([])
  const db = firebase.firestore()

  const fetch = () => {
    db.collection('models').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        models.value.push(doc.data())
      })
    })
  }
  return {
    fetch,
    models
  }
}
