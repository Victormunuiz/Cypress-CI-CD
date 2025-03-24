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

      //clica no botão de cadastro de usuário

      cy.get('[data-testid="cadastrarUsuarios"]').click()

      const uniqueSuffix = Date.now();

      // Nome e e-mail únicos
      const uniqueName = `Fulano_${uniqueSuffix}`;
      const uniqueEmail = `fulano_${uniqueSuffix}@qa.com`;
  
      // Preencher os campos
      cy.get('[data-testid="nome"]').type(uniqueName)
      cy.get('[data-testid="email"]').type(uniqueEmail)
      cy.get('[data-testid="password"]').type('123456')
      cy.get('[data-testid="checkbox"]').click()// cadastra como admin...
      cy.get('[data-testid="cadastrarUsuario"]').click() 
      
  
      // Validação do sucesso (ajuste conforme a aplicação)
      cy.url().should('eq', 'https://front.serverest.dev/admin/listarusuarios')
      cy.get('h1').should('contain.text', 'Lista dos usuários')

      //clica no botão de logout

      cy.get('[data-testid="logout"]').click()
      cy.url().should('eq', 'https://front.serverest.dev/login')

      //faz login com o novo usuário cadastrado

      cy.get('[data-testid="email"]').type(uniqueEmail)
      cy.get('[data-testid="senha"]').type("123456")
      cy.get('[data-testid="entrar"]').click({force: true});

      //valida se os campos foram preenchidos corretemente

      cy.get('[data-testid="email"]').should('have.value', uniqueEmail)
          cy.get('[data-testid="senha"]').should('have.value', '123456')
  

      //valida se o usuário fez login com sucesso
      
      cy.url().should('eq', 'https://front.serverest.dev/admin/home');
      cy.get('[data-testid="home"]').should('contain.text', 'Home');



      
     
  
  
  
    })
  })
  
  