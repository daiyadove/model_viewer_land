<template>
  <model-viewer
    ar
    alt="hoge"
    src="https://firebasestorage.googleapis.com/v0/b/anyr-land.appspot.com/o/eva%2Fout.glb?alt=media&token=1eec0063-b796-48b5-9fcd-a228bd1d26ba"
    ios-src="https://firebasestorage.googleapis.com/v0/b/anyr-land.appspot.com/o/eva%2Fusdz%2FEva01.usdz?alt=media&token=e8900293-8bb2-4865-969e-5397b26a4fb3"
    shadow-intensity="1"
    camera-controls
    interaction-prompt="auto"
    auto-rotate
    magic-leap
  />
</template>

<script>
import '@google/model-viewer/dist/model-viewer'

export default {
  components: {
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
