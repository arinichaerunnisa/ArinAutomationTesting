/// <reference types="cypress"/>

describe('Searchbox Test', function() {
  before(() => {
    cy.visit('http://zero.webappsecurity.com/login.html')
  })

it('should type into searchbox and submit', () => {
    cy.get('input[name="searchTerm"]').type('some text{enter}')
   })

it ('should show search result page', () => {
    cy.get('h2').should('contains.text', 'Search Results:')
})
})