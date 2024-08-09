cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            expect(response.status).equal(201)
            expect(response.body.name).equal('arini chaerunnisa')
            expect(response.body.tempatlahir).equal('Indramayu')
        })

cy.request({
    method: 'GET',
    url: 'https://reqres.in/api/users?page=2'
    }).as('users')
    cy.get('@users').its('status').should('equal', 200)

    
cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/ditto/')
    .then((res) => {
    expect(res.body.abilities[0].ability.name).to.eq('limber')
	
})
	

