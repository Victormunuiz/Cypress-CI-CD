
describe('API -Teste funcional de login', () => {
    it('deve realizar login com sucesso', () => {

    cy.request({
        method: "POST" ,
        url: "http://localhost:3000/login" ,
        body: {
            "email": "fulano@qa.com",
            "password": "teste"
        }
    }).then((Response)=>{
        expect(Response.status).to.equal(200)
        expect(Response.body.message).to.equal("Login realizado com sucesso")

    }) 
      

    });
    it("deve validar senha incorreta", () => {
        
        cy.request({
            method: "POST" ,
            url: "http://localhost:3000/login" ,
            body: {
                "email": "fulano@qa.com",
                "password": "test1"
            },
            failOnStatusCode: false
        }).then((Response)=>{
            expect(Response.status).to.equal(401)
            expect(Response.body.message).to.equal("Email e/ou senha inválidos")
    
        }) 
    });

  });