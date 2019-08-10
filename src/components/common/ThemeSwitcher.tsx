import {
  useThemeChangerContext,
  THEME_LIGHT,
  THEME_DARK,
} from '../wrappers/ThemeChangerProvider'
import {
  ToggleWrapper,
  Toggle,
  ToggleHandler,
  Crater1,
  Crater2,
  Crater3,
  Star1,
  Star2,
  Star3,
  Star4,
  Star5,
  Star6,
} from './styled/ThemeSwitcher.css'

export type ThemeSwitcherProps = {
  siteTitle: string
}

const ThemeSwitcher = () => {
  const { themeName, setTheme } = useThemeChangerContext()

  function onChange() {
    const newTheme = themeName === THEME_LIGHT ? THEME_DARK : THEME_LIGHT
    setTheme(newTheme)
  }

  return (
    <ToggleWrapper>
      <input type="checkbox" id="dn" onChange={onChange} />
      <Toggle htmlFor="dn">
        <ToggleHandler>
          <Crater1 />
          <Crater2 />
          <Crater3 />
        </ToggleHandler>
        <Star1 />
        <Star2 />
        <Star3 />
        <Star4 />
        <Star5 />
        <Star6 />
      </Toggle>
    </ToggleWrapper>
  )
}

export default ThemeSwitcher
