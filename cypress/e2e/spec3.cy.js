// type definitions for Cypress object "cy"

/// <reference types="cypress" />

describe('Second Cypress Test', function() 
{
    it('Visits the ToolsQA Demo Page and check the menu items', function() 
{

    //Visit the Demo QA Website
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    cy.get(':nth-child(3) > .product-action > button').click()
    cy.wait(2000)
    cy.get('.products').find('.product').eq(3).contains('ADD TO CART').click()
    cy.wait(2000)
    cy.get('.products').find('.product').each(($el, index, $list) => 
    
    {
    const textVeg=$el.find('h4.product-name').text()
    if (textVeg.includes('Cashews')) 
    {
    $el.find('ADD TO CART').click()    
    }
    
    })

    
    





}

)

}

)