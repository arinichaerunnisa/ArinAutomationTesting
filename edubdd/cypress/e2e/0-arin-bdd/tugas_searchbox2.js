import SearchBoxx from './tugas_searchbox2.page';
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
 
          
Given ('I open the homepage', () => {
    SearchBoxx.visit();
}) 

When ('I type the keyword', () => {
    SearchBoxx.clickButton()
    SearchBoxx.fillUsername('username')
    SearchBoxx.fillPassword('password')
    SearchBoxx.chekBox()
    SearchBoxx.submitButton()
    SearchBoxx.searchTerm('online{enter}')
    
})

Then ('I should see the result', () => {
    cy.get('a[href="/online-banking.html"]').contains('Online')
    cy.get('a[href="/bank/online-statements.html"]').contains('Online')
    cy.get('.top_offset').contains('Online')
})