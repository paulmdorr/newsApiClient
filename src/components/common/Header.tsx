import {
  StyledHeader,
  HeaderInnerContainer,
  HeaderH1,
  Logo,
  Title,
} from './Header.css'

export type HeaderProps = {
  siteTitle: string
}

const Header = ({ siteTitle }: HeaderProps) => (
  <StyledHeader>
    <HeaderInnerContainer>
      <HeaderH1>
        <Logo src="/static/logo256.png" alt="App logo" />
        <Title>{siteTitle}</Title>
      </HeaderH1>
    </HeaderInnerContainer>
  </StyledHeader>
)

export default Header
