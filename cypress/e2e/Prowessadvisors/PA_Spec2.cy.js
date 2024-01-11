/// <reference types="cypress" />

describe('Prowess advisors Suite', () => 
{
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })
    it('Footer',() => 
{
    cy.viewport(1420, 768) //Set viewport here
    cy.visit('https://prowessadvisors.com/')
    
    //Footer validation
    cy.get(':nth-child(3) > .footer-list').should('be.visible').and('have.text','Contact Us')
    cy.get('[href="/transactions/"]').should('be.visible').and('have.text','Transactions')

})
})