/// <reference types="Cypress" />

describe('My second test for cypress', function() 

{

it('My firsttest case', function()

{

cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
cy.get('.search-keyword').type('ca')
cy.wait(2000)
cy.get('.products').find('.product').should('have.length',4)
cy.get(':nth-child(1) > .product-action > button').click()
cy.get('.products').find('.product').eq(3).contains('ADD TO CART').click()
cy.get('.products').find('.product').each(($el, index, $list) => {

const textVeg=$el.find('h4.product-name').text()
if(textVeg.includes('Cashews'))

{

cy.wrap($el).find('button').click();

}
})
})
})