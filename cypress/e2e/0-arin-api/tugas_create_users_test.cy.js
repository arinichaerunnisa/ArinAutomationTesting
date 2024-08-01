describe('Create New Users', () => {
    it('Succesfully create new users', () => {
        var user = {
            "name": "arini chaerunnisa",
            "tempatlahir": "Indramayu"
        }
    
        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            expect(response.status).equal(201)
            expect(response.body.name).equal('arini chaerunnisa')
            expect(response.body.tempatlahir).equal('Indramayu')
        })
    })

})