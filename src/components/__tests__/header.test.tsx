import React from 'react'
import { shallow } from 'enzyme'

import Header from '../Header'

describe('<Header />', () => {
  test(`displays the header's title`, async () => {
    const wrapper = shallow(<Header siteTitle="Test title" />)
    expect(wrapper.find('h1').text()).toEqual('Test title')
  })
})
