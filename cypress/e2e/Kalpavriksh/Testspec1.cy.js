/// <reference types="cypress" />

describe('Test Suite One', function() 
{
    it('Visit the homepage and click on menu nav', function() 
{
    //Visit the Homepage
    cy.viewport(1440, 960) //Set viewport here
    cy.visit("https://kalpavrikshfund.com/")
    
    //Click on menu navigations
    cy.get('#menu-item-16553').click()

    cy.get('#menu-item-16554').click()

    cy.get('#menu-item-16555').click()

    cy.get('#menu-item-16556').click()

    cy.get('#menu-item-16557').click()

    cy.get('#menu-item-16558').click()
    
    //Assertions
    cy.get('#contact > .span_12 > :nth-child(1) > :nth-child(1) > .headline').should('be.visible')

    cy.get(':nth-child(1) > .team-manager-free-items-16535 > .team-manager-free-items-profiles-16535 > [href=""]').click()
    cy.contains('Rajesh Srivastava').should('be.visible')

})
    })