import React from 'react'
import { shallow } from 'enzyme'

import ImageLoader from '../ImageLoader'

describe('<ImageLoader />', () => {
  test(`displays an unloaded image`, async () => {
    const wrapper = shallow(<ImageLoader alt="Test alt" urlToImage="testUrl" />)

    expect(wrapper.find('ImageLoadercss__Image').props().alt).toEqual(
      'Test alt'
    )
  })

  test(`displays an loaded image`, async () => {
    const mockEvent: any = {}
    const wrapper = shallow(<ImageLoader alt="Test alt" urlToImage="testUrl" />)

    wrapper.find('ImageLoadercss__Image').prop('onLoad')(mockEvent)

    expect(wrapper.find('ImageLoadercss__Image').prop('loaded')).toEqual(true)
  })
})
