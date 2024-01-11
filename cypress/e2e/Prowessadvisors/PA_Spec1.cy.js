/// <reference types="cypress" />

describe('Prowess advisors Suite', () => 
{
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })
    it('Homepage',() => 
{
    //verify homepage logo
    cy.viewport(1280, 768) //Set viewport here
    cy.visit('https://prowessadvisors.com/')
    cy.get('.wgl-site-header > .container-wrapper > .elementor > .elementor-section > .elementor-container > .elementor-element-31ca025 > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .wgl-logotype-container > a > .default_logo').should('be.visible')

    //verify home in menu nav
    //cy.get('#menu-item-6656 > a > :nth-child(1) > .item_text').click()
    //cy.get('.elementor-element-27d7237 > .elementor-widget-container > .elementor-heading-title').should('be.visible')

    //Verify Our services block
    cy.get('.ctu-ulimate-style-1 > .vc-tabs-li-1-id-1').click()
    cy.get('#ctu-ulitate-style-1-id-1 > .container-fluid > .row > .tab-first > ul > :nth-child(1)').should('be.visible').and('have.text', 'Pre-series Funding')

    cy.get('.ctu-ulimate-style-1 > .vc-tabs-li-1-id-2').click()
    cy.get('#ctu-ulitate-style-1-id-2 > .container-fluid > .row > .tab-first > ul > :nth-child(3)').should('be.visible').and('have.text','Market Study')

    cy.get('.ctu-ulimate-style-1 > .vc-tabs-li-1-id-5').click()
    cy.get('#ctu-ulitate-style-1-id-5 > .container-fluid > .row > .tab-first > ul > :nth-child(1)').should('be.visible').and('have.text','Venture Equity Fund')

    cy.get('.ctu-ulimate-style-1 > .vc-tabs-li-1-id-5').click()
    cy.get('#ctu-ulitate-style-1-id-5 > .container-fluid > .row > .tab-first > ul > :nth-child(3)').should('be.visible').and('have.text','Private Equity')

})
})