///<reference types = 'cypress' />

describe('Orange HRM Test Suite',() => {

    it('Verify page title on homepage', () =>
    {
      cy.viewport(1280,1024)
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get('div[class="orangehrm-login-branding"]').find('img').should('be.visible')
      
    })

})

