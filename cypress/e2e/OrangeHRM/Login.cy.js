///<reference types = 'cypress' />

describe('Orange HRM Test Suite',() => {

    it('Login as user', () =>
    {
      cy.viewport(1280,1024)
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123{enter}')
      cy.wait(2000)
      //cy.get('.oxd-topbar-header-title').should('contain.text','Dashboard')
      cy.get('.oxd-userdropdown-tab').click()
      cy.get(':nth-child(1) > .oxd-userdropdown-link').click()
      cy.get('.oxd-dialog-container-default--inner')
      .find('.oxd-sheet').should('include.text','About')
    })
})
