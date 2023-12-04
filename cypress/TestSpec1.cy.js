describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('Kitchen')
    cy.contains('type')
  })
})