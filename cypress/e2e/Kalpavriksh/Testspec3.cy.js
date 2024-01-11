/// <reference types="cypress" />

describe('Test Suite One', () => 
{
    it('Verify Know more button',() => 
{
    //verify new url
    cy.viewport(1400, 768) //Set viewport here
    cy.visit('https://www.kalpavrikshfund.com/')
    cy.get('.n2-style-abb47f12c99b509e8eb59cd74c20b5ae-heading').click()
    cy.url().should('include','about')

    //verify website image
    cy.get('#n2-ss-2item4').should('be.visible')
})
})