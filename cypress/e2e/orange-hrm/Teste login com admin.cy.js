describe('testa se o login com usuário admin', () => {
    it('deve realizar login com sucesso', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        
      //preenche os campos de login
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin");
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123");
      
      //clica no botão de login
      cy.get('.oxd-button').click()


    //valida se o usuário foi redireiconado a pagina inicial do sistema(dashboard)

    cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

    })
  })