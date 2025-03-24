describe('Login', () => {
  it('Deve realizar login com sucesso', () => {
    cy.visit('https://front.serverest.dev/login')

     // Preenche os campos
     cy.get('[data-testid="email"]').type("fulano@qa.com")
     cy.get('[data-testid="senha"]').type("teste")
 
     // Validação: verifica se os campos não estão vazios
        cy.get('[data-testid="email"]').should('have.value', 'fulano@qa.com')
        cy.get('[data-testid="senha"]').should('have.value', 'teste')

    //clica no botão de login
     cy.get('[data-testid="entrar"]').click({force: true});
     
 
     // Verifica se fez login com sucesso (ajuste conforme a aplicação)
     
    cy.url().should('eq', 'https://front.serverest.dev/admin/home')
    
    cy.get('[data-testid="home"]').should('contain.text', 'Home')



  })
})

