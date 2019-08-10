describe('Articles', function() {
  it('successfully loads', function() {
    cy.visit('/')

    cy.get('h1')
      .get('p')
      .contains('News API Client')

    cy.get('li:first').contains('Published at:')
  })
})
