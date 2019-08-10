describe('Theme Changer', function() {
  it('successfully loads', function() {
    cy.visit('/')

    cy.get('label[for="dn"]')
  })

  it('switches theme', function() {
    cy.get('body').should('have.css', 'background-color', 'rgb(242, 242, 242)')
    cy.get('label[for="dn"]').click()
    cy.get('body').should('have.css', 'background-color', 'rgb(28, 28, 28)')
  })
})
