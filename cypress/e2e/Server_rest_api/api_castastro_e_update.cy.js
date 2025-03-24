describe('API - Teste funcional de cadastro e update de usuário', () => {
    it('Deve cadastrar um usuário, fazer update e verificar se as informações foram atualizadas com sucesso', () => {
  
      // 1️⃣ Primeiro, faz o cadastro
      let userId;
      const originalEmail = "beltrano" + Date.now() + "@qa.com.br";
  
      cy.request({
        method: "POST",
        url: "https://serverest.dev/usuarios",
        body: {
          "nome": "Fulano da Silva",
          "email": originalEmail, // e-mail único
          "password": "teste",
          "administrador": "true"
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.equal(201);
        expect(response.body.message).to.equal("Cadastro realizado com sucesso");
  
        userId = response.body._id;
        cy.log("ID do usuário criado: " + userId);
  
        // 2️⃣ Depois, faz update do usuário criado
        const updatedEmail = "beltranoUpdate" + Date.now() + "@qa.com.br";
  
        cy.request({
          method: "PUT",
          url: `https://serverest.dev/usuarios/${userId}`,
          body: {
            "nome": "Fulano Atualizado",
            "email": updatedEmail,
            "password": "testeAtualizado",
            "administrador": "false"
          },
          failOnStatusCode: false
        }).then((updateResponse) => {
          expect(updateResponse.status).to.equal(200);
          expect(updateResponse.body.message).to.equal("Registro alterado com sucesso");
          cy.log("Usuário atualizado com sucesso: " + userId);
  
          // 3️⃣ Por fim, busca o usuário para validar as informações atualizadas
          cy.request({
            method: "GET",
            url: `https://serverest.dev/usuarios/${userId}`,
            failOnStatusCode: false
          }).then((getResponse) => {
            expect(getResponse.status).to.equal(200);
            expect(getResponse.body.nome).to.equal("Fulano Atualizado");
            expect(getResponse.body.email).to.equal(updatedEmail);
            expect(getResponse.body.administrador).to.equal("false");
          });
        });
      });
    });
  });
  