import React from 'react'
import { shallow, mount } from 'enzyme'
import { matchers } from 'jest-emotion'

import Article from '../Article'

expect.extend(matchers)

const mockArticle = {
  title: 'Test article',
  author: 'Test author',
  url: 'https://testurl.com',
  urlToImage: 'https://testurlimage.com',
  publishedAt: '01/01/1900',
  description: 'Test description',
}

describe('<Article />', () => {
  test(`displays an article with the processed data`, async () => {
    const wrapper = shallow(<Article {...mockArticle} />)
    expect(wrapper.find('Articlecss__ArticleHeader').props().children).toBe(
      'Test article'
    )
    expect(wrapper.find('Articlecss__ArticleAuthor').props().children).toBe(
      'Written by: Test author'
    )
    expect(wrapper.find('Articlecss__ArticleDate').props().children).toBe(
      'Published at: 1/1/1900'
    )
    expect(wrapper.find('ImageLoader').props().alt).toBe('Test article')
    expect(wrapper.find('Articlecss__ArticleContent').props().children).toBe(
      'Test description'
    )
  })

  test(`displays an article without an author`, async () => {
    mockArticle.author = ''
    const wrapper = shallow(<Article {...mockArticle} />)

    expect(wrapper.find('Articlecss__ArticleAuthor').props().children).toBe('')
  })
})
