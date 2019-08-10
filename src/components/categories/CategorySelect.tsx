import styled from 'styled-components'

import FilterSelect from '../common/FilterSelect'

const Wrapper = styled.div`
  text-align: right;
`

const Text = styled.span`
  display: inline-block;
  font-size: 18px;
  margin-right: 5px;
  overflow: hidden;
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
