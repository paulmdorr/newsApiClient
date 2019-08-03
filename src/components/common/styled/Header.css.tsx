import styled from 'styled-components'

const StyledHeader = styled.header`
  margin-bottom: 50px;
  text-align: center;
`

const HeaderInnerContainer = styled.div`
  border-bottom: 2px solid #d2cbac;
  margin: 0 auto;
  max-width: 960px;
  padding: 20px;
`

const HeaderH1 = styled.h1`
  display: flex;
  margin: 0px;
`

const Logo = styled.img`
  opacity: 0.8;
  height: 100px;
  width: 100px;
`

const Title = styled.p`
  margin-left: 20px;

  @media screen and (max-width: ${({ theme }) => theme.sizes.maxMobileSize}) {
    margin: auto;
  }
`

export { StyledHeader, HeaderInnerContainer, HeaderH1, Logo, Title }
