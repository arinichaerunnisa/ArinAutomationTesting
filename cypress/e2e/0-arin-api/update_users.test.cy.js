describe('Update User', () => {
    it('Succesfully update user', () => {
        var user = {
            "name": "Chaerunnisa Arini",
            "job": "qa"
        }
        cy.request('PUT', 'https://reqres.in/api/users/2', user).then ((response) => {
            expect(response.status).equal(200)
            expect(response.body.name).equal("Chaerunnisa Arini")
        })
    })
})