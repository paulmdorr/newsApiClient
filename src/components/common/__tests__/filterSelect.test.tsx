import React from 'react'
import { shallow } from 'enzyme'
import { matchers } from 'jest-emotion'

import FilterSelect from '../FilterSelect'

expect.extend(matchers)

const mockProps = {
  options: ['one', 'two', 'three'],
  onChange: jest.fn(),
  selected: 'one',
}

describe('<FilterSelect />', () => {
  test(`displays a select with options`, async () => {
    const wrapper = shallow(<FilterSelect {...mockProps} />)
    expect(wrapper.find('select').props().value).toBe('one')
    expect(wrapper.find('option').length).toBe(3)
  })

  test(`calls onChange when selecting`, async () => {
    const wrapper = shallow(<FilterSelect {...mockProps} />)
    wrapper.find('select').simulate('change', { target: { value: 'three' } })
    expect(mockProps.onChange.mock.calls.length).toBe(1)
    expect(mockProps.onChange.mock.calls[0][0].target.value).toBe('three')
  })

  test(`displays a select with no options`, async () => {
    mockProps.options = null
    const wrapper = shallow(<FilterSelect {...mockProps} />)
    expect(wrapper.find('select').props().value).toBe('one')
    expect(wrapper.find('option').length).toBe(0)
  })
})
