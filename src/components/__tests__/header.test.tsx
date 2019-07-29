import React from 'react'
import { shallow } from 'enzyme'

import Header from '../common/Header'

describe('<Header />', () => {
  test(`displays the header's title`, async () => {
    const wrapper = shallow(<Header siteTitle="Test title" />)
    expect(wrapper.find('Headercss__Title').text()).toEqual('Test title')
  })
})
