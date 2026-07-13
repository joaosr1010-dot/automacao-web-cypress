describe ('Cadastro',() =>{
  beforeEach(() => {
    cy.visit ('/register')

  })

    it('Cadastro realizado com sucesso', () => {

        cy.get('#user')
          .type('Marcos Antônio')

        cy.get('#email')
          .type('marcos12@gmail.com')

        cy.get('#password')
          .type('1234567')

        cy.get('#btnRegister')
          .click ()

        cy.get('#swal2-title')
          .should ('contain', 'Cadastro realizado!')
          .and ('be.visible')
    })

    it('Cadastro com e-mail inválido', () => {

        cy.get('#user')
          .type('Marcos Antônio')

        cy.get('#email')
          .type('marcos1gmail,com')

        cy.get('#password')
          .type('1234567')

        cy.get('#btnRegister')
          .click ()

        cy.get('#errorMessageFirstName')
          .should ('contain', 'O campo e-mail deve ser prenchido corretamente')
          .and ('be.visible')
    })

    it('Cadastro com senha inválida', () => {

        cy.get('#user')
          .type('Marcos Antônio')

        cy.get('#email')
          .type('marcos12@gmail.com')

        cy.get('#password')
          .type('123')

        cy.get('#btnRegister')
          .click ()

        cy.get('#errorMessageFirstName')
          .should ('contain', 'O campo senha deve ter pelo menos 6 dígitos')
          .and ('be.visible')
    })
     it('Cadastro com nome vazio', () => {

        cy.get('#email')
          .type('marcos12@gmail.com')

        cy.get('#password')
          .type('1234567')

        cy.get('#btnRegister')
          .click ()

        cy.get('#errorMessageFirstName')
          .should ('contain', 'O campo nome deve ser prenchido')
          .and ('be.visible')
    })       

    it('Cadastro com e-mail vazio', () => {

        cy.get('#user')
          .type('Marcos Antônio')

        cy.get('#password')
          .type('1234567')

        cy.get('#btnRegister')
          .click ()

        cy.get('#errorMessageFirstName')
          .should ('contain', 'O campo e-mail deve ser prenchido corretamente')
          .and ('be.visible')
    })
    
    it('Cadastro com senha vazia', () => {

        cy.get('#user')
          .type('Marcos Antônio')

        cy.get('#email')
          .type('marcos12@gmail.com')

        cy.get('#btnRegister')
          .click ()

        cy.get('#errorMessageFirstName')
          .should ('contain', 'O campo senha deve ter pelo menos 6 dígitos')
          .and ('be.visible')

    })

})