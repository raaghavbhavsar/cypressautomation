// type definitions for Cypress object "cy"

/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
})

describe('Third Cypress Test', function() 
{
    it('Visit a demo site and check for homepage', function() 
{

    //Visit the prowess adviors webapp
    cy.visit("https://prowessadvisors.com/")
    cy.get('.header_area_container > .wgl-logotype-container > a > .logo-mobile').click()
    
    })
})