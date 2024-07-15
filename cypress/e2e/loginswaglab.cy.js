describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.saucedemo.com/');
        cy.get('user-name').type("standard_user");
        cy.get('password').type("secret_sauce");
        cy.url().should[contains], 'inventory';
        cy.get('span[class="product_label"].should("have.text, "product"')
  })
})