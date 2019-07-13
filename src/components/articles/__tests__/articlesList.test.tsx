import React from 'react'
import { shallow } from 'enzyme'

import ArticlesList from '../ArticlesList'

const mockArticles = [
  {
    id: 0,
    title: 'Test article',
  },
  {
    id: 1,
    title: 'Test article 2',
  },
]

describe('<ArticlesList />', () => {
  test(`displays two articles`, async () => {
    const wrapper = shallow(<ArticlesList articles={mockArticles} />)

    expect(wrapper.find('Styled(ul)').children().length).toBe(2)
  })

  test(`displays an empty articles list`, async () => {
    const wrapper = shallow(<ArticlesList />)

    expect(wrapper.find('Styled(ul)').children().length).toBe(0)
  })
})
