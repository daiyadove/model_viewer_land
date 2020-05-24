import * as ModelViewer from '@google/model-viewer/dist/model-viewer'

const ModelView = () => (
  <ModelViewer
    ar
    alt='eva'
    src='https://firebasestorage.googleapis.com/v0/b/anyr-land.appspot.com/o/eva%2Fout.glb?alt=media&token=1eec0063-b796-48b5-9fcd-a228bd1d26ba'
    ios-src='https://firebasestorage.googleapis.com/v0/b/anyr-land.appspot.com/o/eva%2Fusdz%2FEva01.usdz?alt=media&token=e8900293-8bb2-4865-969e-5397b26a4fb3'
    shadow-intensity="1"
    environment-image
    camera-controls
    interaction-prompt="auto"
    auto-rotate
    magic-leap
    style={{width: '500px', height: '500px'}}>
  </ModelViewer>
)

export default ModelView