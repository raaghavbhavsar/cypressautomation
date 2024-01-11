/// <reference types="Cypress" />

describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
//About us infobox content verification
cy.viewport(1280,800)
cy.visit('https://prowessadvisors.com/about-us/')
// cy.get('#menu-item-4518 > a > :nth-child(1) > .item_text').click()
cy.get('.page-header_title').should('be.visible').and('have.text','About Us')
cy.get('.wgl-infobox').click({multiple: true})
cy.get('.wgl-infobox_content').invoke('text').then((text)=>{
    const divTxt = text
    expect(divTxt).to.contain('two decades')
 
//Verify Our team - one member
cy.get('#slick-slide09').click()
cy.get(':nth-child(4) > span')
.should('be.visible')
.invoke('text')
.then((text) =>
{
    const divTxt = text
    expect(divTxt).to.contain('Senior Associate at Drip Capital')
})
})

})
})