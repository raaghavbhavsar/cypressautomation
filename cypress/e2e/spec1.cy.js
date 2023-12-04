describe('my first test', () => 
{
  it('spec1', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type')
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')

    cy.get('.action-email').type('raghav1@email.com')
    cy.get('.action-email').should('have.value', 'raghav1@email.com')
    cy.get('.action-focus').type('password')

  })
})