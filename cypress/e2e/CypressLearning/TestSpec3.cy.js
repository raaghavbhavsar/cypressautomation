describe('My First Cypress Test', () => {
    it('Kitchen Sink', () => {
      cy.visit('example.cypress.io/')
  
      cy.contains('type').click()
      cy.get('.action-email').type('raghav1@gmail.com')
      cy.get('.action-email').should('have.value', 'raghav1@gmail.com')

    })
  })