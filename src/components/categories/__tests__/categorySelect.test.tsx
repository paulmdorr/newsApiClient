import React from 'react'
import { shallow } from 'enzyme'
import { matchers } from 'jest-emotion'

import CategorySelect from '../CategorySelect'

expect.extend(matchers)

describe('<CategorySelect />', () => {
  test(`displays a FilterSelect with a text`, async () => {
    const wrapper = shallow(<CategorySelect />)
    expect(wrapper.find('CategorySelect__Text').props().children).toBe(
      'Showing news for category:'
    )
    expect(wrapper.find('FilterSelect')).toBeDefined()
  })
})
