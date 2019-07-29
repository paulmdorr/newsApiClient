function FilterSelector({ options, selected, onChange }) {
  return (
    <select onChange={onChange} value={selected}>
      {options ? options.map(processOption) : ''}
    </select>
  )
}

function processOption(option) {
  return (
    <option key={option} value={option}>
      {option}
    </option>
  )
}

export default FilterSelector
