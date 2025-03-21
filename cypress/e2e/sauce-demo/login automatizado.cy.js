describe('Login automatizado', () => {
  it('deve realizar login com sucesso', () => {
    cy.visit('https://www.saucedemo.com/')

    // Preenche o login
    cy.get('[data-test="username"]').type("standard_user").should("have.value", "standard_user");
    cy.get('[data-test="password"]').type("secret_sauce").should("have.value", "secret_sauce");
    cy.get('[data-test="login-button"]').click()

    // Valida se o usuário foi redirecionado à homepage
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
  })
})