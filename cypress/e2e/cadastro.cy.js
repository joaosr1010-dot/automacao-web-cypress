import { faker } from '@faker-js/faker'

describe ('Cadastro',() =>{
  let name, email, password

  beforeEach(() => {
    name = faker.person.fullName()
    email = faker.internet.email({provider: 'gmail.com'})
    password = faker.internet.password({length: 8})

    cy.visit ('/register')

  })

    it('Cadastro realizado com sucesso', () => {

        cy.get('#user')
          .type(name)

        cy.get('#email')
          .type(email)

        cy.get('#password')
          .type(password)

        cy.get('#btnRegister')
          .click ()

        cy.get('#swal2-title')
          .should ('contain', 'Cadastro realizado!')
          .and ('be.visible')
    })

    it('Cadastro com e-mail inválido', () => {

        cy.get('#user')
          .type(name)

        cy.get('#email')
          .type('teste@,com')

        cy.get('#password')
          .type(password)

        cy.get('#btnRegister')
          .click ()

        cy.get('#errorMessageFirstName')
          .should ('contain', 'O campo e-mail deve ser prenchido corretamente')
          .and ('be.visible')
    })

    it('Cadastro com senha inválida', () => {

        cy.get('#user')
          .type(name)

        cy.get('#email')
          .type(email)

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
          .type(email)

        cy.get('#password')
          .type(password)

        cy.get('#btnRegister')
          .click ()

        cy.get('#errorMessageFirstName')
          .should ('contain', 'O campo nome deve ser prenchido')
          .and ('be.visible')
    })       

    it('Cadastro com e-mail vazio', () => {

        cy.get('#user')
          .type(name)

        cy.get('#password')
          .type(password)

        cy.get('#btnRegister')
          .click ()

        cy.get('#errorMessageFirstName')
          .should ('contain', 'O campo e-mail deve ser prenchido corretamente')
          .and ('be.visible')
    })
    
    it('Cadastro com senha vazia', () => {

        cy.get('#user')
          .type(name)

        cy.get('#email')
          .type(email)

        cy.get('#btnRegister')
          .click ()

        cy.get('#errorMessageFirstName')
          .should ('contain', 'O campo senha deve ter pelo menos 6 dígitos')
          .and ('be.visible')

    })

})