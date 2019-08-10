import { StyledSelect } from './styled/FilterSelect.css'

function FilterSelector({ options, selected, onChange }) {
  return (
    <StyledSelect>
      <select onChange={onChange} value={selected}>
        {options ? options.map(processOption) : ''}
      </select>
    </StyledSelect>
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
