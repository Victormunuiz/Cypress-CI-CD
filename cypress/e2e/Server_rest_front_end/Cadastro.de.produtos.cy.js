describe('Login', () => {
    it('Deve realizar cadastro de produto corretamente', () => {
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
    //clica no botão de cadastrar produtos
      cy.get('[data-testid="cadastrarProdutos"]').click({force: true});

      cy.url().should('eq', 'https://front.serverest.dev/admin/cadastrarprodutos')

      cy.get('h1').should('contain.text', 'Cadastro de Produtos')

      const uniqueSuffix = Date.now();

      // Nome e e-mail únicos
      const uniqueName = `produto_${uniqueSuffix}`;
// Preencher os campos do produto
      cy.get('[data-testid="nome"]').type(uniqueName)
      cy.get('[data-testid="preco"]').type('100')   
      cy.get('[data-testid="descricao"]').type("esse produto é um teste")
      cy.get('[data-testid="quantity"]').type('10')
      cy.get('[data-testid="cadastarProdutos"]').click()

      cy.url().should('eq', 'https://front.serverest.dev/admin/listarprodutos')

      cy.get('h1').should('contain.text', 'Lista dos Produtos')
      


  
  
  
    })
  })