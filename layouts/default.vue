<template>
  <div>
    <Header />
    <div class="container mx-auto flex justify-center items-center text-center min-h-screen">
      <nuxt />
    </div>
    <div ref="ad" />
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from '@vue/composition-api'
import Header from '@/components/header'
export default defineComponent({
  components: {
    Header
  },
  setup () {
    const ad = ref(null)
    onMounted(() => {
      window.nend_params = {
        media: 62750,
        site: 337979,
        spot: 1000227,
        type: 1,
        oriented: 1
      }
      const script = document.createElement('script')
      script.src = 'https://js1.nend.net/js/nendAdLoader.js'
      const write = window.document.write
      console.log(ad.value)
      window.document.write = (str) => {
        ad.value.innerHTML += str
      }
      ad.value.appendChild(script)
      window.document.write = write
    })
    return {
      ad
    }
  }
})
</script>

<style>
</style>
