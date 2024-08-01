describe('Get User List', () => {
    it('Verify the listusers will displayed', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2'
        }).as('users')
        cy.get('@users').its('status').should('equal', 200)
    })
})