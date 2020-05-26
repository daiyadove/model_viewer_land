import ModelItem from '../components/ModelItem'
import data from '../data/data.json'

const ModelList = () => {
  return (
    <ul>
      {data.models.map((d, idx) => {
        return <ModelItem key={idx}
          iosSrc={d.iosSrc}
          src={d.src}
          alt={d.alt}
        />
      })}
    </ul>
  )
}
export default ModelList