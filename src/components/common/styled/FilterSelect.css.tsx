import styled from 'styled-components'

const StyledSelect = styled.div`
  border-bottom: 1px dashed gray;
  cursor: pointer;
  display: inline-block;
  height: 30px;
  overflow: hidden;
  width: 130px;

  &:after {
    bottom: 22px;
    background: transparent url(${({ theme }) => theme.images.chevronDown})
      no-repeat;
    content: '';
    display: inline-block;
    font-size: 26px;
    height: 26px;
    line-height: 16px;
    opacity: 0.8;
    position: relative;
    pointer-events: none;
    transition: 200ms linear;
    width: 26px;
  }

  &:hover:after {
    bottom: 25px;
    transition: 200ms linear;
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
      background: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.text};
      font-family: Sahitya;
      font-size: 18px;
    }
  }
`

export { StyledSelect }
