import ModelView from '../components/ModelView'
import ModelInfo from '../components/ModelInfo'

const ModelItem = (props) => (
  <div>
    <ModelView
      params={{
        src: props.src,
        iosSrc: props.iosSrc,
        alt: props.alt
      }}
    />
  </div>
)

export default ModelItem