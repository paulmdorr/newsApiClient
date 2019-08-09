import styled from 'styled-components'

const StyledSelect = styled.div`
  border-bottom: 1px dashed gray;
  cursor: pointer;
  display: inline-block;
  height: 30px;
  overflow: hidden;
  width: 130px;

  &:after {
    bottom: 35px;
    content: '\\2304';
    font-size: 26px;
    line-height: 16px;
    position: relative;
    pointer-events: none;
    transition: 100ms linear;
  }

  &:hover:after {
    bottom: 33px;
    transition: 100ms linear;
  }

  select {
    appearance: none;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
    font-family: Sahitya;
    font-size: 18px;
    height: 30px;
    width: 130px;

    option {
      font-family: Sahitya;
      font-size: 18px;
    }
  }
`

export { StyledSelect }
