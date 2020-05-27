const ModelView = (props) => {
  const p = props.params
  return (
    <model-viewer
      ar
      alt={p.alt}
      src={p.src}
      ios-src={p.isoSrc}
      shadow-intensity="1"
      environment-image
      camera-controls
      interaction-prompt="auto"
      auto-rotate
      magic-leap
      style={{width: '384px', height: '250px'}}>
    </model-viewer>
  )
}

export default ModelView;
