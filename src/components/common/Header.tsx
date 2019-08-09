import {
  StyledHeader,
  HeaderInnerContainer,
  HeaderH1,
  Logo,
  Title,
} from './styled/Header.css'
import ThemeSwitcher from './ThemeSwitcher'

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
      <ThemeSwitcher />
    </HeaderInnerContainer>
  </StyledHeader>
)

export default Header
