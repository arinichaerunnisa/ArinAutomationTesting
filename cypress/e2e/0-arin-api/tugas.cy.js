// Menulis kode awal untuk pemanggilan 
Cypress.Commands.add('loginViaAPI', (
    email = Cypress.env('userEmail'),
    password = Cypress.env('userPassword')
  ) => {
    // Memanggil kode yang sudah dibuat
    cy.request('POST', `${Cypress.env('apiUrl')}/users/login`, {
      username: email,
      password, 
    }).then((response) => {
      cy.setCookie('sessionId', response.body.sessionId)
      cy.setCookie('userId', response.body.userId)
      cy.setCookie('userName', response.body.userName)
      cy.visit('/#!/main')
    })
  })

  