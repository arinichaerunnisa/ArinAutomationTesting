const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
 
Given ('I open login page', () => {
    cy.visit('http://zero.webappsecurity.com/')
    cy.get('#signin_button').click()
}) 

When ('I submit login', () => {
    cy.get('#user_login').clear()
    cy.get('#user_login').type('username')
    cy.get('input[name=user_password]').clear()
    cy.get('input[name=user_password]').type('password')
    cy.get('input[name=user_remember_me').check()
    cy.get('input[name=user_remember_me').should('be.checked')
    cy.get('input[name=submit').click()
    
})

Then ('I should see homepage', () => {
    cy.get('#account_activity_tab').should('be.visible')
})