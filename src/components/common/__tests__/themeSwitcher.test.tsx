import React from 'react'
import { shallow } from 'enzyme'

import ThemeSwitcher from '../ThemeSwitcher'
import * as ThemeChangerProvider from '../../wrappers/ThemeChangerProvider'

function mockContext(context) {
  jest
    .spyOn(ThemeChangerProvider, 'useThemeChangerContext')
    .mockImplementation(() => context)
}

describe('<ThemeSwitcher />', () => {
  test(`displays the ThemeSwitcher toggle`, async () => {
    const wrapper = shallow(<ThemeSwitcher />)
    expect(wrapper.find('ThemeSwitchercss__Toggle')).toBeDefined()
  })

  test(`switches the theme to dark when calling onChange`, async () => {
    const context = {
      theme: {},
      themeName: ThemeChangerProvider.THEME_LIGHT,
      setTheme: jest.fn(),
    }
    mockContext(context)
    const wrapper = shallow(<ThemeSwitcher />)
    const e: any = {}

    wrapper
      .find('input')
      .props()
      .onChange(e)
    expect(context.setTheme.mock.calls.length).toBe(1)
  })

  test(`switches the theme to light when calling onChange`, async () => {
    const context = {
      theme: {},
      themeName: ThemeChangerProvider.THEME_DARK,
      setTheme: jest.fn(),
    }
    mockContext(context)
    const wrapper = shallow(<ThemeSwitcher />)
    const e: any = {}

    wrapper
      .find('input')
      .props()
      .onChange(e)
    expect(context.setTheme.mock.calls.length).toBe(1)
  })
})
