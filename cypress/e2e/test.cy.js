it('has three inputs', () => {
  cy.visit('/')
  cy.get('input')
    .should('have.length', 3)
})