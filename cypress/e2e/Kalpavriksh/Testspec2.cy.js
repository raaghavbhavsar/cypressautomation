/// <reference types="cypress" />

describe('Test Suite One', function() 
{
    it('Verify portfolio icons',() => 
{
    //Visit the Homepage
    cy.viewport(1920, 1024) //Set viewport here
    cy.visit("http://dev-kalpavrikshfund.gailabs.com/")
    cy.get('#menu-item-16556 > a').click()
    
    //Assertion
    cy.get('#portfolio > .span_12 > .vc_col-sm-12 > :nth-child(1) > .headline').should('be.visible')
    
    //verify the logos
    cy.get(':nth-child(1) > .vc_column-inner > .wpb_wrapper > .single_image > .attachment-full')
    cy.get(':nth-child(5) > .vc_column-inner > .wpb_wrapper > .single_image > .attachment-full')
    
    //contact us form
    cy.get('#menu-item-16558 > a').click()
    cy.get(':nth-child(3) > .wpcf7-form-control-wrap > .wpcf7-form-control').type('Roshan Singh')
    cy.get(':nth-child(5) > .wpcf7-form-control-wrap > .wpcf7-form-control').type('xyz1@mailinator.com')
    cy.get(':nth-child(7) > .wpcf7-form-control-wrap > .wpcf7-form-control').type('Test Subject')
    cy.get(':nth-child(9) > .wpcf7-form-control-wrap > .wpcf7-form-control').type('Test message to check the contact us form on dev instance')
    cy.get(':nth-child(10) > .wpcf7-form-control').click()
    //cy.get('.wpcf7-spinner').should('satisfy', Cypress.dom.isHidden)
    cy.get('.wpcf7-spinner').should(($el) => {

        if (!Cypress.dom.isVisible($el)) {
          throw new Error('Bhai! Element is hidden')
    }
})
})
})