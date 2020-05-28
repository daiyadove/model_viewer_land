const ModelInfo = (props) => {
  return (
    <div class="border-t border-b border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 leading-normal">
      <div class="mb-1">
        <div class="text-gray-900 font-bold text-xl mb-2">{props.title}</div>
      </div>
      <div class="text-sm">
        <span class="text-gray-900 leading-none">{props.title} by</span>
        <span class="text-gray-600 leading-none ml-2">ruddy illanes</span>
      </div>
    </div>
  )
}

export default ModelInfo;
