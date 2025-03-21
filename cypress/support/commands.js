Cypress.Commands.add('cadastrarUsuario', (nome, email, password, administrador = "true") => {
  return cy.request({
    method: "POST",
    url: "https://serverest.dev/usuarios",
    body: {
      nome,
      email,
      password,
      administrador
    },
    failOnStatusCode: false
  });
});

// Comando para buscar usuário pelo ID
Cypress.Commands.add('buscarUsuarioPorId', (userId) => {
  return cy.request({
    method: "GET",
    url: `https://serverest.dev/usuarios/${userId}`
  });
});
  
  Cypress.Commands.add('deletarUsuarioPorId', (userId) => {
    return cy.request({
      method: "DELETE",
      url: `https://serverest.dev/usuarios/${userId}`,
      failOnStatusCode: false // para capturar qualquer erro no delete
    });
  });