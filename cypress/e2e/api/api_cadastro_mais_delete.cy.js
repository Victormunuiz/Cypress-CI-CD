describe('API - Teste funcional de cadastro e delete de usuário', () => {
  it('Deve cadastrar um usuário, deletá-lo e verificar que não existe mais', () => {

    // 1️⃣ Primeiro, faz o cadastro
    let userId;
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

      userId = response.body._id;
      cy.log("ID do usuário criado: " + userId);

      // 2️⃣ Depois, deleta o usuário criado
      cy.request({
        method: "DELETE",
        url: `https://serverest.dev/usuarios/${userId}`,
        failOnStatusCode: false
      }).then((deleteResponse) => {
        expect(deleteResponse.status).to.equal(200);
        expect(deleteResponse.body.message).to.equal("Registro excluído com sucesso");
        cy.log("Usuário deletado com sucesso: " + userId);

        // 3️⃣ Por fim, tenta buscar o usuário deletado
        cy.request({
          method: "GET",
          url: `https://serverest.dev/usuarios/${userId}`,
          failOnStatusCode: false
        }).then((getResponse) => {
          // Espera um erro 400 informando que não encontrou
          expect(getResponse.status).to.equal(400);
          expect(getResponse.body.message).to.equal("Usuário não encontrado");
        });
      });
    });
  });
});