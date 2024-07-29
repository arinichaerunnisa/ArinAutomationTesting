const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
 
          
Given ('I open the homepage', () => {
    cy.visit('http://zero.webappsecurity.com/')
    cy.get('#signin_button').click()
}) 

When ('I type the keyword', () => {
    cy.get('#user_login').clear()
    cy.get('#user_login').type('username')
    cy.get('input[name=user_password]').clear()
    cy.get('input[name=user_password]').type('password')
    cy.get('input[name=user_remember_me').check()
    cy.get('input[name=user_remember_me').should('be.checked')
    cy.get('input[name=submit').click()
    cy.get('[id= searchTerm]').type('online{enter}')
    
})

Then ('I should see the result', () => {
    cy.get('.top_offset').should('be.visible')
})