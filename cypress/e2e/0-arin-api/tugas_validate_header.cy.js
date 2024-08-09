describe('Validate Header', () => {
    it('Succesfully Validate Header Content-Type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
            .should('include', 'application/json; charset=utf-8')

        cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/ditto/').then((response) => {
            expect(response.status).equal(200)
            expect(response.body.abilities[1].ability.name).equal('imposter')
            })
            
    })
})


