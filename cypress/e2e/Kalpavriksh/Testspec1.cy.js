/// <reference types="cypress" />

describe('Test Suite One', function() 
{
    it('Visit the homepage and verify content for each menu nav', function() 
{
    //Visit the Homepage
    cy.viewport(1440, 960) //Set viewport here
    cy.visit("https://kalpavrikshfund.com/")

    //verify logo is present
    cy.get('#logo').should('be.visible')
    
    //Click on menu navigations
    cy.get('#menu-item-16553').click()
    cy.get('.kalpvriksha').should('be.visible')

    cy.get('#menu-item-16554').click()
    cy.get('#focus > .span_12 > .vc_col-sm-12 > :nth-child(1) > .headline').should('be.visible')

    cy.get('#menu-item-16555').click()
    cy.get('#ethos > .span_12 > .vc_col-sm-12 > :nth-child(1) > .font-special > strong').should('be.visible')

    cy.get('#menu-item-16556').click()
    cy.get('#portfolio > .span_12 > .vc_col-sm-12 > :nth-child(1) > .headline').should('be.visible')

    cy.get('#menu-item-16557').click()
    cy.get('[style="background-color: #ffffff; padding-top: 50px; padding-bottom: 0px; "] > .span_12 > .column_container > :nth-child(1) > .headline > strong').should('be.visible')

    cy.get('#menu-item-16558').click()
    cy.get('#contact > .span_12 > :nth-child(1) > :nth-child(1) > .headline').should('be.visible')


})
    })