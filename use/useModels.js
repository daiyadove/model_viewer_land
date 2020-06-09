import { ref } from '@vue/composition-api'
import firebase from '@/plugins/firebase'

export const useModels = () => {
  const models = ref([])
  const db = firebase.firestore()

  const fetch = () => {
    db.collection('models').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const model = doc.data()
        model.id = doc.id
        models.value.push(model)
      })
    })
  }
  const get = (docId) => {
    const models = ref({})
    const docRef = db.collection('models').doc(docId)
    docRef.get().then((doc) => {
      if (doc.exists) {
        models.value = doc.data()
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!')
      }
    }).catch((error) => {
      console.log('Error getting document:', error)
    })
    return models
  }

  return {
    fetch,
    get,
    models
  }
}
