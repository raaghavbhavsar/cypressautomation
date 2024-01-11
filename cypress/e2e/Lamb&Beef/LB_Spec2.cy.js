/// <reference types="cypress" />

describe('Lamb and beef Test Suite', () => 
{
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })

it.only('Third test case', () =>
{
    cy.viewport (1280,800)
    cy.visit('https://dev-lambandbeef.gailabs.com/arabic')
    cy.get('.card-wrapper > :nth-child(1)').click()
    cy.get('.card-wrapper > :nth-child(3)').click()
    cy.get('.card').click()
    cy.url().should('include','/build-your-own-burger/mini-greek-lamb-burgers')
    cy.get('h1').should('contain.text','برجر لحم حملان مصغر على الطريقة اليونانية')
})
})