describe('Basic_Auth', () => {
    it('Successfully Login by appending username and password in URL', () => {
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
    })

    it('Successfully Login by headers', () => {
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth', () => {
            headers: {
                authorization: 'Basic YWRtaW46YWRtaW4='
            }
            failOnSttusCode: false
        })
        cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
    })
})