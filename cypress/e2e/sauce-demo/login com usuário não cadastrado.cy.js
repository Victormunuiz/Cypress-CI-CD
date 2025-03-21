describe('Login automatizado com usuário não cadastrado', () => {
    it('ao tentar efetuar login deve aprensetar mensagem de erro bloquando o acesso ao sistema.', () => {
      cy.visit('https://www.saucedemo.com/')
  
      // Preenche o login
      cy.get('[data-test="username"]').type('locked_out_user')
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()
  
      // Valida se o usuário foi bloqueado de efeturar o login pois o mesmo não está cadastrado 
      cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
    })
  })