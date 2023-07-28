it('has three inputs', () => {
  cy.visit('/')
  cy.get('[data-testid=Here]')
    .should('have.length', 1)
  cy.get('[data-testid=OrHere]')
    .should('have.length', 1)
  cy.get('[data-testid=OrEvenHere]')
    .should('have.length', 1)
})