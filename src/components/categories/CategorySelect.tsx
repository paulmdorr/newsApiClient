import styled from 'styled-components'

import FilterSelect from '../common/FilterSelect'

const Wrapper = styled.div`
  text-align: right;
`

const Text = styled.span`
  display: inline-block;
  margin-right: 5px;
`

function CategorySelect(props) {
  return (
    <Wrapper>
      <Text>Showing news for category:</Text>
      <FilterSelect {...props} />
    </Wrapper>
  )
}

export default CategorySelect
