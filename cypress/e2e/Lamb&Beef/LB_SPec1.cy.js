/// <reference types="cypress" />

describe('Lamb and beef Test', () => 
{
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })
    it('Homepage',() => 
{
    //verify homepage logo
    cy.viewport(1280, 768) //Set viewport here
    cy.visit('https://www.aussiebeefandlamb.me/')
    cy.get('.logo').should('be.visible')

    //Search box
    //cy.get('.search-form').type('Beef').type('{enter}')
    cy.get('.search-form').type('Beef')
    cy.get('.btn').invoke('removeAttr','display:none').click({force:true})
    cy.get('#banner-search-result-text').should('have.text','Beef')
})
})
it.only('Second test case', () =>
{
    //verify meat cuts
    cy.viewport (1280,800)
    cy.visit('https://dev-lambandbeef.gailabs.com/arabic/meat-cuts-for-your-next-dish')
    cy.get(':nth-child(3) > .bg-card-content > .bg-card-footer > .action-btn').click()
    cy.get('.link-tabs > ul > :nth-child(2) > a').click()

    
    cy.get('[alt="shortribs"]').click({force: true}) //Verify Short ribs
    cy.get('#cuts > .bg-card-wrapper > .bg-card-content > .bg-card-body > h2')
    .should('contain.text','أضلاع قصيرة')
    cy.get(':nth-child(1) > a > .card--footer > b').click()
    cy.url().should('include','/quick-grilled-habanero-short-ribs')

})