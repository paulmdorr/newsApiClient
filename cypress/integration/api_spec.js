let url = `/api/news/`

describe('Request to API', () => {
  it('displays articles from all categories', () => {
    cy.request(url).should(response => {
      expect(response.status).to.eq(200)
      expect(response).to.have.property('headers')
      expect(response).to.have.property('duration')
      expect(response.body).to.have.property('articles')
    })
  })

  it('displays articles from category science', () => {
    cy.request(`${url}science`).should(response => {
      expect(response.status).to.eq(200)
      expect(response).to.have.property('headers')
      expect(response).to.have.property('duration')
      expect(response.body).to.have.property('articles')
    })
  })
})
