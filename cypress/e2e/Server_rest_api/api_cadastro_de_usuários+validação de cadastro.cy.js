describe('API - Teste funcional de cadastro e busca de usuário', () => {
    it('Deve cadastrar um usuário e buscá-lo pelo ID', () => {
  
      // 1️⃣ Primeiro, faz o cadastro
      cy.request({
        method: "POST",
        url: "https://serverest.dev/usuarios",
        body: {
          "nome": "Fulano da Silva",
          "email": "beltrano" + Date.now() + "@qa.com.br", // e-mail único
          "password": "teste",
          "administrador": "true"
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.equal(201);
        expect(response.body.message).to.equal("Cadastro realizado com sucesso");
  
        //  Armazena o ID retornado
        const userId = response.body._id;
        cy.log("ID do usuário criado: " + userId);
  
        //  Agora faz uma requisição GET para buscar pelo ID
        cy.request({
          method: "GET",
          url: `https://serverest.dev/usuarios/${userId}`
        }).then((getResponse) => {
          expect(getResponse.status).to.equal(200);
          expect(getResponse.body).to.have.property('nome', "Fulano da Silva");
          expect(getResponse.body).to.have.property('_id', userId);
        });
      });
  
    });
  });