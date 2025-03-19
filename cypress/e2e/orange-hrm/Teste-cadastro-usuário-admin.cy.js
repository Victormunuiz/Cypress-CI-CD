describe('testa se o usuário consegue cadastrar um usuário com admin', () => {
it('deve realizar login com sucesso', () => {
cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

//preenche os campos de login
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin");
cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123");

//clica no botão de login
cy.get('.oxd-button').click()


//valida se o usuário foi redireiconado a pagina inicial do sistema(dashboard)

cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

//clica no botão de admin 

cy.get(':nth-child(1) > .oxd-main-menu-item').click()
cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');


//clica no botão add usuário


cy.get('.orangehrm-header-container > .oxd-button').click()
cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser');

//seleciona a role do usuário deve ser admin

cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
cy.get('.oxd-select-dropdown > :nth-child(2)').click()
cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').should('have.text', 'Admin') //valida se o item admin foi selecionado corretamente.

//Employee Name preenche 






})
})