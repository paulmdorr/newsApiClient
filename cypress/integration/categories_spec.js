describe('Categories', function() {
  it('successfully loads', function() {
    cy.visit('/')

    cy.get('option:selected').contains('general')
  })

  it('switches category', function() {
    cy.get('option:selected').contains('general')
    cy.get('select').contains('technology')
    cy.get('select').select('technology')
  })
})
