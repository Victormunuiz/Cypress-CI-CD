describe('login automatizado', () => {
  it('deve realizar uma compra com sucesso', () => {
    cy.visit('https://www.saucedemo.com/')

    // Preenche o login
    cy.get('[data-test="username"]').type("standard_user").should("have.value", "standard_user");
    cy.get('[data-test="password"]').type("secret_sauce").should("have.value", "secret_sauce");
    cy.get('[data-test="login-button"]').click()

     // Valida se o usuário foi redirecionado à homepage
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    cy.get('[data-test="title"]').should("have.text", "Products");

    // Seleciona um item para compra (Sauce Labs Backpack)
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-badge"]').should("have.text", "1");

    // Clica no carrinho de compras
    cy.get('[data-test="shopping-cart-link"]').click()

    // Faz o checkout da compra
    cy.get('[data-test="checkout"]').click()

    // Preenche os campos do checkout
    cy.get('[data-test="firstName"]').type("testecypressauto")
    cy.get('[data-test="lastName"]').type("testecypresslastname")
    cy.get('[data-test="postalCode"]').type("2482-221")

    // Continua a compra
    cy.get('[data-test="continue"]').click()

    // Valida se o item correto está no resumo
    cy.get('[data-test="inventory-item-name"]').should('have.text', 'Sauce Labs Backpack')

    // Finaliza a compra
    cy.get('[data-test="finish"]').click()

    // Valida se a compra foi finalizada com sucesso
    cy.url().should('eq', 'https://www.saucedemo.com/checkout-complete.html')

    cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!')
  })
})
